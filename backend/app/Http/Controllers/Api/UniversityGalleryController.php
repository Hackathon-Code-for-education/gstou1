<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\University;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class UniversityGalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index($id)
    {
        $university = University::findOrFail($id);

        // Получаем медиа коллекцию
        $mediaItems = $university->getMedia('gallery');

        $page = request()->get('page', 1); // Получаем номер текущей страницы из запроса или используем первую страницу
        $perPage = 30; // Количество элементов на страницу
        $offset = ($page - 1) * $perPage;

        $itemsForCurrentPage = $mediaItems->slice($offset, $perPage)->values();
        $paginator = new LengthAwarePaginator(
            $itemsForCurrentPage,
            $mediaItems->count(),
            $perPage,
            $page,
            ['path' => request()->url(), 'query' => request()->query()]
        );

        return response()->json($paginator);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request, string $id)
    {
        $request->validate([
            'images' => 'required|array',
            'images.*' => 'image',  // Ограничение на типы файлов и размер
        ]);

        $university = University::findOrFail($id);

        if($request->has('images')) {
            foreach ($request->file('images') as $image) {
                $university->addMedia($image)->toMediaCollection('gallery'); // 'gallery' - название коллекции
            }
        }

        return response()->json([
            'message' => 'Images uploaded successfully',
            'images' => $university->getMedia('gallery')->sortByDesc('created_at')->map->getUrl(),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id, $galleryId)
    {
        $university = University::findOrFail($id);

        // Находим медиа по его ID в коллекции gallery и удаляем его
        $mediaItem = $university->getMedia('gallery')->where('id', $galleryId)->first();

        if ($mediaItem) {
            $mediaItem->delete(); // Вызываем метод delete у модели Media
            return response()->json(['message' => 'Image deleted successfully'], 200);
        }

        return response()->json(['message' => 'Image not found'], 404);
    }

    public function search(Request $request)
    {
        $name = $request->input('name'); // Получаем имя из запроса

        // Проверяем, что имя задано, иначе возвращаем пустой ответ
        if (empty($name)) {
            return response()->json([]);
        }

        // Ищем университеты, чье имя содержит заданную строку
        $universities = University::when($name, function($query) use ($name) {
            $query->where('name', 'like', '%' . $name . '%');
        })->limit(50)->get();

        return response()->json($universities);
    }
}

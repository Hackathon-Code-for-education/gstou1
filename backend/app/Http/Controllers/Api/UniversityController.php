<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UniversityControllerResource;
use App\Models\University;
use Illuminate\Http\Request;

class UniversityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(UniversityControllerResource::collection(University::orderBy('name')->paginate(30))->response()->getData(true));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'description' => 'nullable',
            'location' => 'required|string|max:255',
            'avatar' => 'required|image',
        ]);

        $university = University::create([
            'name' => $validated['name'],
            'description' => $validated['description'] ?? null,
            'location' => $validated['location'],
        ]);

        if ($request->hasFile('avatar')) {
            $university->addMediaFromRequest('avatar')->toMediaCollection('avatars', 'public');
        }

        return response()->json(UniversityControllerResource::make($university));

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        return response()->json(UniversityControllerResource::make(University::find($id)));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $university = University::findOrFail($id);  // Находим университет или возвращаем ошибку 404

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'description' => 'nullable',
            'location' => 'sometimes|string|max:255',
            'avatar' => 'sometimes|image',  // 'sometimes' позволяет файл быть необязательным
        ]);

        // Обновляем данные университета
        $university->update([
            'name' => $validated['name'] ?? $university->name,
            'description' => $validated['description'] ?? null,
            'location' => $validated['location'] ?? $university->location,
        ]);

        if ($request->hasFile('avatar')) {
            // Удаляем старый аватар, если он есть
            $university->clearMediaCollection('avatars');
            // Добавляем новый аватар
            $university->addMediaFromRequest('avatar')->toMediaCollection('avatars', 'public');
        }

        return response()->json(UniversityControllerResource::make($university));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        University::find($id)->delete();

        return response()->json(['message' => 'University deleted successfully.']);
    }

}

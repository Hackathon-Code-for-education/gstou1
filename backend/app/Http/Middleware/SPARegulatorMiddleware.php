<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class SPARegulatorMiddleware
{

    /**
     * @param Request $request
     * @param Closure $next
     * @return mixed|BinaryFileResponse
     */
    public function handle(Request $request, Closure $next): mixed
    {
        $response = $next($request);

        // Проверка, не является ли путь запроса API-запросом и существует ли файл
        if (!$response->isSuccessful() && !preg_match('/\/api\//', $request->getRequestUri()) && !File::exists(public_path($request->getRequestUri()))) {
            // Подгрузка index.html из папки build React
            $path = public_path('frontend/build/index.html');

            if (File::exists($path)) {
                return response()->file($path);
            }
        }

        return $response;
    }
}

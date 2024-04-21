<?php

use App\Http\Controllers\Api\ApplicationController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UniversityController;
use App\Http\Controllers\Api\UniversityGalleryController;
use App\Http\Controllers\Api\UniversityReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::post('universities/reviews', [UniversityReviewController::class, 'store']);
    Route::get('/universities/search', [UniversityGalleryController::class, 'search']);
    Route::apiResource('universities', UniversityController::class);

    Route::get('/universities/{id}/gallery', [UniversityGalleryController::class, 'index']);
    Route::post('/universities/{id}/gallery', [UniversityGalleryController::class, 'store']);
    Route::delete('/universities/{id}/gallery/{galleryId}', [UniversityGalleryController::class, 'destroy']);
    Route::post('/universities/applications/request', [ApplicationController::class, 'store']);

});

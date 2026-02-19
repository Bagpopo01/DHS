<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\Api\VideoShortController;

Route::apiResource('video-shorts', VideoShortController::class);
Route::get('/video-shorts', [VideoShortController::class, 'index']);
Route::get('/categories', function () {
    return \App\Models\Category::select('id','name','image')->get();
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('products', ProductController::class);
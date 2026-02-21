<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\Api\VideoShortController;
use App\Models\Client;
use App\Models\Product;
use App\Models\Category;




Route::apiResource('video-shorts', VideoShortController::class);
Route::get('/video-shorts', [VideoShortController::class, 'index']);
// routes/api.php
Route::get('/categories', function () {
    return \App\Models\Category::withCount('products')
        ->select('id','name','image')
        ->get();
});
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::get('/clients', function () {
    return Client::all();
});

Route::apiResource('products', ProductController::class);



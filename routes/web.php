<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
});

Route::get('/about', function () {
    return Inertia::render('about');
});


Route::controller(PostController::class)->group(function () {
    Route::get('/posts', 'index');
    Route::get('/posts/create', 'create');
    Route::post('/posts', 'store');
    Route::get('/posts/{id}', 'show');
});

<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostToggleLike;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home.index');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about.index');

Route::get('/auth/register', [RegisterController::class, 'create']);
Route::post('/auth/register', [RegisterController::class, 'store']);

Route::get('/auth/login', [LoginController::class, 'create'])->name('login');
Route::post('/auth/login', [LoginController::class, 'store']);
Route::delete('/auth/logout', [LoginController::class, 'destroy']);

Route::post('/posts/{post}/likes/toggle', PostToggleLike::class)->middleware('auth');

Route::controller(PostController::class)->group(function () {
    Route::get('/posts', 'index');
    Route::get('/posts/create', 'create');
    Route::post('/posts', 'store');
    Route::get('/posts/{id}', 'show');
});

Route::resource('comments', CommentController::class);

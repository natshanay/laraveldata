<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;
use App\Http\Controllers\BlogController;


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');
Route::get('/blogs/latest', [App\Http\Controllers\BlogController::class, 'latest']);
Route::get('/blogs/others', [App\Http\Controllers\BlogController::class, 'thanks']);
Route::get('/blogs/others', [App\Http\Controllers\BlogController::class, 'about']);

Route::resource('posts', PostController::class);
Route::resource('blogs', BlogController::class);



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

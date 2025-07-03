<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BlogPost;
use App\Http\Controllers\BController;


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');
Route::get('/blogs/latest', [App\Http\Controllers\BController::class, 'latest']);
Route::get('/blogs/others', [App\Http\Controllers\BController::class, 'thanks']);
Route::get('/blogs/others', [App\Http\Controllers\BController::class, 'about']);

Route::resource('posts', BlogPost::class);
Route::resource('blogs', BController::class);
// Route::get('blogs/latest', BController::class );


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

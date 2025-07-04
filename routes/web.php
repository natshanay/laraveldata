<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BlogPost;


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::resource('posts', BlogPost::class);
Route::resource('blogs', BlogPost::class);


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

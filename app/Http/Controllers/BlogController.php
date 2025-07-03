<?php

namespace App\Http\Controllers;
use App\Models\Blog;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Data\BlogData;

class BController extends Controller
{
    /**
     * Display a listing of the resource.
     */

public function index(): \Inertia\Response
{
    $posts = Blog::all();
// $posts = Blog::orderBy('created_at', 'desc')->get();
    return Inertia('BC/Index', [
      'posts' => BlogData::collect($posts),
    ]);
}
public function about(): \Inertia\Response
{
    $posts = Blog::orderBy('created_at', 'desc')->get();
    // $posts = Blog::all();
    // C:\Users\hp\dataobjects\resources\js\pages\BC\Othres.tsx
// $posts = Blog::orderBy('created_at', 'desc')->get();
    return Inertia('BC/About', [
      'posts' => BlogData::collect($posts),
    ]);
}
public function latest(): \Inertia\Response
{
    // $posts = Blog::all();
$posts = Blog::orderBy('created_at', 'desc')->get();
    return Inertia('BC/Latest', [
      'posts' => BlogData::collect($posts),
    ]);
}

public function show(string $id): \Inertia\Response
{
    $posts = Blog::find($id);
    return Inertia('BC/Show', [
      'posts' => $posts,
    ]);
}

    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    public function edit()
    {
        $posts = Blog::all();
        return Inertia('BC/Edit', [
            'posts' => $posts,
        ]);
    }

    
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

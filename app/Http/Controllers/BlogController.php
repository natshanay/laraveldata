<?php

namespace App\Http\Controllers;
use App\Models\Blog;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Data\BlogData;

class BlogController extends Controller
{
   
public function index(): \Inertia\Response
{
    $posts = Blog::all();

    return Inertia('blog/index', [
      'posts' => BlogData::collect($posts),
    ]);
}
public function about(): \Inertia\Response
{
    $posts = Blog::orderBy('created_at', 'desc')->get();
    
    

    return Inertia('blog/about', [
      'posts' => BlogData::collect($posts),
    ]);
}
public function latest(): \Inertia\Response
{
    
$posts = Blog::orderBy('created_at', 'desc')->get();
    return Inertia('blog/latest', [
      'posts' => BlogData::collect($posts),
    ]);
}

public function show(string $id): \Inertia\Response
{
    $posts = Blog::find($id);
    return Inertia('blog/show', [
      'posts' => $posts,
    ]);
}

    public function create()
    {
        
    }

   
    public function store(Request $request)
    {
        
    }

    public function edit()
    {
        $posts = Blog::all();
        return Inertia('blog/edit', [
            'posts' => $posts,
        ]);
    }

    
    public function update(Request $request, string $id)
    {
        
    }


    public function destroy(string $id)
    {
        
    }
}

<?php

namespace App\Http\Controllers;
use App\Models\Blog;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Data\PostData;
use App\Data\BlogData;

class PostController extends Controller
{

public function index()
{

$blog = Blog::orderBy('created_at', 'desc')->get();
$posts = PostData::collect($blog);

    return Inertia('post/index', [
        'posts' => $posts,
    ]);
}

    
public function create()
    {
        $posts = Blog::all();
        return inertia('post/create', [
            "posts"=>$posts
            
        ]); 
    }

    
    public function store(PostData $data)
    {
        
     Blog::create([
    
    'title' => $data->title,
    'body' => $data->body,
    
]);
        return redirect()->route('posts.index')->with('success', 'Blog post created successfully!');
    }
    
    
    
 public function show(string $id)
{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    
           $posts = Blog::find($id);
    return inertia("post/show",[
        "posts"=>$posts
    ]);
    
    
    $contactData = PostData::from(Blog::findOrFail($id));
    dd($contactData);
    }
    
    
    public function edit(string $id)
    {
        $posts = Blog::find($id);
        return inertia("post/edit", [
            "posts" => $posts,
        ]);
        
        

        
    }

    public function update(PostData $data, string $id)
    {
        

        $post = Blog::find($id);
        if ($post) {
            
            $post->title = ($data->title);
            $post->body = ($data->body);
               $post->save();
            return redirect()->route('posts.index')->with('success', 'Blog post updated successfully!');
        } else {
            return redirect()->route('posts.index')->with('error', 'Blog post not found!');
        }
    }

  
    public function destroy(string $id)
    {
        $post = Blog::find($id);
        if ($post) {
            $post->delete();
            return redirect()->route('posts.index')->with('success', 'Blog post deleted successfully!');
        } else {
            return redirect()->route('posts.index')->with('error', 'Blog post not found!');
        }
    }
}
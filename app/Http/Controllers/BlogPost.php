<?php

namespace App\Http\Controllers;
use App\Models\Blog;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Data\ContactData;

class BlogPost extends Controller
{
    /**
     * Display a listing of the resource.
    */

    public function index()
    {
        $posts = Blog::all();
       return inertia('Blog/Index', [
          "posts"=>$posts
        ]); 
        return redirect()->route('blog.index');
        
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $posts = Blog::all();
        return inertia('Blog/Create', [
"posts"=>$posts
           
         ]); 
  
    }


    public function store(Request $request)
    {

       $data = ContactData::from($request);

        Blog::create($data->toArray());
      
        return redirect()->route('posts.index')->with('success', 'Blog post created successfully!');
    }
    
    
    
    public function show(string $id)
    {
        $posts = Blog::find($id);
        return inertia("Blog/Show",[
            "posts"=>$posts
        ]);
        
    }
    
    
    public function edit(string $id)
    {
        $posts = Blog::find($id);
        return inertia("Blog/Edit", [
            "posts" => $posts,
        ]);
        
        return redirect()->route('posts.index')->with('success', 'Blog post created successfully!');

        
    }
    

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = ContactData::from($request);

        $post = Blog::find($id);
        if ($post) {
            $post->update($data->toArray());
            return redirect()->route('posts.index')->with('success', 'Blog post updated successfully!');
        } else {
            return redirect()->route('posts.index')->with('error', 'Blog post not found!');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
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

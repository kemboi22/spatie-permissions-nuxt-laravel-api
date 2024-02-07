<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->success(Post::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        $post = Post::create([
            'title' => $request->title,
            'description' => $request->description,
            'body' => $request->body
        ]);
        if ($post) return $this->success($post);
        return $this->error([]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return $this->success($post);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        $update = $post->update([
            'title' => $request->title,
            'description' => $request->description,
            'body' => $request->body
        ]);
        if ($update) return $this->success($update);
        return $this->error([]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}

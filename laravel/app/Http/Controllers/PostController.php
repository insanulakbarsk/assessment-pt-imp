<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // GET /api/posts (paginated)
    public function index(Request $req)
    {
        $perPage = (int)$req->query('per_page', 10);
        $posts = Post::with('user')->orderBy('created_at','desc')->paginate($perPage);
        return response()->json($posts);
    }

    // GET /api/posts/{id}
    public function show($id)
    {
        $post = Post::with('user')->findOrFail($id);
        return response()->json($post);
    }

    // POST /api/posts
    public function store(Request $req)
    {
        $data = $req->validate([
            'title' => 'required|string|max:255',
            'isi' => 'required|string',
        ]);

        $post = Post::create([
            'title' => $data['title'],
            'isi' => $data['isi'],
            'user_id' => $req->user()->id,
        ]);

        return response()->json($post, 201);
    }

    // PUT /api/posts/{id}
    public function update(Request $req, $id)
    {
        $post = Post::findOrFail($id);

        // optional: only owner can update
        if ($post->user_id !== $req->user()->id) {
            return response()->json(['message'=>'Forbidden'], 403);
        }

        $data = $req->validate([
            'title' => 'required|string|max:255',
            'isi' => 'required|string',
        ]);

        $post->update($data);
        return response()->json($post);
    }

    // DELETE /api/posts/{id}
    public function destroy(Request $req, $id)
    {
        $post = Post::findOrFail($id);
        if ($post->user_id !== $req->user()->id) {
            return response()->json(['message'=>'Forbidden'], 403);
        }
        $post->delete();
        return response()->json(['message'=>'Deleted']);
    }
}

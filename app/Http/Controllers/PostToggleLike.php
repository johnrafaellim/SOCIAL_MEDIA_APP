<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostToggleLike extends Controller
{
    public function __invoke(Request $request, Post $post)
    {
        $userId = $request->user()->id;

        $like = $post->likes()
            ->where('user_id', $userId);

        if ($like->exists()) {
            $like->delete();
        } else {
            $post->likes()->create([
                'user_id' => $userId,
            ]);
        }

        return back();
    }
}

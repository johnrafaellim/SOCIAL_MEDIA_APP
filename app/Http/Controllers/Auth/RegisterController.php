<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class RegisterController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('auth/register/create');
    }

    public function store(RegisterRequest $request): RedirectResponse
    {
        // validate the input
        $validated = $request->validated();
        // create the user -> hash password
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);
        // (optional) send registered event
        // (optional, but nice) authenticate
        Auth::login($user);

        // redirect -> intended page or main page
        return redirect('/posts');
    }
}

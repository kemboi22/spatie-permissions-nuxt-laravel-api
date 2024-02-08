<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();
        $user = Auth::user();
        return response()->json([
            "data" => [
                ...$user->load('roles')->toArray(),
                "permissions" => $user->getAllPermissions()
            ],
            "message" => "User authenticated successfully",
            "token" => $request->user()->createToken("auth_token")->plainTextToken,
        ]);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request)
    {
        // Revoke User Tokens

        $request->user()->tokens()->delete();

        Auth::guard('web')->logout();

//        $request->session()->invalidate();
//
//        $request->session()->regenerateToken();

        return response()->json([
            "message" => "User logged out successfully",
            "success" => true,
        ]);
    }
}

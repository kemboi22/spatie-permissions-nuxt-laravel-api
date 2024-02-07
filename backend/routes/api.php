<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum', 'permission'])->group(function (){
    Route::resource("posts", \App\Http\Controllers\PostController::class);
    Route::resource("roles", \App\Http\Controllers\RolesController::class);
    Route::resource("permissions", \App\Http\Controllers\PermissionsController::class);
    Route::resource("users", \App\Http\Controllers\UserController::class);
});

require __DIR__.'/auth.php';

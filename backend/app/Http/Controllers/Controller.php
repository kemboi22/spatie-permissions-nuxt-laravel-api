<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function success($data, $message = "Success"): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            "success" => true,
            "data" => $data,
            "message" => $message
        ]);
    }
    public function error($data, $message = "Error"): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            "success" => false,
            "data" => $data,
            "message" => $message
        ]);
    }
}

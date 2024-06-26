<?php

namespace App\Http\Controllers\API;

use App\Models\MessageModel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'phone' => 'required|string|max:20',
            'message' => 'required|string',
        ]);

        $message = MessageModel::create($validated);

        return response()->json($message, 201);
    }
}
 
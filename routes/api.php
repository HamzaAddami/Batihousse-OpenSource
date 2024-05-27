<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\MessageController;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\CategoryController;


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});



// Route::apiResource('projects', ProjectController::class);
Route::get('/categories', [CategoryController::class, 'index']);
Route::post('/categories', [CategoryController::class, 'store']);
Route::get('/categories/{id}', [CategoryController::class, 'show']);
Route::put('/categories/{id}', [CategoryController::class, 'update']);
Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);


Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{project}', [ProjectController::class, 'show']);
Route::post('/projects/store', [ProjectController::class, 'store']);
Route::put('/projects/update/{project}', [ProjectController::class, 'update']);
Route::delete('/projects/destroy/{project}', [ProjectController::class, 'destroy']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('logout', [AuthController::class, 'logout']);


Route::post('/messages', [MessageController::class, 'store']);

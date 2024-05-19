<?php

namespace App\Http\Controllers\API;

use App\Models\Projects;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Projects::with('categories')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'client' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'mission' => 'nullable|string',
            'avancement' => 'required|integer|min:0|max:100',
            'state' => 'required|string|max:255',
            'image_path' => 'nullable|string|max:255',
            'category_id' => 'required|exists:categories,id'
        ]);

        $project = Project::create($validated);

        return response()->json($project, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Projects $project)
    {
        return $project->load('categories');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Projects $project)
    {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'client' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'sometimes|required|numeric',
            'mission' => 'nullable|string',
            'avancement' => 'sometimes|required|integer|min:0|max:100',
            'state' => 'sometimes|required|string|max:255',
            'image_path' => 'nullable|string|max:255',
            'category_id' => 'sometimes|required|exists:categories,id'
        ]);

        $project->update($validated);

        return response()->json($project);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $project->delete();

        return response()->json(null, 204);
    }
}

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
        $projects = Projects::with('categories')->get()->map(function ($project) {
            // Assuming image_path is the relative path from the public directory
            $project->image_url = asset($project->image_path);
            return $project;
        });

        return response()->json($projects);
    }

    public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'client' => 'required|string|max:255',
        'description' => 'nullable|string',
        'price' => 'required|numeric',
        'mission' => 'nullable|string',
        'avancement' => 'required|integer|min:0|max:100',
        'state' => 'required|string',
        'image_path' => 'nullable|string|max:255',
        // Remove category_id from validation rules
    ]);

    
    if ($request->has('category_id')) {
        
    }

    $project = Projects::create($validated);
    $project->image_url = asset($project->image_path);

    return response()->json($project, 201);
}


    public function show(Projects $project)
    {
        $project->load('categories');
        $project->image_url = asset($project->image_path);

        return response()->json($project);
    }

    public function update(Request $request, Projects $project)
    {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'client' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'sometimes|required|numeric',
            'mission' => 'nullable|string',
            'avancement' => 'sometimes|required|integer|min:0|max:100',
            'state' => 'sometimes|required|string',
            'image_path' => 'nullable|string|max:255',
            'category_id' => 'sometimes|required|exists:categories,id'
        ]);

        $project->update($validated);
        $project->image_url = asset($project->image_path);

        return response()->json($project);
    }

    public function destroy($project)
    {
        $project = Projects::find($project);
        if (!$project) {
            return response()->json(['message' => 'Project not found'], 404);
        }

        $project->delete();
        return response()->json(['message' => 'Project deleted successfully']);
    }
}

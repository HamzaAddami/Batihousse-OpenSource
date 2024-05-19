<?php

namespace Database\Seeders;

use App\Models\Projects;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = [
            [
                'name' => 'RÉHABILITATION D’UN IMMEUBLE DE BUREAUX À CASABLANCA',
                'client' => 'Sociéte A',
                'description' => 'Projet de réhabilitation et de mise à niveau d’un immeuble de bureaux IGH classé patrimoine national à Casablanca.',
                'price' => 15000.00,
                'mission' => 'Etudes clés en main',
                'avancement' => 10,
                'state' => 'En cours',
                'image_path' => 'path/to/image_alpha.jpg',
                'category_id' => 2,  
            ],
            [
                'name' => 'MAIL CENTRAL KHOURIBGA',
                'client' => 'SOTRAVO',
                'description' => 'Description for Project Beta',
                'price' =>  275,
                'mission' => 'OPC interne de l’entreprise générale.',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'path/to/image_beta.jpg',
                'category_id' => 1,  
            ],
            
        ];

        foreach ($projects as $project) {
            Projects::create($project);
        }
    }
}

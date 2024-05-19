<?php

namespace Database\Seeders;

use App\Models\Categories;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'bureaux'],
            ['name' => 'immeubles'],
            ['name' => 'touristiques'],
            ['name' => 'industriels'],
            ['name' => 'résidentiels'],
            ['name' => 'commerces'],
            ['name' => 'villas'],
        ];

        foreach ($categories as $category) {
            Categories::create($category);
        }
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('client');
            $table->text('description')->nullable();
            $table->decimal('price', 8, 2);  // Ensure you specify precision and scale for decimals
            $table->text('mission')->nullable();
            $table->unsignedTinyInteger('avancement');  // Assuming 'avancement' is a percentage
            $table->string('state');
            $table->string('image_path')->nullable();
            $table->foreignId('category_id')->constrained('categories')->onDelete('cascade');  // Correct foreign key naming and table reference
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};

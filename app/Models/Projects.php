<?php

namespace App\Models;

use App\Models\Categories;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Projects extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'client', 'description', 'price', 
        'mission', 'avancement', 'state', 'image_path', 
        'category_id'
    ];

    public function Categories()
    {
        return $this->belongsTo(Categories::class);
    }

    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        return url('storage/' . $this->image_path);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /**
     * fillable
     *
     * @var array
     */
    protected $fillable = [
        'name', 'image'
        
    ];
// app/Models/Category.php
public function getImageUrlAttribute()
{
    return $this->image ? \Illuminate\Support\Facades\Storage::url($this->image) : null;
}

    /**
     * posts
     *
     * @return void
     */
    public function products()
    {
        return $this->hasMany(Post::class);
    }
}

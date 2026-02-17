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
        'name',
        
    ];

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

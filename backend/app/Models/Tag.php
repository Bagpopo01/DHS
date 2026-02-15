<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    // field yang bisa diisi
    protected $fillable = ['name'];

    // kalau nanti ada relasi ke kategori
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
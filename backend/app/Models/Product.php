<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    // Field yang bisa diisi mass-assignment
    protected $fillable = [
        'sku',
        'name',
        'size',
        'material',
        'technique',
        'box',
        'price',
    ];

    /**
     * Relasi ke kategori (many-to-many)
     */
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    /**
     * Relasi ke tag (many-to-many)
     */
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
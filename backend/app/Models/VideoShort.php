<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VideoShort extends Model
{
    protected $fillable = ['title', 'thumbnail', 'video_url'];
}
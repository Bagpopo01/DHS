<?php

namespace App\Filament\Resources\VideoShorts\Schemas;

use Filament\Forms;
use Filament\Schemas\Schema;

class VideoShortForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->schema([
            Forms\Components\TextInput::make('title')
                ->label('Judul Video')
                ->required(),

            Forms\Components\FileUpload::make('thumbnail')
                ->label('Thumbnail')
                ->disk('public') // simpan di public
                ->image() // otomatis preview gambar
                ->directory('shorts') // folder di storage/app/public/shorts
                ->required(),

            Forms\Components\FileUpload::make('video_url')
                ->label('Video File')
                ->disk('public')
                ->directory('videos') // folder di storage/app/public/videos
                ->acceptedFileTypes(['video/mp4','video/webm'])
                ->maxSize(51200), // max 50MB
        ]);
    }
}
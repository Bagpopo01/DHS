<?php

namespace App\Filament\Resources\Clients\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\FileUpload;
use Illuminate\Support\Facades\Storage;

class ClientForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Forms\Components\TextInput::make('name')
                    ->label('Nama Client')
                    ->required()
                    ->unique(ignoreRecord: true),

            FileUpload::make('image')
    ->label('Foto Client')
    ->disk('public')
    ->directory('products/clients')
    ->visibility('public')
    ->image()
    ->imagePreviewHeight('150')
    ->downloadable() // ✅ tombol download otomatis
    ->openable(),
    
    // ✅ tombol open otomatis
            ]);
            
    }
   
}
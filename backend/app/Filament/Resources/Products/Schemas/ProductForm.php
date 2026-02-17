<?php

namespace App\Filament\Resources\Products\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\FileUpload;
class ProductForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Forms\Components\TextInput::make('name')
                ->label('Name')
                ->required(),

            Forms\Components\TextInput::make('sku')
                ->label('SKU'),

            Forms\Components\TextInput::make('price')
                ->label('Price')
                ->numeric()
                ->required(),

            Forms\Components\Textarea::make('description')
                ->label('Description'),

            Forms\Components\Select::make('category_id')
                ->label('Category')
                ->relationship('category', 'name')
                ->searchable()
                ->preload(),

        

            Forms\Components\TextInput::make('size')->label('Size'),
            Forms\Components\TextInput::make('material')->label('Material'),
            Forms\Components\TextInput::make('technique')->label('Technique'),
            Forms\Components\TextInput::make('box')->label('Box'),
FileUpload::make('images')
    ->label('Gambar Produk')
    ->multiple()
    ->image()
    ->disk('public')
    // 1. SESUAIKAN dengan folder di gambar Anda (products/images)
    ->directory('products/images') 
    ->visibility('public')
    // 2. Gunakan ini untuk memastikan path yang dibaca Filament benar
    ->formatStateUsing(function ($state) {
        return $state; 
    })
    ->reorderable()
,
        ]);
    }
}
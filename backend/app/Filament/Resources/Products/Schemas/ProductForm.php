<?php

namespace App\Filament\Resources\ProductResource\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms;

class ProductForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->schema([
            Forms\Components\TextInput::make('sku')->label('SKU')->required(),
            Forms\Components\TextInput::make('name')->label('Nama Produk')->required(),
            Forms\Components\TextInput::make('size')->label('Ukuran'),
            Forms\Components\TextInput::make('material')->label('Bahan'),
            Forms\Components\TextInput::make('technique')->label('Teknik'),
            Forms\Components\TextInput::make('box')->label('Box'),

            Forms\Components\Select::make('categories')
                ->label('Kategori')
                ->multiple()
                ->relationship('categories', 'name'),

            Forms\Components\Select::make('tags')
                ->label('Tag')
                ->multiple()
                ->relationship('tags', 'name'),
        ]);
    }
}
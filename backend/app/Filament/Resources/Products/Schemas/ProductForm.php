<?php

namespace App\Filament\Resources\Products\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms;
use Filament\Forms\Components\Select;
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

           Forms\Components\Select::make('tags')
                ->label('Tags')
                ->multiple()
                ->relationship('tags', 'name')
                ->preload()
                ->searchable(),

            Forms\Components\TextInput::make('size')->label('Size'),
            Forms\Components\TextInput::make('material')->label('Material'),
            Forms\Components\TextInput::make('technique')->label('Technique'),
            Forms\Components\TextInput::make('box')->label('Box'),

            Forms\Components\FileUpload::make('images')
                ->label('Images')
                ->multiple()
                ->image()
                ->directory('products/images'),
        ]);
    }
}
<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
use App\Models\User;

public function run(): void
{
    User::create([
        'name' => 'Admin',
        'email' => 'admin@diameter.com',
        'password' => bcrypt('password123'),
    ]);
}

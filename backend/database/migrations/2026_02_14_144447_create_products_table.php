<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   public function up(): void
{
Schema::table('products', function (Blueprint $table) {
    $table->foreignId('category_id')->nullable()->constrained('categories');
    $table->json('tags')->nullable(); // simpan banyak tag
    $table->text('description')->nullable();
    $table->json('images')->nullable(); // simpan banyak foto
    $table->string('sku')->nullable();
    $table->string('size')->nullable();
    $table->string('material')->nullable();
    $table->text('technique')->nullable();
    $table->string('box')->nullable();
});
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};

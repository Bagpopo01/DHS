<?php

namespace App\Filament\Widgets;

use App\Models\Visitor;
use App\Models\Product;
use App\Models\Category;
use App\Models\VideoShort; // Pastikan nama Model sesuai dengan tabel Video Shorts Anda
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        // app/Filament/Widgets/StatsOverview.php

return [
    Stat::make('Live Visitors', Visitor::count())
        ->description('Real-time portfolio views')
        ->descriptionIcon('heroicon-m-globe-alt')
        ->color('primary')
        ->chart([7, 10, 5, 15, 10, 20, 18]) // Memberikan pola grafik naik turun
        ->extraAttributes([
            'class' => 'cursor-pointer',
        ]),

    Stat::make('Active Content', Product::count())
        ->description('Products in your showcase')
        ->descriptionIcon('heroicon-m-sparkles')
        ->color('info')
        ->chart([3, 5, 8, 12, 10, 15]),

    Stat::make('DHS Shorts', \App\Models\VideoShort::count())
        ->description('Video performance metric')
        ->descriptionIcon('heroicon-m-play-circle')
        ->color('success')
        ->chart([2, 10, 4, 12, 8, 14]),
];

    }
}

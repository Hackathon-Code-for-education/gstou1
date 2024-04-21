<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class University extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'admin_ids',
        'name',
        'description',
        'location',
    ];

    protected $casts = [
        'admin_ids' => 'array',  // Указываем Laravel, что это поле должно быть преобразовано в массив
    ];
}

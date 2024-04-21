<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UniversityStudent extends Model
{
    use HasFactory;

    protected $fillable = ['university_id', 'user_id'];

    public function university()
    {
        return $this->belongsTo(University::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

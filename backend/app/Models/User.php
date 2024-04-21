<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Orchid\Platform\Models\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'surname',
        'email',
        'password',
        'permissions',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'permissions',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'permissions'          => 'array',
        'email_verified_at'    => 'datetime',
    ];

    /**
     * The attributes for which you can use filters in url.
     *
     * @var array
     */
    protected $allowedFilters = [
        'id',
        'name',
        'surname',
        'email',
        'permissions',
    ];

    /**
     * The attributes for which can use sort in url.
     *
     * @var array
     */
    protected $allowedSorts = [
        'id',
        'name',
        'surname',
        'email',
        'updated_at',
        'created_at',
    ];

    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    public function canSubmitApplication($universityId)
    {
        $pendingOrConfirmed = $this->applications()
            ->where(function ($query) {
                $query->where('is_confirmed', true)
                    ->orWhereNull('is_confirmed');
            })
            ->where('university_id', $universityId)
            ->exists();
        return !$pendingOrConfirmed;
    }

    public function universities()
    {
        return $this->hasMany(UniversityStudent::class);
    }

    public function universityReviews()
    {
        return $this->hasMany(UniversityReview::class, 'user_id');
    }
}

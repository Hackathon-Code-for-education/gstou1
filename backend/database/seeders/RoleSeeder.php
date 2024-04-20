<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Orchid\Platform\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::firstOrCreate([
            'slug' => 'admin'
        ], [
            'name'        => 'Administrator',
            'slug'        => 'admin',
            'permissions' => [
                'platform.index' => true,
                'platform.systems.roles' => true,
                'platform.systems.users' => true,
            ],
        ]);

        Role::firstOrCreate([
            'slug' => 'user'
        ], [
            'name'        => 'User',
            'slug'        => 'user',
            'permissions' => [
                'platform.index' => true,
            ],
        ]);
    }
}

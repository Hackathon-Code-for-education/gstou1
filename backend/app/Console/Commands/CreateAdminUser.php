<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class CreateAdminUser extends Command
{
    protected $signature = 'admin:create {name} {surname} {email} {password}';
    protected $description = 'Creates a new admin user';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $name = $this->argument('name');
        $surname = $this->argument('surname');
        $email = $this->argument('email');
        $password = $this->argument('password');

        $user = User::create([
            'name' => $name,
            'surname' => $surname,
            'email' => $email,
            'password' => Hash::make($password),
            'permissions' => [
                'platform.systems.roles' => true,
                'platform.systems.users' => true,
                'platform.systems.attachment' => true,
                'platform.index' => true,
            ],
        ]);

        $this->info('Admin user created successfully');
    }
}

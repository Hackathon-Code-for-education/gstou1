<?php

namespace App\Console\Commands;

use App\Models\University;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class LoadUni extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'load:uni';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $response = Http::get('http://universities.hipolabs.com/search');

        if ($response->successful()) {
            $universities = $response->json();

            foreach($universities as $university) {
                University::create([
                    'name' =>  $university['name'],
                    'location' => $university['country'],
                ]);
            }


        }

        return Command::SUCCESS;
    }
}

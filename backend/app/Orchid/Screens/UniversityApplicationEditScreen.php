<?php

namespace App\Orchid\Screens;

use App\Models\UniversityStudent;
use Illuminate\Http\Request;
use Orchid\Screen\Screen;
use Orchid\Support\Color;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\TextArea;
use Orchid\Screen\Actions\Button;
use App\Models\Application;
use Orchid\Support\Facades\Toast;

class UniversityApplicationEditScreen extends Screen
{
    public $application;

    public function query(Application $application): array
    {
        return [
            'application' => $application
        ];
    }

    public function layout(): array
    {
//        dd($this->application);
        return [
            Layout::rows([
                Input::make('application.user_id')
                    ->title('User ID')
                    ->disabled(),

                TextArea::make('application.text')
                    ->title('Application Text')
                    ->disabled(),
            ]),

            // Определите view как отдельный layout
            Layout::view('vendor.platform.universities.request-images', [
                'application' => $this->application
            ]),

            Layout::rows([
                Button::make('Confirm')
                    ->method('confirm')
                    ->type(Color::SUCCESS())
                    ->icon('check'),

                Button::make('Reject')
                    ->method('reject')
                    ->type(Color::DANGER())
                    ->icon('close')
            ])
        ];
    }

    public function confirm(Application $application, Request $request)
    {
        $application->is_confirmed = true;
        $application->save();

        UniversityStudent::create([
           'university_id' => $application->university_id,
           'user_id' => auth()->id(),
        ]);

        Toast::info('Application status updated.');

        return redirect()->route('platform.applications.list');
    }

    public function reject(Application $application, Request $request)
    {
        $application->is_confirmed = false;
        $application->save();

        Toast::info('Application status updated.');

        return redirect()->route('platform.applications.list');
    }

}

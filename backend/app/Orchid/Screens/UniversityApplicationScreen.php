<?php

namespace App\Orchid\Screens;

use Orchid\Screen\Screen;
use Orchid\Screen\Actions\Link;
use Orchid\Support\Facades\Layout;
use App\Models\Application;
use Orchid\Screen\TD;

class UniversityApplicationScreen extends Screen
{
    /**
     * Query data.
     *
     * @return array
     */
    public function query(): array
    {
        return [
            'applications' => Application::where('is_confirmed', null)->paginate(30)
        ];
    }

    /**
     * Button commands.
     *
     * @return Action[]
     */
    public function commandBar(): array
    {
        return [
//            Link::make('Add new')
//                ->icon('plus')
//                ->route('platform.application.edit')
        ];
    }

    /**
     * Views.
     *
     * @return Layout[]
     */
    public function layout(): array
    {
        return [
            Layout::table('applications', [
                TD::make('id', 'ID')
                    ->sort()
                    ->cantHide(),
                TD::make('text', 'Text')
                    ->filter(TD::FILTER_TEXT),
                TD::make('document_photo_path', 'Document')
                    ->render(function (Application $application) {
                        return "<img src='{$application->getFirstMedia('docs')->getUrl()}' style='height: 50px;'/>";
                    }),
                TD::make('is_confirmed', 'Status')
                    ->render(function (Application $application) {
                        if(is_null($application->is_confirmed)) return 'Pending';

                        return $application->is_confirmed ? 'Confirmed' : 'Rejected';
                    }),
                TD::make('Edit')
                    ->align(TD::ALIGN_CENTER)
                    ->width('100px')
                    ->render(function (Application $application) {
                        return Link::make('Confirm/Reject')
                            ->route('platform.application.edit', $application);
                    }),
            ])
        ];
    }
}

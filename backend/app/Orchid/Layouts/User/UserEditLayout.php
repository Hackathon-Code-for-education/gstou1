<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\User;

use mysql_xdevapi\TableInsert;
use Orchid\Screen\Field;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Layouts\Rows;

class UserEditLayout extends Rows
{
    /**
     * The screen's layout elements.
     *
     * @return Field[]
     */
    public function fields(): array
    {
        return [
            Input::make('user.name')
                ->type('text')
                ->max(255)
                ->required()
                ->title(__('Имя'))
                ->placeholder(__('Имя')),

            Input::make('user.surname')
                ->type('text')
                ->max(255)
                ->required()
                ->title(__('Фамилия'))
                ->placeholder(__('Фамилия')),

            Input::make('user.email')
                ->type('email')
                ->required()
                ->title(__('Email'))
                ->placeholder(__('Email')),
        ];
    }
}
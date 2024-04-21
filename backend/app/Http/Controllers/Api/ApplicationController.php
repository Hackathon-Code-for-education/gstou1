<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Application;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'university_id' => 'required|integer|exists:universities,id',
            'text' => 'required|string',
            'images' => 'required|array',
            'images.*' => 'image',
        ]);

        $user = auth()->user(); // или любой другой способ аутентификации

        if (!$user->canSubmitApplication($validated['university_id'])) {
            return response()->json(['message' => 'You cannot submit more than one application unless the previous one is rejected'], 403);
        }

        $application = new Application;
        $application->university_id = $request->university_id;
        $application->user_id = auth()->id();
        $application->text = $request->text;
        $application->save();


        foreach ($request->file('images') as $image) {
            $application->addMedia($image)->toMediaCollection('docs'); // 'docs' - название коллекции
        }


        return response()->json(['message' => 'Application submitted successfully'], 200);
    }

}

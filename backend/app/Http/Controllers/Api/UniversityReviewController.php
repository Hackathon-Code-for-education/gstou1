<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UniversityReview;
use Illuminate\Http\Request;

class UniversityReviewController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'university_id' => 'required|exists:universities,id',
            'rating' => 'required',
            'text' => 'required',
        ]);

        $review = UniversityReview::create([
           'university_id' => $request['university_id'],
           'user_id' => auth()->id(),
           'rating' => $request['rating'],
           'text' => $request['text'],
        ]);

        return response()->json([
            'review' => $review
        ]);
    }
}

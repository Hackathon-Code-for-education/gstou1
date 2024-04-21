<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UniversityControllerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'name' => $this->name ?? null,
            'description' => $this->description ?? null,
            'location' => $this->location ?? null,
            'avatar' =>  null,
            'created_at' => $this->created_at ?? null,
            'reviews' => UniversityReviewResource::collection($this->reviews),
            'students' => UniversityStudentResource::collection($this->students)
        ];
    }
}

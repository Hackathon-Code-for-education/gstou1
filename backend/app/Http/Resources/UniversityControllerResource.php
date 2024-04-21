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
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'location' => $this->location,
            'avatar' => $this->getFirstMediaUrl('avatars', 'avatar') ?? "https://www.google.com/url?sa=i&url=https%3A%2F%2Firecommend.ru%2Fcontent%2Flenivaya-plyushka&psig=AOvVaw0l04WuINub4spUYzXylcbg&ust=1713795167620000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIDb_NK-04UDFQAAAAAdAAAAABAE",
            'created_at' => $this->created_at,
        ];
    }
}

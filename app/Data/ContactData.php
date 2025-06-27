<?php
namespace App\Data;

use Spatie\LaravelData\Data;

class ContactData extends Data
{
 public function __construct(
        public ?string $title,
        public string $body,
     
    ) {
    }
    //  public static function rules(): array
    // {
    //     return [
    //         "title" => "required|string|max:255",
    //         "body" => "required|string|max:1000",
    //     ];
    // }

    // public static function fromRequest($request): self
    // {
    //     return new self(
    //         title: $request->input('title'),
    //         body: $request->input('body'),
    //     );
    // }


}
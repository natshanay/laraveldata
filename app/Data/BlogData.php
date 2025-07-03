<?php

namespace App\Data;

use Spatie\LaravelData\Data;
#[TypeScript] 
class BlogData extends Data
{
    public function __construct(
        
        public ?string $id,
        public ?string $title,
        public ?string $body,
        public ?string $created_at,
        public ?string $published_at,
    ) {}
}




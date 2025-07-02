<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class BlogData extends Data
{
    public function __construct(
        public int $id,
        public ?string $title,
        public ?string $body,
        public string $created_at,
    ) {}
}

<?php

namespace App\Data;

use Spatie\LaravelData\Data;
// 
use Spatie\LaravelData\DataCollection;
// 
use Spatie\LaravelData\WithDataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript] // ← THIS IS CRITICAL!
class ContactData extends Data
{
        // use WithDataCollection;d
    public function __construct(
        
        public ?string $id,
        public string $title,
        public string $body,
        public ?string $created_at,
        
    ) {}
}
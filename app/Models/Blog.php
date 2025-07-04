<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
       protected $fillable = ['id', 'title', 'body', 'created_at'];
         public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
    }
}   
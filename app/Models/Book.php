<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Book extends Model
{
    use HasFactory, HasApiTokens;

    public $timestamps = false;
    protected $table = 'book';

    public function author(){
        return $this->belongsTo(Author::class);
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function reviews(){
        return $this->hasMany(Review::class);
    }

    public function discount(){
        return $this->hasOne(Review::class);
    }

    public function order_item(){
        $this->hasMany(Order_items::class);
    }

    public function scopeFilter($request, $key, $value){
        return $request->where($key, '=', $value);
    }
}

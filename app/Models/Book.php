<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Laravel\Sanctum\HasApiTokens;

class Book extends Model
{
    use HasFactory, HasApiTokens;

    public $timestamps = false;
    protected $table = 'book';

    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function discount()
    {
        return $this->hasOne(Discount::class);
    }

    public function order_item()
    {
        $this->hasMany(Order_items::class);
    }

    public function scopeFilter($query, $customQuery, $filterBy, $filterValue)
    {
        if ($filterBy == "rating_star") {
            $customQuery->selectRaw("AVG(review.rating_start) as avg_rating")
                ->groupBy("book_title", 'book_summary', 'book_price', "discount_price", 'author_name')
                ->havingRaw("AVG(review.rating_start) >= ${filterValue}");

        } else {
            $customQuery->where($filterBy, $filterValue);
        }
        return $customQuery;
    }
}

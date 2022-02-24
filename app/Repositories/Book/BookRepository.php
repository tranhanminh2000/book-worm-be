<?php

namespace App\Repositories\Book;

use App\Models\Book;
use Illuminate\Support\Facades\DB;

class BookRepository
{
    public function selectAll()
    {
        // todo
    }

    public function selectById($id)
    {
        return Book::with('author', 'category')->find($id);
    }

    public function selectByCondition(int $limit, $sort , $filter)
    {
        $sortBy = null;
        $sortValue = null;
        $filterBy = null;
        $filterValue = null;
        $result = null;

        foreach ($sort as $key => $value){
            $sortBy = $key;
            $sortValue = $value;
        }

        foreach ($filter as $key => $value){
            $filterBy = $key;
            $filterValue = $value;
        }

        if(isset($sortBy) && $sortBy == "onsale"){
            $result = $this->selectByMostDiscount();
        } else if (isset($sortBy) && $sortBy == "popularity"){
            $result = $this->selectByPopular();
        }

        return $result;
    }

    public function selectByMostDiscount()
    {
        $result = Book::select('book_title', 'book_summary', 'book_price', "discount_price as final_price")
            ->selectRaw('book_price - discount_price AS  most_discount')
            ->join("discount", "discount.book_id", '=', 'book.id')
            ->orderBy("most_discount", 'desc')
            ->orderBy("final_price", 'asc');

        return $result;
    }

    public function selectByPopular()
    {
        $result = Book::select('book_title', 'book_summary', 'book_price', 'author_name',
            DB::raw(' CASE
            WHEN discount_price ISNULL THEN book.book_price
            ELSE discount_price
            END AS final_price'),
            DB::raw('COUNT(review.id) as total_review'))
            ->leftJoin("discount", "discount.book_id", '=', 'book.id')
            ->join("review", "review.book_id", '=', 'book.id')
            ->join("author", "author.id", '=', 'book.author_id')
            ->groupBy("book_title", 'book_summary', 'book_price', "final_price", 'author_name')
            ->orderBy("total_review", 'DESC')
            ->orderBy("final_price", 'ASC');

        return $result;

    }

    public function selectByRecommended(int $limit)
    {
        $result = Book::select('book_title', 'book_summary', 'book_price', 'author_name',
            DB::raw(' CASE
            WHEN discount_price ISNULL THEN book.book_price
            ELSE discount_price
            END AS final_price'),
            DB::raw('AVG(review.rating_start) as avg_rating'))
            ->leftJoin("discount", "discount.book_id", '=', 'book.id')
            ->join("review", "review.book_id", '=', 'book.id')
            ->join("author", "author.id", '=', 'book.author_id')
            ->groupBy("book_title", 'book_summary', 'book_price', "final_price", 'author_name')
            ->orderBy("avg_rating", 'DESC')
            ->orderBy("final_price", 'ASC')
            ->limit($limit)
            ->get();

        return $result;
    }

    public function update($id)
    {
        //
    }


    public function delete($id)
    {
        //
    }
}

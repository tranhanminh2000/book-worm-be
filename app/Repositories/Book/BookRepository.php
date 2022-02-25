<?php

namespace App\Repositories\Book;

use App\Models\Book;
use Illuminate\Support\Facades\DB;

class BookRepository
{
    public function selectById($id)
    {
        return Book::with('author', 'category')->find($id);
    }

    public function selectByCondition($sort, $filter)
    {
        $sortBy = null;
        $sortValue = null;
        $filterBy = null;
        $filterValue = null;
        $result = [];

        foreach ($sort as $key => $value) {
            $sortBy = $key;
            $sortValue = $value;
        }

        foreach ($filter as $key => $value) {
            $filterBy = $key;
            $filterValue = $value;
        }

        if (isset($sortBy) && $sortBy == "type") {
            switch ($sortValue) {
                case "onsale":
                    if (isset($filterBy)) {
                        $result = $this->selectByMostDiscount()->where($filterBy, $filterValue);
                    } else {
                        $result = $this->selectByMostDiscount();
                    }
                    break;
                case "popularity":
                    if (isset($filterBy)) {
                        $result = $this->selectByPopular()->where($filterBy, $filterValue);
                    } else {
                        $result = $this->selectByPopular();
                    }
                    break;
                case "desc":
                    if (isset($filterBy)) {
                        $result = $this->selectByOrder("desc")->where($filterBy, $filterValue);
                    } else {
                        $result = $this->selectByOrder("desc");
                    }
                    break;
                case "asc":
                    if (isset($filterBy)) {
                        $result = $this->selectByOrder("asc")->where($filterBy, $filterValue);
                    } else {
                        $result = $this->selectByOrder("asc");
                    }
                    break;
                default:
                    return $result;
            }
        }
        return $result;

    }

    public function selectByMostDiscount()
    {
        $result = Book::select('book_title', 'book_summary', 'book_price', 'author_name', "discount_price")
            ->selectRaw('book_price - discount_price AS  most_discount')
            ->join("discount", "discount.book_id", '=', 'book.id')
            ->leftJoin("author", "author.id", '=', 'book.author_id')
            ->leftJoin("review", "review.book_id", '=', 'book.id')
            ->leftJoin("category", "category.id", '=', 'book.category_id')
            ->orderBy("most_discount", 'desc')
            ->orderBy("discount_price", 'asc');

        return $result;
    }

    public function selectByPopular()
    {
        $result = Book::select('book_title', 'book_summary', 'book_price', 'author_name',
            'discount_price',
            DB::raw('COUNT(review.id) as total_review'))
            ->leftJoin("discount", "discount.book_id", '=', 'book.id')
            ->join("review", "review.book_id", '=', 'book.id')
            ->leftJoin("author", "author.id", '=', 'book.author_id')
            ->leftJoin("category", "category.id", '=', 'book.category_id')
            ->groupBy("book_title", 'book_summary', 'book_price', "discount_price", 'author_name')
            ->orderBy("total_review", 'DESC')
            ->orderBy("discount_price", 'ASC')
            ->orderBy("book_price", 'ASC');

        return $result;

    }

    public function selectByRecommended()
    {
        $result = Book::select('book_title', 'book_summary', 'book_price', 'author_name',
            'discount_price',
            DB::raw('AVG(review.rating_start) as avg_rating'))
            ->leftJoin("discount", "discount.book_id", '=', 'book.id')
            ->join("review", "review.book_id", '=', 'book.id')
            ->join("author", "author.id", '=', 'book.author_id')
            ->groupBy("book_title", 'book_summary', 'book_price', "discount_price", 'author_name')
            ->orderBy("avg_rating", 'DESC')
            ->orderBy("discount_price", 'ASC')
            ->orderBy("book_price", 'ASC');
        return $result;
    }

    public function selectByOrder(string $orderBy)
    {
        $result = Book::select('book_title', 'book_summary', 'book_price', 'author_name',
            "discount_price")
            ->distinct()
            ->leftJoin("discount", "discount.book_id", '=', 'book.id')
            ->leftJoin("review", "review.book_id", '=', 'book.id')
            ->leftJoin("author", "author.id", '=', 'book.author_id')
            ->leftJoin("category", "category.id", '=', 'book.category_id')
            ->orderBy("discount_price", $orderBy)
            ->orderBy("book_price", $orderBy);
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

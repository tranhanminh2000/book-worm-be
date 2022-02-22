<?php

namespace App\Repositories;

use App\Models\Book;

class BookRepo
{
    public static function selectAll(){
        return Book::with("author", "category")->paginate();
    }
    public static function find($id){
        $book = Book::with("author", "category", "reviews")->find($id);
        return $book;
    }


}

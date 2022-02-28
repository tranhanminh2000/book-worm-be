<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getCategoriesName()
    {
        $categoriesName = Category::select("category_name")->get();

        // $categoriesName->map(function ($value) {
        //     return $value["category_name"];
        // });
        $result = $categoriesName->map(function ($value) {
            return $value["category_name"];
        })->all();

        return response()->json([
            "success" => true,
            "data" => ["categoriesName" => $result],
        ]);
    }
}

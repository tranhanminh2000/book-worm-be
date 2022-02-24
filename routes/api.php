<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReviewController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// books

Route::get("v1/books/mostDiscount", [BookController::class, 'getMostDiscount']);
Route::get("v1/books/recommended", [BookController::class, 'getRecommended']);
Route::get("v1/books/popular", [BookController::class, 'getPopular']);
Route::resource("v1/books", BookController::class);

Route::resource("v1/reviews", ReviewController::class);


Route::resource("v1/categories", BookController::class);
Route::resource("v1/author", BookController::class);

Route::post('v1/login', [AuthController::class, "login"]);

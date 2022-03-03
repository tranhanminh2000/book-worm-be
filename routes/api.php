<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\OrderController;
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
Route::middleware('auth:sanctum')->get('/user', function(Request $request) {
    $user = $request->user();
    $user['full_name'] = $user->full_name;

    return $user;
});

// Auth and generate token
Route::post('v1/login', [AuthController::class, "login"]);
Route::middleware('auth:sanctum')->post('v1/logout', [AuthController::class, "logout"]);
Route::post('v1/register', [AuthController::class, "register"]);

Route::get("v1/books/mostDiscount", [BookController::class, 'getMostDiscount']);
Route::get("v1/books/recommended", [BookController::class, 'getRecommended']);
Route::get("v1/books/popular", [BookController::class, 'getPopular']);
Route::resource("v1/books", BookController::class);

Route::resource("v1/reviews", ReviewController::class);

// C
Route::get("v1/categories", [CategoryController::class, 'getCategoriesName']);

// A
Route::get("v1/authors", [AuthorController::class, 'getAuthorsName']);


Route::post("v1/reviews", [ReviewController::class, "store"]);
// check login
Route::middleware(['auth:sanctum'])->group(function () {


    Route::post("v1/orders", [OrderController::class, "store"]);
});

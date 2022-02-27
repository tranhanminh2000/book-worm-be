<?php

namespace App\Repositories\Review;

use App\Models\Review;

class ReviewRepository
{
    public function selectByCondition($sort, $filter, $bookId)
    {
        $sortBy = null;
        $sortValue = null;
        $filterBy = null;
        $filterValue = null;

        foreach ($sort as $key => $value) {
            $sortBy = $key;
            $sortValue = $value;
        }

        foreach ($filter as $key => $value) {
            $filterBy = $key;
            $filterValue = $value;
        }

        return Review::findReviews($bookId)->sort($sortBy, $sortValue, $bookId)->filter($filterBy, $filterValue);

    }

    public function getAverageStar($bookId){
        return Review::findReviews($bookId)
            ->selectRaw("AVG(rating_start) as avg_rating")->get();

    }

    public function getListStarClassify($bookId){
        return Review::findReviews($bookId)
            ->selectRaw("rating_start, count(rating_start) as count")
            ->groupBy("rating_start")
            ->get();
    }

    public function createNewReview($bookId, $reviewTitle, $reviewDetails, $ratingStar){
        $review = new Review();
        $review->book_id = $bookId;
        $review->review_title = $reviewTitle;
        $review->review_details = $reviewDetails;
        $review->rating_start = $ratingStar;

        $date = date_create();
        $review->review_date = date_format($date, 'Y-m-d H:i:s');

        $review->save();
        return $review;
    }


}

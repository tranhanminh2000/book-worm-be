import React, { useEffect, useState } from "react";
import "./review.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "../../actions";
import { AiFillStar } from "react-icons/ai";

function Review() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const review = useSelector((state) => state.review);

    const [condition, setCondition] = useState({
        size: 5,
        id: id,
        sort: {
            by: "review_date",
            value: "desc",
        },
        filter: null,
        page: 1,
    });

    useEffect(() => {
        dispatch(actions.actionGetBookReviews(condition));
    }, [condition]);

    const handleFilter = (filterBy = null, filterValue = null) => {
        if (filterBy === null && filterValue === null) {
            setCondition({
                ...condition,
                filter: null,
            });
        } else {
            setCondition({
                ...condition,
                filter: { by: filterBy, value: filterValue },
            });
        }
    };

    const handleSort = (sortBy, sortValue) => {
        console.log(sortBy, sortValue);
        setCondition({
            ...condition,
            sort: { by: sortBy, value: sortValue },
        });
    };
    const renderListStarItem = (list) => {
        let xhtml = [];
        xhtml = list.map((listItem) => {
            return (
                <span
                    className={classNames("star", {
                        active:
                            condition.filter?.value === listItem.rating_star,
                    })}
                    onClick={() =>
                        handleFilter("rating_star", listItem.rating_star)
                    }
                >
                    {listItem.rating_star} star({listItem.count}) |
                </span>
            );
        });
        return xhtml;
    };

    const renderListReviewItem = (list = []) => {
        let xhtml = [];
        xhtml = list.map((listItem) => {
            return (
                <li className="comment-review-item">
                    <h4 className="comment-review-title">
                        {listItem.review_title} !!! |{" "}
                        <span>{listItem.rating_star} star</span>
                    </h4>
                    <p className="comment-review-content">
                        {listItem.review_details}
                    </p>
                    <div className="comment-review-time">
                        {listItem.review_date}
                    </div>
                </li>
            );
        });
        return xhtml;
    };

    return (
        <div className="section-book-review">
            <div className="row">
                <div className="col-12 col-sm-8">
                    <div className="customer-review">
                        <h3 className="title">
                            Customer reviews
                            {condition.filter === null ? null : (
                                <span className="sub-title filterBy">
                                    (Filtered by {condition.filter.value} star)
                                </span>
                            )}
                        </h3>
                        <div className="data-star">
                            <span className="star-average">
                                {review.avgStar} <AiFillStar />
                            </span>
                            <div className="all-star">
                                {renderListStarItem(review.listStarClassify)}
                                <span
                                    style={{ width: 40, textAlign: "center" }}
                                    className={classNames("star", {
                                        active: condition.filter === null,
                                    })}
                                    onClick={() => handleFilter()}
                                >
                                    ({review.totalReview})
                                </span>
                            </div>
                        </div>
                        <div className="utilities">
                            <p className="showing-review">
                                Showing {condition.size} of {review.totalReview}{" "}
                                reviews
                            </p>
                            <div className="button-group">
                                <button
                                    class="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Sort by:{" "}
                                    {condition.sort.value === "desc"
                                        ? "newest to oldest"
                                        : "oldest to newest"}
                                </button>
                                <ul
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li
                                        onClick={() =>
                                            handleSort("review_date", "desc")
                                        }
                                    >
                                        <div class="dropdown-item">
                                            Sort by date: newest to oldest
                                        </div>
                                    </li>
                                    <li
                                        onClick={() =>
                                            handleSort("review_date", "asc")
                                        }
                                    >
                                        <div class="dropdown-item">
                                            Sort by date: oldest to newest
                                        </div>
                                    </li>
                                </ul>
                                <button className="btn show">Show 20</button>
                            </div>
                        </div>
                        <ul className="comment-review">
                            {renderListReviewItem(review.reviewData?.data)}
                        </ul>
                        <div className="paginate">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a
                                            class="page-link"
                                            href="#"
                                            aria-label="Previous"
                                        >
                                            <span aria-hidden="true">
                                                &laquo;
                                            </span>
                                            <span class="sr-only">
                                                Previous
                                            </span>
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a
                                            class="page-link"
                                            href="#"
                                            aria-label="Next"
                                        >
                                            <span aria-hidden="true">
                                                &raquo;
                                            </span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="write-review">
                        <h3 className="title">Write a review</h3>
                        <form className="form-review">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">
                                    Add Title
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="title"
                                />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">
                                    Detail
                                </label>
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                ></textarea>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">
                                    Example select
                                </label>
                                <select
                                    class="form-control"
                                    id="exampleFormControlSelect1"
                                >
                                    <option>1 star</option>
                                    <option>2 star</option>
                                    <option>3 star</option>
                                    <option>4 star</option>
                                    <option>5 star</option>
                                </select>
                            </div>
                            <button className="btn submit-review">123</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;

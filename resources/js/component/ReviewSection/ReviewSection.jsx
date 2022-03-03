import React, { useCallback, useEffect, useState } from "react";
import "./reviewSection.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "../../actions";
import { AiFillStar } from "react-icons/ai";
import Pagination from "../Pagination/Pagination.jsx";
import ReviewForm from "./../ReviewForm/ReviewForm";
import Loading from "../Loading/Loading";

function ReviewSection() {
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

    const handlePaginate = (target) => {
        if (target.url === null) {
            return;
        }
        if (target.label.includes("Previous")) {
            setCondition({ ...condition, page: --condition.page });
            return;
        }
        if (target.label.includes("Next")) {
            setCondition({ ...condition, page: ++condition.page });
            return;
        }
        setCondition({ ...condition, page: target.label });
    };

    const handleFilter = (filterBy = null, filterValue = null) => {
        if (filterBy === null && filterValue === null) {
            setCondition({
                ...condition,
                filter: null,
                page: 1,
            });
        } else {
            setCondition({
                ...condition,
                filter: { by: filterBy, value: filterValue },
                page: 1,
            });
        }
    };

    const handleSort = (sortBy, sortValue) => {
        setCondition({
            ...condition,
            sort: { by: sortBy, value: sortValue },
            page: 1,
        });
    };

    const handleSize = (size) => {
        setCondition({
            ...condition,
            size: size,
            page: 1,
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

    const returnDefaultState = useCallback(() => {
        setCondition({
            id: id,
            size: 5,
            sort: {
                by: "review_date",
                value: "desc",
            },
            filter: null,
            page: 1,
        });
    });

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
                                Showing {review.reviewData?.from}-
                                {review.reviewData?.to} of{" "}
                                {review.reviewData?.total} reviews
                            </p>
                            <div className="button-group">
                                <button
                                    class="btn btn-secondary dropdown-toggle sort-btn"
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
                                <button
                                    class="btn btn-secondary dropdown-toggle show-btn"
                                    type="button"
                                    id="dropdownMenuButton2"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Show {condition.size}
                                </button>
                                <ul
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton2"
                                >
                                    <li onClick={() => handleSize(5)}>
                                        <div class="dropdown-item">Show 5</div>
                                    </li>
                                    <li onClick={() => handleSize(10)}>
                                        <div class="dropdown-item">Show 10</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ul className="comment-review">
                            {renderListReviewItem(review.reviewData?.data)}
                        </ul>
                        <Pagination
                            paginateList={review.reviewData?.links}
                            handlePaginate={handlePaginate}
                        />
                        {review.loading ? <Loading /> : null}
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <ReviewForm
                        returnDefaultState={returnDefaultState}
                    />
                </div>
            </div>
        </div>
    );
}

export default ReviewSection;

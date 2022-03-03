import React, { useEffect } from "react";
import Layout from "./../../component/Layout/Layout.jsx";
import { useParams } from "react-router-dom";
import * as actions from "../../actions";
import * as types from "../../constants";
import "./detail.scss";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import ReviewSection from "../../component/ReviewSection/ReviewSection.jsx";

const Detail = () => {
    let { id } = useParams();

    const dispatch = useDispatch();

    const detail = useSelector((state) => {
        return state.detail;
    });

    useEffect(() => {
        dispatch(actions.actionGetBookDetail(id));
    }, []);

    const renderPrice = (bookPrice, discountPrice) => {
        return (
            <div className="price">
                <span
                    className={classNames("current", {
                        "bwm-line-through": discountPrice,
                    })}
                >
                    {bookPrice}$
                </span>
                {discountPrice ? (
                    <span className="discount">{discountPrice}$</span>
                ) : null}
            </div>
        );
    };

    const handleIncreaseQuantity = () => {
        if (detail.quantity === 8) {
            return;
        }
        dispatch({ type: types.INCREASE_QUANTITY });
    };

    const handleDecreaseQuantity = () => {
        if (detail.quantity === 1) {
            return;
        }
        dispatch({ type: types.DECREASE_QUANTITY });
    };

    return (
        <Layout>
            <div className="detail">
                <div className="container">
                    <h1 className="title">{detail.category}</h1>
                    <div className="section-book-detail">
                        <div className="row">
                            <div className="col-12 col-sm-8">
                                <div className="content-detail">
                                    <div className="row wrapper">
                                        <div className="col-4 col-xs-4 left">
                                            <div className="wrapper-img">
                                                <img
                                                    src={`http://127.0.0.1:8000/bookcover/${detail.photo}.jpg`}
                                                    alt=""
                                                />
                                            </div>

                                            <div className="author">
                                                <span className="author-name">
                                                    By {detail.author}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-8 col-xs-8 right">
                                            <h3 className="book-name">
                                                {detail.title}
                                            </h3>
                                            <p className="book-description">
                                                {detail.summary}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4">
                                <div className="price-detail">
                                    {renderPrice(
                                        detail.price,
                                        detail.discountPrice
                                    )}
                                    <div className="quantity">
                                        <p>Quantity</p>
                                        <div className="control">
                                            <span
                                                className="minus"
                                                onClick={handleDecreaseQuantity}
                                            >
                                                -
                                            </span>
                                            <span className="number">
                                                {detail.quantity}
                                            </span>
                                            <span
                                                className="plus"
                                                onClick={handleIncreaseQuantity}
                                            >
                                                +
                                            </span>
                                        </div>
                                        <button className="btn add-to-cart">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ReviewSection />
                </div>
            </div>
        </Layout>
    );
};

export default Detail;

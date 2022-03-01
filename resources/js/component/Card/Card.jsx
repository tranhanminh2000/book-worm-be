import React from "react";
import "./card.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

function Card({ item }) {
    const img =
        item.book_cover_photo !== null ? item.book_cover_photo : "bookDefault";

    const renderPrice = (bookPrice, discountPrice) => {
        return (
            <div className="price">
                <span
                    className={classNames("current", {
                        "bwm-line-through": discountPrice,
                    })}
                >
                    {bookPrice}
                </span>
                {discountPrice ? (
                    <span className="discount">{discountPrice}</span>
                ) : null}
            </div>
        );
    };

    return (
        <Link to={"/detail/" + item.id} className="card bwm-card" style={{ width: "100%" }}>
            <div className="wrapper-img">
                <img src={`/bookcover/${img}.jpg`} />
            </div>
            <div className="card-body">
                <div className="card-body-head">
                    <h5 className="card-title">{item.book_title}</h5>
                    <p className="card-text">{item.author_name}</p>
                </div>
                <div className="card-body-foot">
                    {renderPrice(item.book_price, item.discount_price)}
                </div>
            </div>
        </Link>
    );
}

export default Card;

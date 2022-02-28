import React from "react";
import "./card.scss";

function Card({ item }) {
    const img =
        item.book_cover_photo !== null ? item.book_cover_photo : "bookDefault";

    return (
        <div className="card bwm-card" style={{ width: "100%" }}>
            <div className="wrapper-img">
                <img src={`/bookcover/${img}.jpg`} />
            </div>
            <div className="card-body">
                <div className="card-body-head">
                    <h5 className="card-title">{item.book_title}</h5>
                    <p className="card-text">{item.author_name}</p>
                </div>
                <div className="card-body-foot">
                    <div className="price">
                        <span className="current">55$</span>
                        <span className="discount">22$</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

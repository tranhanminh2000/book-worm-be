import React from "react";
import "./card.scss";

function Card({ item }) {

  return (
    <div className="card bwm-card" style={{ width: "100%" }}>
      <img
        src={`http://127.0.0.1:8000/bookcover/${item.book_cover_photo}.jpg`}
      />
      <div className="card-body">
        <div className="card-body-head">
          <h5 className="card-title">{item.book_title}</h5>
          <p className="card-text">{item.book_summary}</p>
        </div>
        <div className="card-body-foot">
          <div className="price">
            <span className="current">55</span>
            <span className="discount"> 22</span>
          </div>
          <div className="button-group">
            <a href="#" className="btn btn-primary add-to-card">
              Add to cart
            </a>
            <a href="#" className="btn btn-primary detail">
              Detail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

import "./cartList.scss";
import React, { useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions";

const CardList = ({ list }) => {
    const renderListItem = (list) => {
        let xhtml = [];

        xhtml = list.map((listItem) => {
            return (
                <tr>
                    <td style={{ width: "50%" }}>
                        <div className="product">
                            <div className="wrapper-img">
                                <img
                                    src={
                                        "/book-cover/" +
                                        listItem.photo +
                                        ".jpeg"
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-info">
                                <div className="title">{listItem.title}</div>
                                <div className="author">{listItem.author}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {listItem.price && listItem.discountPrice ? (
                            <>
                                <div className="discount">
                                    ${listItem.discountPrice}
                                </div>
                                <div className="price bwm-line-through">
                                    ${listItem.price}
                                </div>
                            </>
                        ) : (
                            <div className="price">$99</div>
                        )}
                    </td>
                    <td>
                        <div className="control-quantity">
                            <span className="minus">-</span>
                            <span className="number">{listItem.quantity}</span>
                            <span className="plus">+</span>
                        </div>
                    </td>
                    <td>
                        <div>
                            {listItem.discountPrice
                                ? listItem.quantity *
                                  parseFloat(listItem.discountPrice).toFixed(2)
                                : listItem.quantity *
                                  parseFloat(listItem.discountPrice).toFixed(2)}
                        </div>
                    </td>
                    <td>
                        <div className={"remove"}>X</div>
                    </td>
                </tr>
            );
        });

        return xhtml;
    };

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col ">Product</th>
                    <th scope="col ">Price</th>
                    <th scope="col ">Quantity</th>
                    <th scope="col ">Total</th>
                    <th scope="col "></th>
                </tr>
            </thead>
            <tbody>{renderListItem(list)}</tbody>
        </table>
    );
};

export default CardList;

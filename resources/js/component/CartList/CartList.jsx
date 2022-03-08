import React from "react";
import "./cartList.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

const CardList = ({
    list,
    handleRemoveItem,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
}) => {
    const renderListItem = (list) => {
        let xhtml = [];

        xhtml = list.map((listItem, index) => {
            return (
                <tr>
                    <td style={{ width: "50%" }}>
                        <Link to={`/detail/${listItem.id}`} className="product">
                            <div className="wrapper-img">
                                <img
                                    src={
                                        "/bookcover/" + listItem.photo + ".jpg"
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="product-info">
                                <div className="title">{listItem.title}</div>
                                <div className="author">{listItem.author}</div>
                            </div>
                        </Link>
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
                            <span
                                className="minus"
                                onClick={() => handleDecreaseQuantity(index)}
                            >
                                -
                            </span>
                            <span className="number">{listItem.quantity}</span>
                            <span
                                className={classNames("plus", {
                                    disabled: listItem.quantity === 8,
                                })}
                                onClick={() => handleIncreaseQuantity(index)}
                            >
                                +
                            </span>
                        </div>
                    </td>
                    <td>
                        <div>
                            {listItem.discountPrice
                                ? (
                                      listItem.quantity *
                                      parseFloat(listItem.discountPrice)
                                  ).toFixed(2)
                                : (
                                      listItem.quantity *
                                      parseFloat(listItem.price)
                                  ).toFixed(2)}
                        </div>
                    </td>
                    <td>
                        <div
                            className={"remove"}
                            onClick={() => handleRemoveItem(listItem.id)}
                        >
                            X
                        </div>
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

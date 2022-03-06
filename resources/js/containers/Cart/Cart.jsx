import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../component/Layout/Layout.jsx";
import CardList from "./../../component/CartList/CartList.jsx";
import "./cart.scss";
import * as types from "../../constants";

const Cart = () => {
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const calculateTotals = (list) => {
        let total = list.reduce((accumulator, current) => {
            if (current.discountPrice) {
                return (
                    accumulator +
                    parseFloat(current.discountPrice) * current.quantity
                );
            } else {
                return (
                    accumulator +
                    parseFloat(current.price) * current.quantity
                );
            }
        }, 0);
        return total;
    };

    let total = calculateTotals(cart.cartList).toFixed(2);

    const handleRemoveItem = (id) => {
        dispatch({ type: types.REMOVE_CART_ITEM, payLoad: { id: id } });
    };

    const handleDecreaseQuantity = (index) => {
        dispatch({
            type: types.DECREASE_ITEM_QUANTITY,
            payLoad: { index: index },
        });
    };

    const handleIncreaseQuantity = (index) => {
        dispatch({
            type: types.INCREASE_ITEM_QUANTITY,
            payLoad: { index: index },
        });
    };

    return (
        <Layout>
            <div className="cart">
                <section className="container">
                    <h4 className="cart-title">
                        Your cart: {cart.cartNumber} items
                    </h4>
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <CardList
                                list={cart.cartList}
                                handleRemoveItem={handleRemoveItem}
                                handleIncreaseQuantity={handleIncreaseQuantity}
                                handleDecreaseQuantity={handleDecreaseQuantity}
                            />
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="total">
                                <div className="total-title">Cart Totals</div>
                                <div className="total-content">
                                    <div className="price">{total}$</div>
                                    <button className="btn order">
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Cart;

import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../component/Layout/Layout.jsx";
import CardList from "./../../component/CartList/CartList.jsx";
import "./cart.scss";

const Cart = () => {
    const cart = useSelector((state) => state.cart);

    const calculateTotals = () => {};
    return (
        <Layout>
            <div className="cart">
                <section className="container">
                    <h4 className="cart-title">Your cart: 3 items</h4>
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <CardList list={cart.cartList} />
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="total">
                                <div className="total-title">Cart Totals</div>
                                <div className="total-content">
                                    <div className="price">
                                        {calculateTotals(cart.cartList)}$
                                    </div>
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

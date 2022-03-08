import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions";
import DialogSuccess from "../../component/DialogSuccess/DialogSuccess.jsx";
import Layout from "../../component/Layout/Layout.jsx";
import * as types from "../../constants";
import CardList from "./../../component/CartList/CartList.jsx";
import Dialog from "./../../component/Dialog/Dialog.jsx";
import "./cart.scss";

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
                    accumulator + parseFloat(current.price) * current.quantity
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

    const handlePlaceOrder = () => {
        dispatch(actions.showModal());
        dispatch(actions.changeModalTitle("Order successfully"));
        dispatch(
            actions.changeModalContent(
                <DialogSuccess
                    message={"Success"}
                    action={handleShowDialog}
                />
            )
        );
    };

    const handleShowDialog = () => {
        if (cart.cartList.length === 0) {
            return;
        }
        dispatch(actions.showModal());
        dispatch(actions.changeModalTitle("Confirm Ordering"));
        dispatch(
            actions.changeModalContent(
                <Dialog
                    message={`Totals: ${total}$. Do you want to place order ?`}
                    action={handlePlaceOrder}
                />
            )
        );
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
                                    <button
                                        className={classNames("btn order", {
                                            disabled:
                                                cart.cartList.length === 0,
                                        })}
                                        onClick={handleShowDialog}
                                    >
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

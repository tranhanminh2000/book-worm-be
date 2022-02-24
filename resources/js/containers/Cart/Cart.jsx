import React from "react";
import Layout from "../../component/Layout/Layout.jsx";
import "./cart.scss";

const Cart = () => {
  return (
    <Layout>
      <div className="cart">
        <section className="container">
          <h4 className="cart-title">Your cart: 3 items</h4>
          <div className="row">
            <div className="col-12 col-md-8">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                  </tr>
                  <tr>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                  </tr>
                  <tr>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-12 col-md-4">
              <div className="total">
                <div className="total-title">Cart Totals</div>
                <div className="total-content">
                  <div className="price">99$</div>
                  <button className="btn order">Place Order</button>
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

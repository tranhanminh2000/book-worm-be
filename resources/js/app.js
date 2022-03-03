import reactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./containers/Home/Home.jsx";
import Cart from "./containers/Cart/Cart.jsx";
import Shop from "./containers/Shop/Shop.jsx";
import Detail from "./containers/Detail/Detail.jsx";
import About from "./containers/About/About.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // import bs style library
import "bootstrap"; // import bs script library (include: jquery, popper js)
import "./app.scss";
import Modal from "./component/Modal/Modal.jsx";
import configStore from "./store/config.js";
import { Provider } from "react-redux";
import NotFound from "./containers/NotFound/NotFound.jsx";
import Loading from "./component/Loading/Loading.jsx";

const store = configStore();

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route
                                index
                                element={<Navigate to="/home" />}
                            ></Route>
                            <Route path="home" element={<Home />}></Route>
                            <Route path="shop" element={<Shop />}></Route>
                            <Route path="cart" element={<Cart />}></Route>
                            <Route
                                path="detail/:id"
                                element={<Detail />}
                            ></Route>
                            <Route path="about" element={<About />}></Route>
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
                <Modal />
            </div>
        </Provider>
    );
}

reactDOM.render(<App />, document.getElementById("root"));

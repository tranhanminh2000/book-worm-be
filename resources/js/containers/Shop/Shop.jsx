import React, { useEffect } from "react";
import Layout from "../../component/Layout/Layout.jsx";
import "./shop.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import * as actions from "../../actions";
import Cart from "../../component/Card/Card.jsx";
import Pagination from "./../../component/Pagination/Pagination.jsx";
import * as actions from "../../actions";
import Accordion from "./../../component/Accordian/Accorditon";

const Shop = () => {
    const dispatch = useDispatch();
    const shopFilter = useSelector((state) => state.shopFilter);

    useEffect(() => {
        dispatch(actions.actionGetFilterList());
    }, []);

    return (
        <div className="shop">
            <Layout>
                <div className="section-main">
                    <div className="container">
                        <div className="wrapper">
                            <h4 className="title">Books</h4>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-2 filterQuery filter-section">
                                <h4 className="filter-heading">Filter By</h4>
                                <Accordion
                                    list={[
                                        {
                                            name: "Category",
                                            data: shopFilter.categoryList,
                                        },
                                        {
                                            name: "Author",
                                            data: shopFilter.authorList,
                                        },
                                        {
                                            name: "Rating",
                                            data: shopFilter.ratingList,
                                        },
                                    ]}
                                />
                            </div>
                            <div className="col-12 col-sm-10 books-section">
                                <div className="utilities-bar">
                                    <p className="showing-title">show</p>
                                    <div className="button-group">
                                        <div class="dropdown sort">
                                            <button
                                                class="btn btn-secondary dropdown-toggle"
                                                type="button"
                                                id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Sort
                                            </button>
                                            <ul
                                                class="dropdown-menu"
                                                aria-labelledby="dropdownMenuButton1"
                                            >
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                    >
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                    >
                                                        Another action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                    >
                                                        Something else here
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="dropdown show-quantity">
                                            <button
                                                class="btn btn-secondary dropdown-toggle"
                                                type="button"
                                                id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Show
                                            </button>
                                            <ul
                                                class="dropdown-menu"
                                                aria-labelledby="dropdownMenuButton1"
                                            >
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                    >
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                    >
                                                        Another action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item"
                                                        href="#"
                                                    >
                                                        Something else here
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row product-list">
                                    {/* {renderBookItem(book.bookList)} */}
                                </div>

                                <div className="row pagination">
                                    <Pagination />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Shop;

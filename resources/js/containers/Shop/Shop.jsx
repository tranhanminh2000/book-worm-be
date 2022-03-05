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
import DropdownMenu from "./../../component/DropdownMenu/DropdownMenu";
import * as types from "../../constants";
import ShopProductList from "../../component/ShopProductList/ShopProductList.jsx";
import delayAsync from "./../../common/delay";

const sortList = [
    { title: "Sort By : on sale", by: "type", value: "onsale" },
    { title: "Sort By : popularity", by: "type", value: "popularity" },
    { title: "Sort By : price high to low", by: "type", value: "desc" },
    { title: "Sort By : price low to high", by: "type", value: "asc" },
];

const showList = [5, 10, 15, 20];

const Shop = () => {
    const dispatch = useDispatch();
    const shopFilter = useSelector((state) => state.shopFilter);
    const shopProduct = useSelector((state) => state.shopProduct);
    console.log(shopFilter);
    useEffect(() => {
        dispatch(actions.actionGetFilterList());
    }, []);

    useEffect(() => {
        getBookLIst();
    }, [
        shopProduct.sort.by,
        shopProduct.sort.value,
        shopProduct.size,
        shopProduct.page,
        shopFilter.filter?.by,
        shopFilter.filter?.value,
    ]);

    const getBookLIst = () => {
        const condition = {
            size: shopProduct.size,
            sort: shopProduct.sort,
            filter: shopFilter.filter,
            page: shopProduct.page,
        };
        dispatch(actions.actionGetBookList(condition));
    };
    const handleSort = async (sortTile, sortBy, sortValue) => {
        const sort = { title: sortTile, by: sortBy, value: sortValue };

        await delayAsync(500);

        dispatch({ type: types.SET_SORT, payLoad: { sort: sort } });
        dispatch({ type: types.SET_PAGE, payLoad: { page: 1 } });
    };

    const handleSize = (size) => {
        dispatch({ type: types.SET_SIZE, payLoad: { size: size } });
        dispatch({ type: types.SET_PAGE, payLoad: { page: 1 } });
    };

    const handlePaginate = (target) => {
        if (target.url === null) {
            return;
        }
        if (target.label.includes("Previous")) {
            dispatch({
                type: types.SET_PAGE,
                payLoad: { page: shopProduct.page - 1 },
            });
            return;
        }
        if (target.label.includes("Next")) {
            dispatch({
                type: types.SET_PAGE,
                payLoad: { page: shopProduct.page + 1 },
            });
            return;
        }
        dispatch({
            type: types.SET_PAGE,
            payLoad: { page: parseInt(target.label) },
        });
    };

    return (
        <div className="shop">
            <Layout>
                <div className="section-main">
                    <div className="container">
                        <div className="wrapper">
                            <h4 className="title">
                                Books
                                {shopFilter.filter ? (
                                    <span className="filter-title">
                                        ( Filter by: {shopFilter.filter?.title}{" "}
                                        )
                                    </span>
                                ) : null}
                            </h4>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-2 filterQuery filter-section">
                                <h4 className="filter-heading">Filter By</h4>
                                <Accordion
                                    list={[
                                        {
                                            title: "Author",
                                            field: "author_name",
                                            data: shopFilter.authorList,
                                        },
                                        {
                                            title: "Category",
                                            field: "category_name",
                                            data: shopFilter.categoryList,
                                        },
                                        {
                                            title: "Rating",
                                            field: "rating_star",
                                            data: shopFilter.ratingList,
                                        },
                                    ]}
                                />
                            </div>
                            <div className="col-12 col-sm-10 books-section">
                                <div className="utilities-bar">
                                    <p className="showing-title">
                                        show {shopProduct.data?.from}-
                                        {shopProduct.data?.to} of{" "}
                                        {shopProduct.data?.total} books
                                    </p>
                                    <div className="button-group">
                                        <div class="dropdown sort">
                                            <DropdownMenu
                                                title={shopProduct.sort.title}
                                                id="sort"
                                                list={sortList}
                                                click={handleSort}
                                            />
                                        </div>

                                        <div class="dropdown show-quantity">
                                            <button
                                                class="btn btn-secondary dropdown-toggle"
                                                type="button"
                                                id="show"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Show: {shopProduct.size}
                                            </button>
                                            <ul
                                                class="dropdown-menu"
                                                aria-labelledby="show"
                                            >
                                                {showList.map((item) => {
                                                    return (
                                                        <li>
                                                            <span
                                                                class="dropdown-item"
                                                                onClick={() =>
                                                                    handleSize(
                                                                        item
                                                                    )
                                                                }
                                                            >
                                                                show: {item}
                                                            </span>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <ShopProductList
                                    productList={shopProduct.data?.data}
                                />
                                <div className="row pagination">
                                    <Pagination
                                        paginateList={shopProduct.data?.links}
                                        handlePaginate={handlePaginate}
                                    />
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

import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "../../component/Carousel/Carousel.jsx";
import Feature from "../../component/Feature/Feature.jsx";
import Layout from "../../component/Layout/Layout.jsx";
import AxiosService from "../../services/AxiosService.js";
import "./home.scss";

const Home = () => {
    const [listMostDiscount, setListMostDiscount] = useState([]);
    const [feature, setFeature] = useState({
        type: "",
        list: [],
    });

    useEffect(() => {
        getListMostDiscount();
        getListRecommended();
    }, []);

    const getListMostDiscount = async () => {
        const res = await AxiosService.get("/books/mostDiscount?size=10");
        setListMostDiscount(res.data);
    };

    const getListRecommended = async () => {
        const res = await AxiosService.get("/books/recommended?size=8");
        setFeature({ ...feature, type: "recommended", list: res.data });
    };

    const getListPopular = async () => {
        const res = await AxiosService.get("/books/popular?size=8");
        setFeature({ ...feature, type: "popular", list: res.data });
    };

    return (
        <Layout>
            <div className="home">
                <section className="container on-sale">
                    <div className="on-sale-header">
                        <h2 className="title">On Sale</h2>
                        <Link to="/" className="view-all btn">
                            View All
                        </Link>
                    </div>

                    <div className="on-sale-content">
                        <Carousel list={listMostDiscount} />
                    </div>
                </section>

                <section className="container feature">
                    <div className="feature-header">
                        <h2 className="title">Feature Books</h2>
                        <div className="options">
                            <button
                                className={classNames("btn recommended", {
                                    active: feature.type === "recommended",
                                })}
                                onClick={getListRecommended}
                            >
                                Recommended
                            </button>
                            <button
                                className={classNames("btn popular", {
                                    active: feature.type === "popular",
                                })}
                                onClick={getListPopular}
                            >
                                Popular
                            </button>
                        </div>
                    </div>

                    <div className="feature-content">
                        <Feature list={feature.list} />
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Home;

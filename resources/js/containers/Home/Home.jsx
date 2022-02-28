import React, { useState, useEffect } from "react";
import Carousel from "../../component/Carousel/Carousel.jsx";
import Layout from "../../component/Layout/Layout.jsx";
import AxiosService from "../../services/AxiosService.js";
import "./home.scss";

const Home = () => {
    const [listMostDiscount, setListMostDiscount] = useState([]);
    const [listRecommended, setListRecommended] = useState([]);
    const [listPopular, setListPopular] = useState([]);

    useEffect(async () => {
        const res = await AxiosService.get("/books/mostDiscount?size=10");
        setListMostDiscount(res.data);
    }, [listRecommended, listPopular]);

    return (
        <Layout>
            <div className="home">
                <section className="container on-sale">
                    <div className="on-sale-header">
                        <h2 className="title">On Sale</h2>
                        <button className="btn">123</button>
                    </div>

                    <div className="on-sale-content">
                        <Carousel list={listMostDiscount}/>
                    </div>
                </section>

                <section className="container feature">
                    <div className="feature-header">
                        <h2 className="title">Feature Books</h2>
                        <div className="options">
                            <button className="btn recommended active">
                                Recommended
                            </button>
                            <button className="btn popular">Popular</button>
                        </div>
                    </div>

                    <div className="feature-content">
                        <div className="products-list">
                            <div className="row">
                                <div className="col-3 col-sm-3 product-list-item">
                                    <div
                                        className="card"
                                        style={{ width: "100%" }}
                                    >
                                        <img src="https://via.placeholder.com/350x350" />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Book Name
                                            </h5>
                                            <p className="card-text">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                            <div>500$$$</div>
                                            <a
                                                href="#"
                                                className="btn btn-primary"
                                            >
                                                Go somewhere
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 col-sm-3 product-list-item">
                                    <div
                                        className="card"
                                        style={{ width: "100%" }}
                                    >
                                        <img src="https://via.placeholder.com/350x350" />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Book Name
                                            </h5>
                                            <p className="card-text">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                            <div>500$$$</div>
                                            <a
                                                href="#"
                                                className="btn btn-primary"
                                            >
                                                Go somewhere
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 col-sm-3 product-list-item">
                                    <div
                                        className="card"
                                        style={{ width: "100%" }}
                                    >
                                        <img src="https://via.placeholder.com/350x350" />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Book Name
                                            </h5>
                                            <p className="card-text">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                            <div>500$$$</div>
                                            <a
                                                href="#"
                                                className="btn btn-primary"
                                            >
                                                Go somewhere
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 col-sm-3 product-list-item">
                                    <div
                                        className="card"
                                        style={{ width: "100%" }}
                                    >
                                        <img src="https://via.placeholder.com/350x350" />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Book Name
                                            </h5>
                                            <p className="card-text">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                            <div>500$$$</div>
                                            <a
                                                href="#"
                                                className="btn btn-primary"
                                            >
                                                Go somewhere
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 col-sm-3 product-list-item">
                                    <div
                                        className="card"
                                        style={{ width: "100%" }}
                                    >
                                        <img src="https://via.placeholder.com/350x350" />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Book Name
                                            </h5>
                                            <p className="card-text">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                            <div>500$$$</div>
                                            <a
                                                href="#"
                                                className="btn btn-primary"
                                            >
                                                Go somewhere
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 col-sm-3 product-list-item">
                                    <div
                                        className="card"
                                        style={{ width: "100%" }}
                                    >
                                        <img src="https://via.placeholder.com/350x350" />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Book Name
                                            </h5>
                                            <p className="card-text">
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                            <div>500$$$</div>
                                            <a
                                                href="#"
                                                className="btn btn-primary"
                                            >
                                                Go somewhere
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Home;

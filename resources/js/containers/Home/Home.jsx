import React from "react";
import Layout from "../../component/Layout/Layout.jsx";
import "./home.scss";

const Home = () => {



  return (
    <Layout>
      <div className="home">
        <section className="container on-sale">
          <div className="on-sale-header">
            <h2 className="title">On Sale</h2>
            <button className="btn">123</button>
          </div>
          <div className="on-sale-content">
            <div className="slider">
              <div
                id="carouselExampleControlsNoTouching"
                class="carousel slide"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="row">
                      <div className="col-3 col-sm-3 product-list-item">
                        <div className="card" style={{ width: "100%" }}>
                          <img src="https://via.placeholder.com/350x350" />
                          <div className="card-body">
                            <h5 className="card-title">Book Name</h5>
                            <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                            <div>500$$$</div>
                            <a href="#" className="btn btn-primary">
                              Go somewhere
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 col-sm-3 product-list-item">
                        <div className="card" style={{ width: "100%" }}>
                          <img src="https://via.placeholder.com/350x350" />
                          <div className="card-body">
                            <h5 className="card-title">Book Name</h5>
                            <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                            <div>500$$$</div>
                            <a href="#" className="btn btn-primary">
                              Go somewhere
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 col-sm-3 product-list-item">
                        <div className="card" style={{ width: "100%" }}>
                          <img src="https://via.placeholder.com/350x350" />
                          <div className="card-body">
                            <h5 className="card-title">Book Name</h5>
                            <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                            <div>500$$$</div>
                            <a href="#" className="btn btn-primary">
                              Go somewhere
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 col-sm-3 product-list-item">
                        <div className="card" style={{ width: "100%" }}>
                          <img src="https://via.placeholder.com/350x350" />
                          <div className="card-body">
                            <h5 className="card-title">Book Name</h5>
                            <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                            <div>500$$$</div>
                            <a href="#" className="btn btn-primary">
                              Go somewhere
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ebadb044b374504ef8e81bdec4d0e840"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="container feature">
          <div className="feature-header">
            <h2 className="title">Feature Books</h2>
            <div className="options">
              <button className="btn recommended active">Recommended</button>
              <button className="btn popular">Popular</button>
            </div>
          </div>

          <div className="feature-content">
            <div className="products-list">
              <div className="row">
                <div className="col-3 col-sm-3 product-list-item">
                  <div className="card" style={{ width: "100%" }}>
                    <img src="https://via.placeholder.com/350x350" />
                    <div className="card-body">
                      <h5 className="card-title">Book Name</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div>500$$$</div>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-3 col-sm-3 product-list-item">
                  <div className="card" style={{ width: "100%" }}>
                    <img src="https://via.placeholder.com/350x350" />
                    <div className="card-body">
                      <h5 className="card-title">Book Name</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div>500$$$</div>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-3 col-sm-3 product-list-item">
                  <div className="card" style={{ width: "100%" }}>
                    <img src="https://via.placeholder.com/350x350" />
                    <div className="card-body">
                      <h5 className="card-title">Book Name</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div>500$$$</div>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-3 col-sm-3 product-list-item">
                  <div className="card" style={{ width: "100%" }}>
                    <img src="https://via.placeholder.com/350x350" />
                    <div className="card-body">
                      <h5 className="card-title">Book Name</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div>500$$$</div>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-3 col-sm-3 product-list-item">
                  <div className="card" style={{ width: "100%" }}>
                    <img src="https://via.placeholder.com/350x350" />
                    <div className="card-body">
                      <h5 className="card-title">Book Name</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div>500$$$</div>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-3 col-sm-3 product-list-item">
                  <div className="card" style={{ width: "100%" }}>
                    <img src="https://via.placeholder.com/350x350" />
                    <div className="card-body">
                      <h5 className="card-title">Book Name</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div>500$$$</div>
                      <a href="#" className="btn btn-primary">
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

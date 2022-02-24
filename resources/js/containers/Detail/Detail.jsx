import React, { useEffect } from "react";
import Layout from "./../../component/Layout/Layout.jsx";
import { useParams } from "react-router-dom";
import * as actions from "../../actions";

import "./detail.scss";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  let { id } = useParams();

  const dispatch = useDispatch();

  const detail = useSelector((state)=>{
    return state.detail;
  });
 
  useEffect(() => {
    dispatch(actions.actionGetBookDetail(id));
  }, []);
  
  
  return (
    <Layout>
      <div className="detail">
        <div className="container">
          <h1 className="title">{detail.book.category}</h1>
          <div className="section-book-detail">
            <div className="row">
              <div className="col-12 col-sm-8">
                <div className="content-detail">
                  <div className="row wrapper">
                    <div className="col-4 left">
                      <img src={`http://127.0.0.1:8000/bookcover/${detail.book.photo}.jpg`} alt="" />
                      <div className="author">
                        <span className="author-name">By {detail.book.author}</span>
                      </div>
                    </div>
                    <div className="col-8 right">
                      <h3 className="book-name">{detail.book.title}</h3>
                      <p className="book-description">
                        {detail.book.summary}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="price-detail">
                  <div className="price">
                    <span className="discount">${detail.book.price}</span>
                    <span className="current">${detail.book.price}</span>
                  </div>
                  <div className="quantity">
                    <div className="control">
                      <span className="minus">-</span>
                      <span className="number">1</span>
                      <span className="plus">+</span>
                    </div>
                    <button className="btn add-to-cart">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-book-review">
            <div className="row">
              <div className="col-12 col-sm-8">
                <div className="customer-review">
                  <h3 className="title">Customer reviews</h3>
                  <div className="data-star">
                    <span className="star-average">4.6 Start</span>
                    <div className="all-star">
                      <span>5 star(200)</span> | <span>4 star(200)</span> |
                      <span>3 star(200)</span> | <span>2 star(200)</span> |
                      <span>1 star(200)</span>
                    </div>
                  </div>
                  <div className="utilities">
                    <p className="showing-review">show 20</p>
                    <div className="button-group">
                      <button className="btn sort">Sort by on sale</button>
                      <button className="btn show">Show 20</button>
                    </div>
                  </div>
                  <ul className="comment-review">
                    <li className="comment-review-item">
                      <h4 className="comment-review-title">
                        Amazing !!! | 5 starts
                      </h4>
                      <p className="comment-review-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique ullam laboriosam modi nulla, corporis vitae
                        maiores atque deleniti, in illum corrupti omnis
                        accusantium doloremque enim. Quos optio laboriosam
                        voluptatibus ullam!
                      </p>
                      <div className="comment-review-time">12/12/200</div>
                    </li>
                    <li className="comment-review-item"></li>
                    <li className="comment-review-item"></li>
                  </ul>
                  <div className="paginate">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination">
                        <li class="page-item">
                          <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="write-review">
                  <h3 className="title">Write a review</h3>
                  <form className="form-review">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Add Title</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="title"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">Detail</label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">
                        Example select
                      </label>
                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>1 star</option>
                        <option>2 star</option>
                        <option>3 star</option>
                        <option>4 star</option>
                        <option>5 star</option>
                      </select>
                    </div>
                    <button className="btn submit-review">123</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;

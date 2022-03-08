import classNames from "classnames";
import React, { useRef, useState, memo } from "react";
import { useParams } from "react-router-dom";
import * as actions from "../../actions";
import AxiosService from "../../services/AxiosService";
import "./reviewForm.scss";

const ReviewForm = ({ returnDefaultState }) => {
    const { id } = useParams();
    const [inputTitle, setInputTitle] = useState("");
    const [inputDetail, setInputDetail] = useState("");
    const [optionRating, setOptionRating] = useState(5);
    const [alert, setAlert] = useState({
        status: "",
        content: "",
    });

    const inputTitleRef = useRef(null);
    const inputDetailRef = useRef(null);

    const validateForm = (inputTitle, inputDetail) => {
        if (inputTitle.trim() === "") {
            inputTitleRef.current.focus();
            setAlert({ status: "error", content: "Title is required" });
            return false;
        }
        if (inputDetail.trim() === "") {
            inputDetailRef.current.focus();
            setAlert({ status: "error", content: "Detail is required" });
            return false;
        }
        return true;
    };

    const renderAlert = (status, content) => {
        return (
            <div
                class={classNames("alert", {
                    "alert-danger": status === "error",
                    "alert-success": status === "success",
                })}
                role="alert"
            >
                {content}
            </div>
        );
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        if (validateForm(inputTitle, inputDetail)) {
            const res = await AxiosService.post("/reviews", {
                bookId: id,
                reviewTitle: inputTitle,
                reviewDetails: inputDetail,
                ratingStar: optionRating,
            });

            if (res.status === 200) {
                returnDefaultState();
                setInputDetail("");
                setInputTitle("");
                setAlert({
                    status: "success",
                    content: "Post review successfully!",
                });
                setTimeout(() => {
                    setAlert({ status: "", content: "" });
                }, 6000);
            }
        }
        return;
    };

    const handleChangeInputTitle = (e) => {
        setInputTitle(e.target.value);
        setAlert({ status: "", content: "" });
    };

    const handleChangeInputDetail = (e) => {
        setInputDetail(e.target.value);
        setAlert({ status: "", content: "" });
    };

    return (
        <div className="write-review">
            <h3 className="title">Write a review</h3>
            <form className="form-review" onSubmit={handleSubmitForm}>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Add A Title</label>
                    <input
                        ref={inputTitleRef}
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        value={inputTitle}
                        onChange={handleChangeInputTitle}
                    />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Detail</label>
                    <textarea
                        ref={inputDetailRef}
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        value={inputDetail}
                        onChange={handleChangeInputDetail}
                    ></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">
                        Select a rating star
                    </label>
                    <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        value={optionRating}
                        onChange={(e) => setOptionRating(e.target.value)}
                    >
                        {[1, 2, 3, 4, 5].map((ele) => {
                            return <option value={ele}>{ele} Star</option>;
                        })}
                    </select>
                </div>
                {alert.status && alert.content
                    ? renderAlert(alert.status, alert.content)
                    : null}

                <button className="btn btn-primary submit-review" type="submit">
                    SUBMIT REVIEW
                </button>
            </form>
        </div>
    );
};

export default memo(ReviewForm);

import classNames from "classnames";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import "./accordion.scss";
import * as types from "../../constants/";

function Accordion({ list }) {
    const shopFilter = useSelector((state) => state.shopFilter);

    const dispatch = useDispatch();

    const handleActiveFilter = (title, filterBy, filterValue) => {
        const filter = { title: title, by: filterBy, value: filterValue };
        dispatch({ type: types.SET_FILTER, payLoad: { filter: filter } });
    };

    const convertNumberToStar = (number = 1) => {
        let listStar = [];

        for (let i = 0; i < number; i++) {
            listStar.push(
                <span>
                    <AiFillStar />
                </span>
            );
        }
        return listStar;
    };

    const renderAccordionListItem = (list) => {
        return list.data?.map((listItem) => {
            return (
                <li
                    className={classNames("accordion-list-item", {
                        active: shopFilter.filter?.value === listItem,
                    })}
                    onClick={() =>
                        handleActiveFilter(list.title, list.field, listItem)
                    }
                >
                    {listItem}
                </li>
            );
        });
    };

    return (
        <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseOne"
                    >
                        {list[0].title}
                    </button>
                </h2>
                <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingOne"
                >
                    <div class="accordion-body">
                        <ul className="accordion-list">
                            {renderAccordionListItem(list[0])}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                    >
                        {list[1].title}
                    </button>
                </h2>
                <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                >
                    <div class="accordion-body">
                        <ul className="accordion-list">
                            {renderAccordionListItem(list[1])}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                    >
                        {list[2].title}
                    </button>
                </h2>
                <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree"
                >
                    <div class="accordion-body">
                        <ul className="accordion-list">
                            {list[2].data?.map((listItem) => {
                                return (
                                    <li
                                        className={classNames(
                                            "accordion-list-item",
                                            {
                                                active:
                                                    shopFilter.filter?.value ===
                                                    listItem,
                                            }
                                        )}
                                        onClick={() =>
                                            handleActiveFilter(
                                                list[2].title,
                                                list[2].field,
                                                listItem
                                            )
                                        }
                                    >
                                        {convertNumberToStar(listItem)}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;

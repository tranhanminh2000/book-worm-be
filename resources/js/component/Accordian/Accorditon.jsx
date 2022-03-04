import React, { useState } from "react";
import "./accordion.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

function Accordion({ list }) {
    return (
        <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                    >
                        {list[0].name}
                    </button>
                </h2>
                <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                >
                    <div class="accordion-body">
                        <ul>
                            {list[0].data.map((listItem) => {
                                return <li>{listItem}</li>;
                            })}
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
                        {list[1].name}
                    </button>
                </h2>
                <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                >
                    <div class="accordion-body">
                        <ul>
                            {list[1].data.map((listItem) => {
                                return <li>{listItem}</li>;
                            })}
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
                        {list[2].name}
                    </button>
                </h2>
                <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree"
                >
                    <div class="accordion-body">
                        <ul>
                            {list[2].data.map((listItem) => {
                                return <li>{listItem}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;

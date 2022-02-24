import "./modal.scss";
import React, { useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions";

const Modal = (props) => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleHideModal = () => {
    dispatch(actions.hideModal());
  };

  return (
    <div className={classNames("bwm-modal", { show: modal.showModal })}>
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={handleHideModal}
          ></button>
        </div>
        <div class="modal-body">
          
        </div>
      </div>
      <div className={"overlay"} onClick={handleHideModal}></div>
    </div>
  );
};

export default Modal;

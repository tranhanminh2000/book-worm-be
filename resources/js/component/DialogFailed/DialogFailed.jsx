import React from "react";
import "./dialog.scss";
import { useDispatch } from "react-redux";
import * as actions from "../../actions";
import { Checkmark } from "react-checkmark";

function DialogFailed({ message, action }) {
    const dispatch = useDispatch();

    const hideModal = () => {
        dispatch(actions.hideModal());
    };
    return (
        <div className="dialogFailed">
            <Checkmark />
            <p className="message">{message}</p>
            <div className="buttonGroup">
                <button className="btn primary btn-order" onClick={action}>
                    Yes
                </button>
                <button className="btn primary btn-cancel" onClick={hideModal}>
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default DialogFailed;

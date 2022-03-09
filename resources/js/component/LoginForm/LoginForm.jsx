import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../actions";
import AxiosService from "../../services/AxiosService";
import RegisterForm from "./../RegisterForm/RegisterForm";
import "./loginForm.scss";

const LoginForm = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
        alert: "",
    });

    const dispatch = useDispatch();

    const handleSubmitLoginForm = async (e) => {
        e.preventDefault();

        const res = await AxiosService.post("/login", {
            email: state.email,
            password: state.password,
        });
        if (res.status === 200) {
            let accessToken = res.data.access_token;
            dispatch(actions.actUserLogin(accessToken));
            dispatch(actions.hideModal());
        }
    };

    const handleShowRegister = () => {
        dispatch(actions.showModal());
        dispatch(actions.changeModalTitle("Register"));
        dispatch(actions.changeModalContent(<RegisterForm />));
    };

    return (
        <form onSubmit={handleSubmitLoginForm}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={state.email}
                    onChange={(e) =>
                        setState({ ...state, email: e.target.value })
                    }
                />
                <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                    Password
                </label>
                <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    value={state.password}
                    onChange={(e) =>
                        setState({ ...state, password: e.target.value })
                    }
                />
            </div>
            {state.alert ? (
                <div class="alert alert-danger" role="alert">
                    A simple danger alert—check it out!
                </div>
            ) : null}
            <div className="button-group">
                <button type="submit" class="btn btn-primary btn-signIn">
                    LOG IN
                </button>
                <button
                    class="btn btn-primary btn-register"
                    onClick={handleShowRegister}
                >
                    REGISTER
                </button>
            </div>
        </form>
    );
};

export default LoginForm;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../LoginForm/LoginForm";
import "./registerForm.scss";
import * as actions from "../../actions";

const RegisterForm = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    const dispatch = useDispatch();

    const handleShowLogin = () => {
        dispatch(actions.showModal());
        dispatch(actions.changeModalTitle("Login"));
        dispatch(actions.changeModalContent(<LoginForm />));
    };

    return (
        <form>
            <div class="mb-3">
                <div class="name-group">
                    <div className="f-Name">
                        <label for="firstName" class="form-label">
                            First Name
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            value={state.firstName}
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    firstName: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="l-Name">
                        <label for="lastName" class="form-label">
                            Last Name
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="lastName"
                            value={state.email}
                            onChange={(e) =>
                                setState({ ...state, lastName: e.target.value })
                            }
                        />
                    </div>
                </div>
            </div>

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
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                    Password Confirm
                </label>
                <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    value={state.passwordConfirm}
                    onChange={(e) =>
                        setState({ ...state, passwordConfirm: e.target.value })
                    }
                />
            </div>

            <button type="submit" class="btn btn-primary btn-register-now">
                REGISTER NOW
            </button>

            <div onClick={handleShowLogin}>Back To Login</div>
        </form>
    );
};

export default RegisterForm;

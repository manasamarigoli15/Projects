import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { validateEmail } from "../services/loginValidation";
import { validatePassword } from "../services/loginValidation";

import "../CSS/login.css";

import { login } from "../services/authservice";

function Logincomponent() {
    let navigate = useHistory();
    let [validationStatus, setValidataionStatus] = useState({ email: true, password: true });
    let [user, setUser] = useState({});
    let [isAuthFailed, setAuthFailed] = useState(false);
    function onLogin() {
        login(user.email, user.password)
            .then(d => {
                console.debug(d.data);
                sessionStorage.setItem("Token", d.data);
                navigate.push("/dashboard");
                
            })
            .catch(error => setAuthFailed(true));

       let isEmailValid = validateEmail(user.email);
       let isPasswordValid = validatePassword(user.password);
       setValidataionStatus({ email: isEmailValid, password: isPasswordValid });
    }

    return (
        <div className="row vh-100">
            <div className="login-background image-fluid ">
                <form method="post">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 text-center text-white mt-4">
                            <h2 className="my-5 mt-sm-2 mb-sm-5 text-light">Welcome to Sky Bank</h2>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-sm-10 col-lg-6">
                            <div className="card mt-3 shadow-lg p-3 rounded text-center bg-info bg-opacity-10">
                                <div className="card-header">
                                    <div className="text-white">
                                        <i className="bi bi-person-circle fs-1 text-light"></i>
                                    </div>
                                    <h6 className="text-light">Admin Login</h6>
                                </div>

                                <div className="card-body text-white">
                                    {
                                        (isAuthFailed) &&
                                        <div className="row justify-content-center">
                                            <div className="col-12">
                                                <div className='alert alert-danger text-center'>Login Failed</div></div></div>
                                    }
                                    <div className="input-group mt-2 col-12 mb-3 mb-md-1">
                                        <span className="input-group-text">
                                            <i className="bi bi-person-fill"></i>
                                        </span>
                                        <input type="email" placeholder="Email address" id="Email" className="form-control" required="required"
                                            onChange={(event) => setUser((p) => { return { ...p, email: event.target.value } })} />
                                        {
                                            (!validationStatus.email) &&
                                            <div className='text-danger text-center mt-2 col-12 mb-md-1 mb-sm-3 rounded'>Please Enter Valid Email Id</div>
                                        }
                                    </div>

                                    <div className="input-group mt-2 col-12 mb-3 mb-md-1">
                                        <span className="input-group-text">
                                            <i className="bi bi-lock-fill"></i>
                                        </span>
                                        <input type="password" placeholder="Password" id="Password" className="form-control" required="required"
                                            onChange={(event) => setUser((p) => { return { ...p, password: event.target.value } })} />
                                        {
                                            (!validationStatus.password) &&
                                            <div className='text-danger text-center mt-2 col-12 mb-md-1 mb-sm-3  rounded'> Please Enter Valid Password!!!! </div>
                                        }
                                    </div>

                                    <div className="row d-flex justify-content-center">
                                        <div className="col-12">
                                            <div className="input-group my-4">
                                                <button type="button" onClick={() => onLogin()} className="form-control text-white bg-dark">Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Logincomponent;

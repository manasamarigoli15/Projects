import adminloginpic from "../assets/img/adminloginpic.jpg";
import applogo from "../assets/img/applogo.jpg";
import { useState } from 'react';
import { validateEmail, validatePassword } from '../services/loginvalidation';
import { login } from "../services/auth";
import { useHistory } from "react-router-dom";

import "../assets/css/bgimg.css";

function LoginComponent() {

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

        <div className="admin-bground vh-100">
            <div className="row d-flex justify-content-center col-sm-12">
                <div className='text-center mt-5 fs-2'>
                    <img src={applogo} width="60"
                        height="60" />
                    <span className="ms-2 mt-5 fs-2"><strong>FindMyHome</strong></span>
                </div>
                <div className="card m-auto mt-5 bg-light w-50 col-sm-12">
                    <div className="text-center">
                        <div className='card-header mt-2'>
                            <div className="text-dark ">
                                <i className="bi bi-person-circle fs-1"></i>
                            </div>
                            <h6 className='text-dark fs-2'>Admin Login</h6>
                        </div>
                    </div>
                    <div className='card-body'>
                        {
                            (isAuthFailed) &&
                            <div className='alert alert-danger text-center'>Login Failed</div>
                        }

                        <label for="txtEmail" class="fs-6"><b>Email</b></label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-person-circle"></i>
                            </span>
                            <input type="Email" placeholder="Email" className="form-control"
                                onChange={(event) => setUser((p) => { return { ...p, email: event.target.value } })}
                                required="required" />
                        </div>
                        <div>
                            {
                                (!validationStatus.email) &&
                                <div className='text-light bg-danger text-center rounded-3'>Invalid Email</div>
                            }
                        </div>
                        <label for="txtPassword" class="fs-6 mt-4"><b>Password </b></label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-file-lock2"></i></span>
                            <input type="Password" placeholder="Password" className="form-control w-25"
                                onChange={(event) => setUser((p) => { return { ...p, password: event.target.value } })}
                                required="required" />
                        </div>
                        <div>
                            {
                                (!validationStatus.password) &&
                                <div className='text-light bg-danger text-center rounded-3'>Invalid Password</div>
                            }
                        </div>
                    </div>
                    <div className='card-footer text-center'>
                        <button type='button' onClick={onLogin} className='form-control btn btn-primary w-50 col-sm-12'><b>Login</b></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent

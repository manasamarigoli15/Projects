import axios from "axios";
import { baseUrl } from "../constants/http-constants";


const login = function(email,password){
    let response = axios.post(baseUrl + "/api/login",{email,password});
    return response;
}

const getToken = () => sessionStorage.getItem("Token");

const logout = () => sessionStorage.removeItem("Token");

const isLoggedIn = () => {
    if(sessionStorage.getItem("Token"))
        return true;
    else
        return false;
}

export {login, getToken, logout, isLoggedIn};

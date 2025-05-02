import axios from "axios";
import { baseHTTPUrl } from "../constants/apppaths";

const login = function(email,password){
    let response = axios.post(baseHTTPUrl + "/api/login",{email,password});
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




export {login, getToken, logout,isLoggedIn};
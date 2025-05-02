import { baseHTTPUrl } from "../constants/apppaths";
import axios from "axios";

export const getAdmin = () =>
{
    return axios.get(`${baseHTTPUrl}/api/profile`,{headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
}
export const updateProfile = (admins) => {
    return axios.put(`${baseHTTPUrl}/api/profile`, admins, {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
}

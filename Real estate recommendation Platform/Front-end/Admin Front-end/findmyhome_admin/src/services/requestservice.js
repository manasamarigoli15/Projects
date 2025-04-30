import axios from "axios";
import { baseUrl } from "../constants/http-constants";
export const getRequest = () => {
    return axios.get(`${baseUrl}/api/adminrequest`);
}
export const getRequestById = (id) => {
    return axios.get(`${baseUrl}/api/userrequest/${id}`);
}
export const deleteRequest=(id)=>{
    return axios.delete(`${baseUrl}/api/adminrequest/${id}`);
}
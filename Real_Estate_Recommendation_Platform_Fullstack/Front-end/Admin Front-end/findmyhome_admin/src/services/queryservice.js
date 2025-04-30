import axios from "axios";
import { baseUrl } from "../constants/http-constants";

export const getQuery = () => {
    return axios.get(`${baseUrl}/api/adminquery`);
}

export const getQueryById = (id) => {
    return axios.get(`${baseUrl}/api/adminquery/${id}`);
}
export const deleteQuery=(id)=>{
    return axios.delete(`${baseUrl}/api/adminquery/${id}`);
}

export const updateQuery = (query) => {
    return axios.put(`${baseUrl}/api/adminquery`, query);
}
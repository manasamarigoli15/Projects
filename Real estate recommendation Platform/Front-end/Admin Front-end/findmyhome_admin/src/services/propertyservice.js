import { baseUrl } from "../constants/http-constants";
import axios from 'axios';

export const addNewProperty = (property) => {
    return axios.post(`${baseUrl}/api/property`,property);
}
export const getProperty = () => {
    return axios.get(`${baseUrl}/api/property`);
}
export const getPropertybyId = (id) => {
    return axios.get(`${baseUrl}/api/property/${id}`);
}
export const updateProperty = (property) => {
    return axios
            .put(`${baseUrl}/api/property`,property);
}

export const deletePropertyById=(id)=> {
    return axios.delete(`${baseUrl}/api/property/${id}`);
}
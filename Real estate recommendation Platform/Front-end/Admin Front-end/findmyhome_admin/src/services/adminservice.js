import { baseUrl } from "../constants/http-constants";
import axios from 'axios';

export const getAdmin = () =>
{
    return axios.get(`${baseUrl}/api/admin`, {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
}

export const getAdminbyId = (id) => {
    return axios.get(`${baseUrl}/api/admin/${id}`);
}

export const updateAdmin = (admin) => {
    return axios
            .put(`${baseUrl}/api/admin`,admin, {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
}
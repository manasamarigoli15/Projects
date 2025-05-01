import { baseAdminUrl } from "../constants/http-constants";
import axios from 'axios';

export const getAdmin = () =>
{
    return axios.get(`${baseAdminUrl}/api/admin`, {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
}

export const getAdminbyId = (id) => {
    return axios.get(`${baseAdminUrl}/api/admin/${id}`);
}

export const updateAdmin = (admin) => {
    return axios.put(`${baseAdminUrl}/api/admin`,admin, {headers:{'Authorization':`Bearer ${sessionStorage.getItem('Token')}`}});
}
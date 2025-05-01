import axios from "axios"
import { baseAdminUrl, baseUserUrl } from "../constants/http-constants"


export const getUsers = () => {
    return axios.get(`${baseUserUrl}/api/signup`);
}

export const getAllUsers = () => {
    return axios.get(`${baseAdminUrl}/api/admin/getAllUsers/{getUsers}`);
}

export const DeleteUserById = (id) => {
    return axios.delete(`${baseAdminUrl}/api/admin/${id}`)
}


import axios from "axios"
import { baseAdminUrl, baseBookUrl } from "../constants/http-constants"

export const AddNewBook = (book) => {
    return axios.post(`${baseAdminUrl}/api/book`, book);
}

export const GetAllBooks = () => {
    return axios.get(`${baseBookUrl}/api/book`);
}

export const GetRentedBooks = () => {
    return axios.get(`${baseAdminUrl}/api/book`);
}

export const GetTotalRevenuePerMonth = () => {
    return axios.get(`${baseAdminUrl}/api/book/rentals/summary`)
}

export const GetBookById = (id) => {
    return axios.get(`${baseBookUrl}/api/book/${id}`);
}

export const UpdateBook = (book) => {
    return axios.put(`${baseAdminUrl}/api/book`, book);
}

export const GetSearchFilter = (filter) => {
    return axios.post(`${baseBookUrl}/api/book`, filter);
}

export const DeleteBookById  = (id) => {
    return axios.delete(`${baseAdminUrl}/api/book/${id}`);
}


import { baseUrlUser } from "../constants/http-constants";
import axios from "axios";


export const getUsers = () => {
    return axios.get(`${baseUrlUser}/api/signup`);
}
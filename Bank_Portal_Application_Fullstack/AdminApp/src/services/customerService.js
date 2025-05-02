import axios from 'axios';
import { getUrl } from './urlService';
import { baseHTTPUrl, baseUrlCustomers} from '../constants/apppaths';

export const getCustomerDetails = () => {
    return axios.get(`${getUrl("customers")}/api/customer`);
}

export const getCustomerDetailsById = (id) => {
    return axios.get(`${getUrl("customers")}/api/customer/${id}`);
}

export const updateCustomerDetails = (customer) => {
    return axios
            .put(`${getUrl("customers")}/api/customer`,customer);
}
export const deleteCustomer=(id)=>{
    
    return axios
            .delete(`${getUrl("customers")}/api/customer/${id}`,id);
}
export const updateCustomerStatus = (id) => {
    return axios
            .put(`${getUrl("customers")}/api/customer/${id}`,id);
           
}

export const depositAmount = (depositAmount) => {
    return axios
            .post(`${getUrl("customers")}/api/deposit`,depositAmount);
           
}

export const RejectionReason = (reason) => {
    return axios
            .post(`${getUrl("customers")}/api/rejectReason`,reason);
           
}
export const getfacilities=() => {
    return axios.get(`${getUrl("customers")}/api/facility`);
}

export const updatefacilityStatus = (data) => {
    return axios
            .put(`${getUrl("customers")}/api/facility`,data);
}

export const getLoanRequest=() => {
    return axios.get(`${getUrl("customers")}/api/loanApproval`);
}
// export const getLoanCustomerDetails=(accNo) => {
//     return axios.get(`${getUrl("customers")}/api/loanApproval/${accNo}`);
// }
export const getLoanCustomerDetailsbyId=(id) => {
    return axios.get(`${getUrl("customers")}/api/loanApproval/${id}`);
}
export const updateLoanStatus = (loan) => {
    return axios
            .put(`${getUrl("customers")}/api/loanApproval`,loan);
}
export const deleteLoanRequest=(id)=>{
    
    return axios
            .delete(`${getUrl("customers")}/api/loanApproval/${id}`,id);
}
export const updateStatus = (id) => {
    return axios
            .put(`${getUrl("customers")}/api/facility/${id}`,id);
           
}





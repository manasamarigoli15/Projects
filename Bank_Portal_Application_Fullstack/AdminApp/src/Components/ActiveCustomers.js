import { Link } from "react-router-dom";
import { useEffect, useState,useHistory } from "react";
import { getCustomerDetails,updateCustomerStatus } from "../services/customerService";
import '../CSS/table.css';
function ActiveCustomers(props)

{
 // let nav = useHistory();

  
  return(  <tr>
    <td className="col-1 text-center align-middle">
      
     <h6 className="mb-0 text-sm">{props.item.id}</h6>
        
    </td>
    <td className="col-2 text-center align-middle">
      
     <p className="mb-0 text-sm">{props.item.accountNumber}</p>
        
    </td>
    <td className="align-middle text-center text-sm col-3">
    <p className="text-xs font-weight-bold mb-0">{props.item.firstName}{props.item.lastName}</p>
    </td>
    <td className="align-middle text-center text-sm col-3">
    <span className="badge badge-sm bg-success bg-gradient">Active</span>
    </td>
    <td className="align-middle text-center text-sm col-3">
     <Link to={"/pendingCustProfile/"+ props.item.id } className="btn btn-warning mt-2 rounded text-center"><strong><i class="bi bi-eye"></i><prev> View</prev></strong></Link>
    </td></tr>
  );

}
export default ActiveCustomers;
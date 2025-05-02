import { useEffect, useState } from "react";
import { getCustomerDetailsById,updatefacilityStatus } from "../services/customerService";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
function CardRequestComponent(props)
{
    let [customer,setcustomer] = useState([]);
    useEffect(()=>{
        getCustomerDetailsById(props.item.customer)
        .then(d => setcustomer(d.data))
        .catch((error) => console.error(error));

    },{});
    let nav = useHistory();
    function onApprove()
    {
        updatefacilityStatus(props.item)
                     .then((response) => {
                         console.debug(response.data);
                         Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Approved Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                         nav.push("/blockcard");
                     })
                    
                     .catch((error) => {
                         console.error(error);
                     });       
     }
   
    return(
        <li className="list-group-item  mt-2 opacity-80" style={{"backgroundColor":"#F0E9D2"}}>
            <div className="row">
                                <div className="col-md-6 col-sm-12 col-lg-6"><prev>AccountNumber: {customer.accountNumber}<br></br>
                                Name: {customer.firstName}{customer.lastName}</prev><br></br>
                                {
                                    props.item.type==1 &&<prev>Request :<b> Debit Card </b></prev>
                                }
                                {
                                    props.item.type==2 && <prev>Request :<b> Credit Card </b></prev>
                                }
                                {
                                    props.item.type==3 && <prev>Request :<b> Cheque Book </b></prev>
                                }
                                </div>
                                { props.item.status==1 &&
                                <div className="col-md-6 col-sm-12 col-lg-6 float-end float-sm-end"><button className="btn float-md-end mt-5 text-light float-end" type="button" onClick={()=>onApprove()} style={{"background-color":"#181D31"}}>Approve</button></div>
}

                               
              </div>             
                       
        </li>
    );
}
export default CardRequestComponent;
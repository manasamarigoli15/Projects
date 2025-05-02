import { useEffect, useState } from "react";
import { getCustomerDetailsById,updatefacilityStatus,updateStatus } from "../services/customerService";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
function CardBlockComponent(props)
{
    let [Customer,setcustomer] = useState([]);
    useEffect(()=>{
        getCustomerDetailsById(props.item.customer)
       .then(d => setcustomer(d.data))
      .catch((error) => console.error(error));

 },{});
    
    
    function onBlock()
    {
       if (props.item.status==2)
       {
        updatefacilityStatus(props.item)
                     .then((response) => {
                         console.debug(response.data);
                         Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Blocked Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                          window.location.reload();
                     })
                    
                     .catch((error) => {
                         console.error(error);
                     }); 
                    }
                    else
                    {
                        updateStatus(props.item.id)
                        .then((response) => {
                            console.debug(response.data);
                            Swal.fire({
                               position: 'center',
                               icon: 'success',
                               title: 'UnBlocked Successfully',
                               showConfirmButton: false,
                               timer: 1500
                             })
                             window.location.reload();
                        })
                       
                        .catch((error) => {
                            console.error(error);
                        });  
                        
                    }      
     }
   
    return(
        <li className="list-group-item  mt-2" style={{"backgroundColor":"#F7F5EB"}}>
            <div className="row">
                                <div className="col-md-6 col-sm-12 col-lg-6"><prev>AccountNumber: {Customer.accountNumber}<br></br>
                                Name: {Customer.firstName}{Customer.lastName}</prev><br></br>
                                {
                                    props.item.type==1 &&<prev>Request :<b> Debit Card </b></prev>
                                }
                                {
                                    props.item.type==2 && <prev>Request :<b> Credit Card </b></prev>
                                }
                                
                                </div>
{ props.item.status==2 &&
                                <div className="col-md-6 col-sm-12 col-lg-6 float-end float-sm-end"><button className="btn  float-md-end mt-5 text-light float-end" type="button" onClick={()=>onBlock()} style={{"background-color":"#E97777"}}>Block</button></div>
}
{ props.item.status==3 &&
                                <div className="col-md-6 col-sm-12 col-lg-6 float-end float-sm-end"><button className="btn  float-md-end mt-5 text-light float-end" type="button" onClick={()=>onBlock()} style={{"background-color":"#579BB1"}}>Unlock</button></div>
}
                               
              </div>             
                       
        </li>
    );
}
export default CardBlockComponent;
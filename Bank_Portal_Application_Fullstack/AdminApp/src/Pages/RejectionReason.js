import SideNavBar from "../layouts/side-nav-bar";
import AppNavBar from "../layouts/app-nav-bar";
import { useEffect, useState } from "react";
import { Link, useHistory,useParams } from "react-router-dom";
import { getCustomerDetailsById,deleteCustomer,RejectionReason} from "../services/customerService";
import React from 'react';
import Swal from "sweetalert2";
function Reject()
{
    let [customer,setcustomer] = useState({});
   
    const params = useParams();

    useEffect(()=>{
        getCustomerDetailsById(params.id)
        .then(d => setcustomer(d.data))
        .catch((error) => console.error(error));

    },{});
    let [reason,setreason]=useState({RegistrationId:"",FeedbackType:1,FeedBack:""});
    function onDelete(id)
    {
      deleteCustomer(id)
                    .then((response) => {
                       console.debug(response.data);
                       Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, Reject it!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire(
                            'Rejected!',
                            'Rejection is Successfully Done.',
                            'success'
                          )
                        }
                      })
                      
                        
                    })
                    .catch((error) => {
                        console.error(error);
                    });       
     }
     function Reject()
     {
      reason.RegistrationId=customer.registrationId;
        RejectionReason(reason).then((response) => {
         console.debug(response.data);
         
         
     })
     .catch((error) => {
         console.error(error);
     });   
     }
    return(
      <div>
      <AppNavBar></AppNavBar>
      <div className="row">
       <div className="col-2"><SideNavBar></SideNavBar></div>
       <div className="col-10 float-sm-end">
        <section style={{"background-color": "#B5D5C5"}} className=" rounded w-90 d-flex justify-content-center h-75 m-md-5  m-sm-4 mt-3 ms-3" >
  <div className="container my-5 py-5 text-dark ">
    <div className="row d-flex justify-content-center">
      <div className=" col-sm-12 col-md-10 col-lg-8 col-xl-6">
        <div className="card d-flex justify-content-center mb-5">
          <div className="card-body p-4">
            <div className="d-flex flex-start w-100">
              <div className="w-100">
                <h3>Reg_ID:  {customer.registrationId}</h3>
                <h6 className="mt-1">Add a Reason</h6>
                <div className="form-outline">
                
                  <textarea className="form-control" id="textAreaExample" rows="4" onChange={(event) => setreason((p) => { return { ...p, FeedBack:event.target.value } })} ></textarea>
                  
                </div>
                <div className="d-flex justify-content-between mt-3 float-end">
                  
                  <button type="button" className="btn btn-danger" onClick={()=>{ setreason((p)=>{return{...p,RegistrationId:customer.registrationId}});Reject();onDelete(customer.id);}}>
                    Reject <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</div>
</div>
    )

}
export default Reject;
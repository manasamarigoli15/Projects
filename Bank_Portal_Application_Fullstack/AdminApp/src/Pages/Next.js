import { useEffect, useState } from "react";
import { Link, useHistory,useParams } from "react-router-dom";
import { getCustomerDetailsById,updateCustomerDetails,deleteCustomer,updateCustomerStatus } from "../services/customerService";
import React from 'react';
import SideNavBar from "../layouts/side-nav-bar";
import AppNavBar from "../layouts/app-nav-bar";
import '../CSS/view.css';
import Swal from "sweetalert2";

function Next()
{
    let [customer,setcustomer] = useState({});
    
    const params = useParams();

    useEffect(()=>{
        getCustomerDetailsById(params.id)
        .then(d => setcustomer(d.data))
        .catch((error) => console.error(error));

    },{});
    let nav = useHistory();
   
    function onUpdate()
    {
       updateCustomerDetails(customer)
                    .then((response) => {
                        console.debug(response.data);
                        Swal.fire({
                          position: 'center',
                          icon: 'success',
                          title: 'Approved Successfully',
                          showConfirmButton: false,
                          timer: 1500
                        })
                        nav.push("/customerAccount");
                    })
                    .catch((error) => {
                        console.error(error);
                    });       
    }
    function ActivateOrDeactivate(id)
    {
       if(customer.status==3)
       {
       updateCustomerStatus(id)
                    .then((response) => {
                        console.debug(response.data);
                        Swal.fire({
                          position: 'center',
                          icon: 'success',
                          title: 'Activated Successfully',
                          showConfirmButton: false,
                          timer: 1500
                        })
                        nav.push("/customerAccount");
                    })
                    .catch((error) => {
                        console.error(error);
                    });  
                  }
                  else if(customer.status==2)
                  {
                    updateCustomerStatus(id)
                    .then((response) => {
                        console.debug(response.data);
                        Swal.fire({
                          position: 'center',
                          icon: 'success',
                          title: 'Deactivated Successfully',
                          showConfirmButton: false,
                          timer: 1500
                        })
                        nav.push("/deactivatedAccount");
                    })
                    .catch((error) => {
                        console.error(error);
                    });

                  }     
    }

return(
<div>
  <AppNavBar></AppNavBar>
  <div className="row">
    <div className=" col-2 col-md-2  col-lg-2 " ><SideNavBar></SideNavBar></div> 
      
    <div className="col-10 col-md-10 col-lg-10 ">
        
      <section style={{ "backgroundColor": '#fff' }} >
        <div className=" container py-0  py-md-5 ">
          <div className="row">
            <div className="col-lg-3">
            <div className="card mb-4 Card shadow">
              <div className="card-body text-center">
                <img src={customer.profileImg} alt="avatar"
                    className="rounded-circle img-fluid" style={{"width": "150px"}}></img>
              </div>
            </div>
            </div>

            <div className="col-lg-8">
              <div className="card mb-4 shadow">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Aadhar Number</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted  mb-0">{customer.aadharNumber}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                  <div className="col-sm-3">
                      <p className="mb-0">Aadhar Proof</p>
                  </div>
                  <div className="col-sm-9">
                      <img className="text-muted" src={customer.adharImg} height="100"></img>
                  </div>
                  </div>
                  <hr />
                  <div className="row">
                  <div className="col-sm-3">
                      <p className="mb-0">Pan Number</p>
                  </div>
                  <div className="col-sm-9">
                      <p className="text-muted mb-0">{customer.panNumber}</p>
                  </div>
                  </div>
                  <hr />
                  <div className="row">
                  <div className="col-sm-3">
                      <p className="mb-0">Pan Proof</p>
                  </div>
                  <div className="col-sm-9">
                      <img className="text-muted" src={customer.panImg} height="100"></img>
                  </div>
                  </div>
                </div>
              </div>

            
            </div>
        </div>
      <div>     
</div>
{
        customer.accountNumber==null && customer.status==1 &&
      <div className="row mb-5 d-flex justify-content-around">
        <div className="col-4 col-md-5  mb-2 mb-md-0 ms-md-0"><Link to={"/pendingCustProfile/"+ customer.id } className="btn btn-outline-success  rounded text-center float-md-end  mb-2 mb-md-0 ms-md-0 "><prev><i className="bi bi-arrow-left"></i>Prev</prev></Link>
    </div>
     <div className="col-4 col-md-2  mb-2 mb-md-0 ms-md-0"> <button type="button" className="btn btn-outline-success ms-md-2 btn-block col-md-12   mb-2 mb-md-0 " onClick={()=>onUpdate()}>Approve</button></div>   
      <div className="col-4 col-md-5   ms-md-0"><Link type="button" className="btn btn-outline-danger ms-md-4  mb-2 mb-md-0 "  to={"/reject/"+ customer.id } >Reject<i className="bi bi-arrow-right"></i></Link></div>  </div>
    }
    {
  customer.accountNumber!=null && customer.status==2 &&
  <div className="row mb-5 d-flex justify-content-around">
    <div className="col-4 col-md-5  mb-2 mb-md-0 ms-md-0"><Link to={"/pendingCustProfile/"+ customer.id } className="btn btn-outline-success  rounded text-center float-md-end  mb-2 mb-md-0 ms-md-0"><prev><i className="bi bi-arrow-left"></i>Prev</prev></Link>
    </div>
   <div className="col-4 col-md-2  mb-2 mb-md-0 ms-md-0"> <button type="button" className="btn btn-outline-warning ms-md-2 btn-block ms-md-2 btn-block col-md-12   mb-2 mb-md-0" onClick={()=>ActivateOrDeactivate(customer.id)}>Deactivate</button></div>
  <div className="col-4 col-md-5   ms-md-0"><Link to={"/deposit/"+ customer.id } type="button" className="btn btn-outline-primary  ms-md-4  mb-2 mb-md-0 ">Deposit Amount</Link></div>
  </div>
}
{
  customer.accountNumber!=null && customer.status==3 &&
  <div className="row mb-5">
    <div className="col-6 col-md-6"><Link to={"/pendingCustProfile/"+ customer.id } className="btn btn-outline-success  rounded text-center float-end"><prev><i className="bi bi-arrow-left"></i>Prev</prev></Link>
    </div>
    <div className="col-6 col-md-6 "> <button type="button" className="btn btn-outline-success float-start " onClick={()=>ActivateOrDeactivate(customer.id)}>Activate</button></div>
  </div>
}

      </div>
      
    </section>
    </div>
    </div>
    </div>

);
}
export default Next;
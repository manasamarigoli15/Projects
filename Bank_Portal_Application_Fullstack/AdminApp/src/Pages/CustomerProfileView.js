import { useEffect, useState } from "react";
import { Link, useHistory,useParams } from "react-router-dom";
import { getCustomerDetailsById,updateCustomerDetails,deleteCustomer,updateCustomerStatus } from "../services/customerService";
import React from 'react';
import SideNavBar from "../layouts/side-nav-bar";
import AppNavBar from "../layouts/app-nav-bar";
import '../CSS/view.css';
import Swal from "sweetalert2";

function CustomerProfileView()
{
    let [customer,setcustomer] = useState({});
    
    const params = useParams();

    useEffect(()=>{
        getCustomerDetailsById(params.id)
        .then(d => setcustomer(d.data))
        .catch((error) => console.error(error));

    },{});

    return(
      <div>
        <AppNavBar></AppNavBar>
      <div className="row">
       <div className=" col-2 col-md-2  col-lg-2 " ><SideNavBar></SideNavBar></div> 
      
      <div className="col-10 col-md-10 col-lg-10 ">
        
<section style={{ "backgroundColor": '#fff' }}>
      <div className=" container py-0  py-md-5">
        <div className="row">
        <div className="col-lg-3 " >
        <div className="card mb-4 Card shadow">
          <div className="card-body text-center">
                
          <img src={customer.profileImg} alt="avatar"
              className="rounded-circle img-fluid" style={{"width": "150px"}}></img>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
        <div className="card mb-4 shadow ">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted  mb-0">{customer.firstName}{customer.lastName}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
              <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                <p className="text-muted mb-0">{customer.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
              <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                <p className="text-muted mb-0">{customer.phoneNumber}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
              <div className="col-sm-3">
                    <p className="mb-0">Date Of Birth</p>
                  </div>
                  <div className="col-sm-9">
                <p className="text-muted mb-0">{customer.dateOfBirth}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
              <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                <p className="text-muted mb-0">{customer.address}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
              <div className="col-sm-3">
                    <p className="mb-0">AccountType</p>
                  </div>
                  <div className="col-sm-9">
                    { customer.accountType==1 &&
                    <p className="text-muted mb-0">Savings Account</p>}
                    { customer.accountType==2 &&
                    <p className="text-muted mb-0">Salary Account</p>}
                    { customer.accountType==3 &&
                    <p className="text-muted mb-0">Loan Account</p>}
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
        <div>
        {customer.accountNumber==null && customer.status==1 &&
      <div className="row mb-5">
      <div className="col-7"><Link type="button" className="btn btn-outline-danger float-end"  to={"/next/"+ customer.id } >Next<i className="bi bi-arrow-right"></i></Link></div>  </div>
}
{
  customer.accountNumber!=null && customer.status==2 &&
  <div className="row mb-5">
      <div className="col-7"><Link type="button" className="btn btn-outline-danger float-end"  to={"/next/"+ customer.id } >Next<i className="bi bi-arrow-right"></i></Link></div>  </div>
}
{
  customer.accountNumber!=null && customer.status==3 &&
  <div className="row mb-5">
      <div className="col-7"><Link type="button" className="btn btn-outline-danger float-end shadow"  to={"/next/"+ customer.id } >Next<i className="bi bi-arrow-right"></i></Link></div>  </div>
}
        </div>
      </div>
      
    </section>
    </div>
    </div>
    </div>

    );
}
export default CustomerProfileView;
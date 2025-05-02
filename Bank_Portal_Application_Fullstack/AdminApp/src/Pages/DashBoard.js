import AppNavBar from "../layouts/app-nav-bar";
import { Link } from 'react-router-dom';
import card from '../Image/Card2.jpg';
import SideNavBar from "../layouts/side-nav-bar";
import '../CSS/dashboard.css';
import { getCustomerDetails, getfacilities, getLoanRequest } from "../services/customerService";
import { useState,useEffect } from "react";

function DashBoard()
{
    let [customers,setCustomers] = useState([]);
    let [loans, setLoans] = useState([]);
    let [cards, setCards] = useState([]);
    let pending=0;
    let active=0;
    let inactive=0;
    let total=0;
    let totalLoan = 0;
    let cardRequest = 0;
    let loanRequest = 0;
    useEffect(()=>{
        getCustomerDetails().then(d => setCustomers(d.data))
                  .catch((error) => console.error(error));          
    },[]);
    customers.map(d=>{if(d.status==1) {pending=pending+1  
        total=total+1} 
        if(d.status==2) 
        {active=active+1
            total=total+1}
    if(d.status==3)
   { inactive=inactive+1
    total=total+1};
})

useEffect(()=>{
    getLoanRequest().then(d=> setLoans(d.data)).catch((error) => console.error(error));},[]);
    loans.map(d=>{if(d.loanStatus==1) {loanRequest=loanRequest+1}
         if (d.loanStatus == 2) {totalLoan=totalLoan+1}
    })

useEffect(()=>{getfacilities().then(d=>setCards(d.data))
                .catch((error) => console.error(error));          
},[]);

cards.map(d=>{if(d.status == 1){cardRequest=cardRequest+1}})


    return(
    <div className="body">
        
        <AppNavBar></AppNavBar>
            <div className="row">
               <div className="col-2 col-md-3"> 
                    <SideNavBar></SideNavBar>
             </div> 

                <div className="col-10 col-md-8 ps-5 ps-md-4 ps-lg-0 mx-md-2 mx-lg-4 mt-3">
                        <div className="col-11 col-md-12 col-lg-12">
                            <div className="card card1 my-3 mx-0 mx-md-1" style={{"background":"linear-gradient(#d7e4e3,#397c73)"}}>
                                <div className="row">
                                    <div className="col-6 col-sm-9 pt-4 ps-5 text-light">
                                        <marquee behavior="alternate" className="d-none d-sm-block"><h4><i>We’re going the extra mile!</i></h4></marquee>
                                    </div>
                                    <div className="col-6 col-sm-3">
                                        <div className="card-body rounded shadow d-flex justify-content-center">
                                            <div className="row ">
                                                <div className="col-12 mt-2">
                                                    <h5>Total customers</h5>
                                                </div>
                                                <div className="col-12 text-center">
                                                    <div className="fs-1 text-light">{total}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div className="row">
                        <div className="col-11 col-md-6 col-lg-4">
                            <div className="card card2 my-3 mx-0 mx-md-1"  style={{"background":"linear-gradient(rgb(204, 240, 233),#feefd0)"}}>
                                <div className="card-body rounded shadow text-center">
                                
                                   <Link className="nav-link" to="/customerAccount"><i class="fs-2 bi-person-check text-success"></i><h5>Active Accounts</h5><div className="fs-1 text-secondary">{active}</div> </Link>
                                </div>
                            </div>
                        </div>


                        <div className="col-11 col-md-6 col-lg-4">
                            <div className="card card4 my-3 mx-0 mx-md-1" style={{"background":"linear-gradient(#feefd0,rgb(204, 240, 233))"}}>
                                <div className="card-body rounded shadow text-center">
                                <Link className="nav-link" to="/deactivatedAccount"> <i class="fs-2 bi-person-slash text-danger"></i>
                                    <h5>Deactivated Accounts</h5><div className="fs-1 text-secondary">{inactive}</div></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-11 col-md-6 col-lg-4">
                            <div className="card card2 my-3 mx-0 mx-md-1"  style={{"background":"linear-gradient(rgb(204, 240, 233),#feefd0)"}}>
                                <div className="card-body rounded shadow text-center">
                                
                                   <Link className="nav-link" to="/customerAccount"><i class="fs-2 bi-person-check text-success"></i><h5>Active Loans</h5><div className="fs-1 text-secondary">{totalLoan}</div> </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-11 col-md-6 col-lg-4">
                            <div className="card card4 my-3 mx-0 mx-md-1" style={{"background":"linear-gradient(rgb(204, 240, 233),#feefd0)"}}>
                                <div className="card-body rounded shadow text-center">
                                <Link className="nav-link" to="/deactivatedAccount"> <i class="fs-2 bi-person-add text-warning"></i>
                                    <h5>Pending Loan Requests</h5><div className="fs-1 text-secondary">{loanRequest}</div></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-11 col-md-6 col-lg-4">
                            <div className="card card3 my-3 mx-0 mx-md-1" style={{"background":"linear-gradient(#feefd0,rgb(204, 240, 233))"}}>
                                <div className="card-body rounded shadow text-center">
                                <Link className="nav-link" to="/pending">
                                <i class="fs-2 bi-person-add text-warning"></i>
                                    <h5>Pending Customer Requests</h5>
                                    <div className="fs-1 text-secondary">{pending}</div></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-11 col-md-6 col-lg-4">
                            <div className="card card4 my-3 mx-0 mx-md-1" style={{"background":"linear-gradient(rgb(204, 240, 233),#feefd0)"}}>
                                <div className="card-body rounded shadow text-center">
                                <Link className="nav-link" to="/deactivatedAccount"> <i class="fs-2 bi-person-add text-warning"></i>
                                    <h5>Pending Card Requests</h5><div className="fs-1 text-secondary">{cardRequest}</div></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default DashBoard;
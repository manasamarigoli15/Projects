import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { getLoanCustomerDetailsbyId, updateLoanStatus } from "../services/customerService";
import React from 'react';
import SideNavBar from "../layouts/side-nav-bar";
import AppNavBar from "../layouts/app-nav-bar";
import Swal from "sweetalert2";
function LoanApprovalView(props) {
    // let [customer, setcustomer] = useState({});

    let [loan, setloan] = useState({});
    let nav = useHistory();
    const params = useParams();

    // useEffect(() => {
    //     getLoanCustomerDetails(params.acc)
    //         .then(d => { setcustomer(d.data); })
    //         .catch((error) => console.error(error));

    // }, {});

    useEffect(() => {
        getLoanCustomerDetailsbyId(params.id).then(d => { setloan(d.data) })
            .catch((error) => console.error(error));
    }, []);
    function onUpdate() {
        updateLoanStatus(loan)
            .then((response) => {
                console.debug(response.data);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Approved Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                nav.push("/loan");
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div>
            <AppNavBar></AppNavBar>
            <div className="row">
                <div className=" col-2 col-md-2  col-lg-2 " ><SideNavBar></SideNavBar></div>

                <div className="col-10 col-md-10 col-lg-10 ">
                <div className="row ms-5 text-center mt-4"><div className="col-11 col-md-10  col-lg-10 float-sm-end"><b className=" text-muted fs-4 text-center">LOAN APPROVAL</b></div></div>
       
                    <div className="container  py-0  py-md-5 ">
                        <div className="row ">
                           
                            <div className="col-lg-3 " >
                               {/*  <div className="card mb-4 Card">
                                    <div className="card-body text-center">

                                        <img src="" alt="avatar"
                                            className="rounded-circle img-fluid" style={{ "width": "150px" }}></img>
                                    </div>
                                </div>*/
}
                            </div> 
                            <div className="col-lg-6 ">
                                <div className="card mb-4 mt-3 shadow">
                                    <div className="card-body ">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="mb-0">AccountNumber: </p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted  mb-0">{loan.accountNo}</p>
                                            </div>
                                            <hr />
                                            <div className="col-sm-6">
                                                <p className="mb-0">Amount Requested: </p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted  mb-0"><i className="bi bi-currency-rupee"></i>{loan.netIncome}</p>
                                            </div>
                                            <hr />
                                            <div className="col-sm-6">
                                                <p className="mb-0">Net Income:</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted  mb-0"><i className="bi bi-currency-rupee"></i>{loan.loanAmount}</p>
                                            </div>
                                            <hr />
                                            <div className="col-sm-6">
                                                <p className="mb-0">Type of Loan Required:</p>
                                            </div>
                                            {
                                                loan.loanType == 1 && <div className="col-sm-6">
                                                    <p className="text-muted  mb-0">Personal Loan</p>
                                                </div>
                                            }
                                            {
                                                loan.loanType == 2 && <div className="col-sm-6">
                                                    <p className="text-muted  mb-0">Home Loan</p>
                                                </div>
                                            }
                                            {
                                                loan.loanType == 3 && <div className="col-sm-6">
                                                    <p className="text-muted  mb-0">Vehicle Loan</p>
                                                </div>
                                            }
                                            {
                                                loan.loanType == 4 && <div className="col-sm-6">
                                                    <p className="text-muted  mb-0">Education Loan</p>
                                                </div>
                                            }

                                        </div>


                                    </div>


                                </div>
                                <div className="row  d-flex justify-content-center">
                                    
                                       
                                        <div className="col-2">
                                            <button className="btn btn-outline-primary float-end" onClick={() => onUpdate()}>Approve</button></div>
                                            <div className="col-2">
                                            <Link type="button" className="btn btn-outline-danger  "  to={"/loanreject/"+ loan.customer } >Reject</Link>
                                        </div>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);

}
export default LoanApprovalView
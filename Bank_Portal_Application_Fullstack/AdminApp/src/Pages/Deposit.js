import SideNavBar from "../layouts/side-nav-bar";
import AppNavBar from "../layouts/app-nav-bar";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { getCustomerDetailsById, updateCustomerDetails, deleteCustomer, updateCustomerStatus, depositAmount } from "../services/customerService";
import React from 'react';
import Swal from "sweetalert2";
function Deposit() {
    let [customer, setcustomer] = useState({});
    const params = useParams();

    useEffect(() => {
        getCustomerDetailsById(params.id)
            .then(d => setcustomer(d.data))
            .catch((error) => console.error(error));

    }, {});
    let [deposit, setdeposit] = useState({ PayeeAccountNo: customer.accountNumber, PayerAccountNo: "Admin", TransactionAmount: 0 });
    function DepositAmount() {
        depositAmount(deposit).then((response) => {
            console.debug(response.data);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Deposited Successfully',
                showConfirmButton: false,
                timer: 1500
            })

        })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div>
            <AppNavBar></AppNavBar>
            <div className="container">

                <div className="row">
                    <div className="col-md-2 col-sm-2 col-lg-2"><SideNavBar></SideNavBar></div>
                    <div className="col-md-10 col-sm-10 col-lg-10">
                        <div className="card mt-5 bg-dark bg-gradient shadow">
                            <div className="card-title text-light"><h5 className="ms-3">{customer.firstName}{customer.lastName}</h5></div>
                            <div className="card-body">
                                <div class="input-group mb-3">
                                    <input type="text" className="form-control" placeholder={customer.accountNumber} ></input>
                                    <input type="number" className="form-control" placeholder="Enter Amount" onChange={(event) => setdeposit((p) => { return { ...p, TransactionAmount: Number(event.target.value) } })}  ></input>

                                    <div className="input-group-append">
                                        <button className="btn btn-info float-end" type="button" id="button-addon2" onClick={() => { setdeposit((p) => { return { ...p, PayeeAccountNo: customer.accountNumber } }); DepositAmount() }}>Deposit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Deposit;
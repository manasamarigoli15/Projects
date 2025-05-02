import { Link } from "react-router-dom";
import "../CSS/editprofile.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { getAdmin } from "../services/adminService";
import { updateProfile } from "../services/adminService";
import AppNavBar from "../layouts/app-nav-bar";
import Swal from "sweetalert2";
function EditProfileComponent() {
    let [admin, setAdmin] = useState({});
    useEffect(() => {
        getAdmin()
            .then(d => { setAdmin(d.data); console.debug(d.data); })
            .catch((error) => console.error(error));
    }, {});
    let nav = useHistory();
    function onAdminUpdate() {
        updateProfile(admin)
            .then((response) => {
                console.debug(response.data);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <section className="vh-100 ">
            <AppNavBar></AppNavBar>
            <div className="container d-flex justify-content-center">
                <div className="row d-flex justify-content-center" >
                    <div className="col-6 col-lg-2 col-sm-6 col-md-9 me-3 justify-content-center">
                        <div class="card h-50 mt-5 justify-content-center">
                            <div className="card-body shadow-lg d-flex justify-content-center">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-12 d-flex justify-content-center">
                                        {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" style={{ "height": "90px" }} /> */}
                                        <img src={`https://i.pravatar.cc/300?u=${admin.name}`}
                            alt="img" style={{ "height": "90px" }}
                            className="d-inline-block align-text-top  me-2" />
                                    </div>
                                    <div className="col-12">
                                        <h4 className="text-dark text-center mt-3">{admin.name}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card h-90 shadow-lg mt-5 w-75 d-flex justify-content-center col-sm-12 col-lg-9">
                        <div className="row">
                            <div className="col-12 mt-3 ">
                                <h5 className="mb-2 text-primary">Personal Details</h5>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-3">
                                <div className="form-group">
                                    <label ><i className="bi bi-person"></i> <strong>Full Name</strong></label>
                                    <input type="text" className="form-control mt-1" id="fullName" placeholder="Enter full name" value={admin.name}
                                        onChange={(e) => { setAdmin({ ...admin, name: e.target.value }) }}
                                        required />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-3">
                                <div className="form-group">
                                    <label for="eMail" ><i className="bi bi-envelope mx-2"></i><strong>Email</strong></label>
                                    <input type="email" className="form-control mt-1" id="eMail" placeholder="Enter email ID" value={admin.email}
                                        onChange={(e) => { setAdmin({ ...admin, email: e.target.value }) }}
                                        required />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-3">
                                <div className="form-group mt-3">
                                    <label for="phone"><i className="bi bi-phone"></i> <strong>Phone</strong></label>
                                    <input type="text" className="form-control mt-1" id="phone" placeholder="Enter phone number" value={admin.phoneNumber}
                                        onChange={(e) => { setAdmin({ ...admin, phoneNumber: e.target.value }) }}
                                        required />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-3">
                                <div className="form-group mt-3">
                                    <label ><i className="bi bi-key"></i><strong className="ms-2">Password</strong></label>
                                    <input type="password" className="form-control mt-1" id="website" placeholder="Enter the ne password" value={admin.password}
                                        onChange={(e) => { setAdmin({ ...admin, password: e.target.value }) }}
                                        required />
                                </div>
                            </div>
                        </div>
                        <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5 my-3 ">
                            <div className="text-right" >
                                <Link to={"/profile"}>  <button type="button" id="submit" name="submit" className="btn btn-secondary float-end">Cancel</button></Link>
                                <button type="button" id="submit" name="submit" className="btn btn-primary float-end me-2" onClick={onAdminUpdate}  >Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default EditProfileComponent;
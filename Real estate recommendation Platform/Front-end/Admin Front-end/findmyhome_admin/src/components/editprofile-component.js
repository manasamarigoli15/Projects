import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "../assets/css/profile.css";
import "../assets/css/sidebar.css";
import profile from '../assets/img/profile.png';
import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import { getAdmin, getAdminbyId, updateAdmin } from "../services/adminservice";

function EditProfileComponent(props) {

    let [admin, setAdmin] = useState({});

    useEffect(() => {
        getAdmin()
            .then(d => { setAdmin(d.data); console.debug(d.data); })
            .catch((error) => console.error(error));

    }, {});

    // let nav = useHistory();
    function onAdminUpdate() {
        updateAdmin(admin)
            .then((response) => {
                console.debug(response.data);
                alert("Updated Successfully !");
                // nav.push("/adminprofile");
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="profile-background">
            <AppNavBar></AppNavBar>
            <AppSideBar></AppSideBar>
            <div className="content">
                <div className="text-center mt-4">
                    <h3>Update Admin Profile</h3>
                </div>
                <div className="card m-auto mt-5 w-50 h-70">
                    <div className="card-header text-center">
                        <span><i className="bi bi-person-circle fs-3"></i></span>
                        <span><h4>ADMIN PROFILE</h4></span>
                    </div>
                    <div className="card-body profile-body">
                        <div className="text-center">
                            <img src={`https://i.pravatar.cc/300?u=${admin.name}`} className="img-fluid rounded-5 justify-center" width="80px" height="80px" ></img>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="mt-3">
                            <label for="txtName">Change Name</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Admin name"
                                value={admin.name}
                                onChange={(e) => { setAdmin({ ...admin, name: e.target.value }) }}
                                required />
                        </div>
                        <div className="mt-3">
                            <label for="" className="mt-3">Change Email</label>
                            <input type="email"
                                className="form-control"
                                placeholder="Enter new email"
                                value={admin.email}
                                onChange={(e) => { setAdmin({ ...admin, email: e.target.value }) }}
                                required />
                        </div>
                        <div className="mt-3">
                            <label for="" className="mt-3">Change Password</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter new Password"
                                onChange={(e) => { setAdmin({ ...admin, password: e.target.value }) }}
                                required />
                        </div>
                        <div className="mt-3">
                            <label for="" className="mt-3">Change Mobile</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter new mobile number"
                                value={admin.phoneNumber}
                                onChange={(e) => { setAdmin({ ...admin, phoneNumber: e.target.value }) }}
                                required />
                        </div>
                        <div className="mt-3 text-center">
                            <button type="button" className="btn btn-primary me-3" onClick={onAdminUpdate}>Save changes</button>
                            <Link to="/adminprofile" className="btn btn-warning">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfileComponent;
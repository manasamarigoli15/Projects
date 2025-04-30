import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/profile.css";
import "../assets/css/sidebar.css";
import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import { getAdmin } from "../services/adminservice";
import ProfileItem from "./profileItem";

function AdminProfileComponent() {

    let [admins, setAdmins] = useState({});

    useEffect(() => {
        getAdmin().then(d => setAdmins(d.data))
            .catch((error) => console.error(error))
    });
    return (
        <div className="card vh-100 profile-background">
            <AppNavBar></AppNavBar>
            <AppSideBar></AppSideBar>
            <div className="row">
                <div className="col-12">
                         
                    <ProfileItem item={admins}></ProfileItem>

                </div>
            </div>
        </div>
    )
}

export default AdminProfileComponent;
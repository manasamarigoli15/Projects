import { useEffect, useState } from "react";
import "../assets/css/profile.css";
import "../assets/css/sidebar.css";
import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import { getAdmin } from "../services/adminservice";
import ProfileItem from "./profileitem";

function AdminProfileComponent() {

    let [admin, setAdmin] = useState({});

    useEffect(() => {
        getAdmin().then(d => setAdmin(d.data))
            .catch((error) => console.error(error))
    });
    return (
        <div className="profile-background">
            <AppNavBar></AppNavBar>
            <AppSideBar></AppSideBar>
            <div className="row">
                <div className="col-12">
                    <ProfileItem item={admin}></ProfileItem>
                </div>
            </div>
        </div>
    )
}

export default AdminProfileComponent;
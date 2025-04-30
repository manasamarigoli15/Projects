import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import "../assets/css/custom.css";
import "../assets/css/content.css";
import "../assets/css/sidebar.css";
import { Link } from "react-router-dom";
import { getProperty } from "../services/propertyservice";
import { useEffect, useState } from "react";
import { getUsers } from "../services/userservice";
import { getRequest } from "../services/requestservice";

function Dashboard() {

    let [property, setProperty] = useState([]);
    let [user, setUsers] = useState([]);
    let [request, setRequest] = useState([]);
    
    useEffect(() => {
        getProperty().then(d => setProperty(d.data))
            .catch((error) => console.error(error))
    }, []);
    useEffect(() => {
        getUsers().then(d => setUsers(d.data))
            .catch((error) => console.error(error))
    }, []);
    useEffect(() => {
        getRequest().then(d => setRequest(d.data))
            .catch((error) => console.error(error))
    }, []);

    return (
        <div>
            <AppNavBar></AppNavBar>
            <AppSideBar></AppSideBar>
            <div>
                <div className='container-fluid'>
                    <div className='content'>
                        <div className='mb-5 mt-4'>
                            <h1>DASHBOARD</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="card cards c1 shadow me-5 mb-3">
                                    <div className='ms-3 card-body'>
                                        <i className="bi bi-house-fill fs-2 me-2 c1icon float-end"></i>
                                        <h4>Users</h4>
                                        <h2>{user.length}</h2>
                                           
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="card cards c2 shadow me-5 mb-3">
                                    <div className='ms-3 card-body'>
                                        <i className="bi bi-house fs-2 me-2 c2icon float-end"></i>
                                        <h4>Property</h4>
                                        <h2> {property.length}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="card cards c3 shadow me-5 mb-3">
                                    <div className='ms-3 card-body'>
                                        <i className="bi bi-house-door fs-2 c3icon float-end"></i>
                                        <Link to="/request"><h4>Requests</h4></Link>
                                        <h2>{request.length}</h2>
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

export default Dashboard;
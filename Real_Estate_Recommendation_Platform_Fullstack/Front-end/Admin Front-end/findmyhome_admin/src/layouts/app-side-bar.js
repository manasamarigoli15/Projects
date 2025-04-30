import { Link } from "react-router-dom";
import "../assets/css/sidebar.css";

function AppSideBar() {
    return (
        <div>
            <div className="sidebar">
                <div>
                    <span><i className="bi bi-grid fs-5"></i></span>
                    <Link to="/dashboard"><span className="d-inline-block ms-2"><b>Dashboard</b></span></Link>
                </div>
                <div>
                    <span><i class="bi bi-house-add fs-5"></i></span>
                    <Link to="/addproperty"><span className="d-inline-block ms-2"><b>Add Property</b></span></Link>
                </div>
                <div>
                    <span><i class="bi bi-view-list fs-5"></i></span>
                    <Link to="/viewproperty"><span className="d-inline-block ms-2"><b>View Property</b></span></Link>
                </div>
                <div>
                    <span><i className="bi bi-folder fs-5"></i></span>
                    <Link to="/featured"> <span className="d-inline-block ms-2"><b>Featured Property</b></span></Link>
                </div>
                <div>
                    <span><i class="bi bi-question-octagon fs-4"></i></span>
                    <Link to="/query"><span className="d-inline-block ms-2"><b>Customer Queries</b></span></Link>
                </div>
                <div>
                    <span><i class="bi bi-person fs-4"></i></span>
                    <Link to="/adminprofile"><span className="d-inline-block ms-2"><b>Admin Profile</b></span></Link>
                </div>
            </div>
        </div>
    )
}

export default AppSideBar;
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
                    <span><i className="bi bi-book fs-5"></i></span>
                    <Link to="/addbook"><span className="d-inline-block ms-2"><b>Add Book</b></span></Link>
                </div>
                <div>
                    <span><i className="bi bi-view-list fs-5"></i></span>
                    <Link to="/viewbooks"><span className="d-inline-block ms-2"><b>View Books</b></span></Link>
                </div>
                <div>
                    <span><i className="bi bi-book-half fs-5"></i></span>
                    <Link to="/rentedbooks"><span className="d-inline-block ms-2"><b>Rented Books</b></span></Link>
                </div>
                <div>
                    <span><i className="bi bi-card-list fs-5"></i></span>
                    <Link to="/inventory"><span className="d-inline-block ms-2"><b>Inventory Report</b></span></Link>
                </div>
                <div>
                    <span><i className="bi bi-bank fs-5"></i></span>
                    <Link to="/rentalsummary"><span className="d-inline-block ms-2"><b>Monthly Revenue Report</b></span></Link>
                </div>
                <div>
                    <span><i className="bi bi-people fs-5"></i></span>
                    <Link to="/users"><span className="d-inline-block ms-2"><b>Users</b></span></Link>
                </div>
                <div>
                    <span><i className="bi bi-person fs-4"></i></span>
                    <Link to="/adminprofile"><span className="d-inline-block ms-2"><b>Admin Profile</b></span></Link>
                </div>
            </div>
        </div>
    )
}

export default AppSideBar;
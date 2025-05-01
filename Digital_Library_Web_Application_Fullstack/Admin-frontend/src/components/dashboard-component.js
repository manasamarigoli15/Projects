import { useEffect, useState } from "react";
import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import { getAllUsers } from "../services/userservice";
import { GetAllBooks, GetRentedBooks } from "../services/bookservice";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function DashboardComponent() {

    let [book, setBook] = useState([]);
    let [user, setUsers] = useState([]);
    let [rentedBook, setRentedBook] = useState([]);

    useEffect(() => {
        getAllUsers().then(d => setUsers(d.data))
            .catch((error) => console.error(error))
    }, []);

    useEffect(() => {
        GetAllBooks().then(d => setBook(d.data))
            .catch((error) => console.error(error))
    }, []);

    useEffect(() => {
        GetRentedBooks().then(d => setRentedBook(d.data))
            .catch((error) => console.error(error))
    }, []);

    return(
        <div className="addbook-background">
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
                                        <i className="bi bi-person fs-2 me-2 c1icon float-end"></i>
                                        <Link to="/users"><h4>Users</h4></Link>
                                        <h2>{user.length}</h2>
                                           
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="card cards c2 shadow me-5 mb-3">
                                    <div className='ms-3 card-body'>
                                        <i className="bi bi-bookshelf fs-2 me-2 c2icon float-end"></i>
                                        <Link to="/viewbooks"><h4>Books</h4></Link>
                                        <h2>{book.length}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="card cards c3 shadow me-5 mb-3">
                                    <div className='ms-3 card-body'>
                                        <i className="bi bi-book fs-2 c3icon float-end"></i>
                                        <Link to="/rentedbooks"><h4>Books Rented</h4></Link>
                                        <h2>{rentedBook.length}</h2>
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

export default DashboardComponent;
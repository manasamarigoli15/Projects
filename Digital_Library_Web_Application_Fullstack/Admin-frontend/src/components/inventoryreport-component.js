import { useEffect, useState } from "react";
import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import { GetAllBooks } from "../services/bookservice";
import "../assets/css/inventory.css";

function InventoryReportComponent() {
    let [books, setBooks] = useState([]);

    useEffect(() => {
        GetAllBooks().then(d => { setBooks(d.data); console.debug(d.data); })
            .catch((error) => console.error(error))
    }, []);

    return (
        <div className="addbook-background">
            <AppNavBar></AppNavBar>
            <AppSideBar></AppSideBar>
            <div className="content">
                <div className="row mb-3 mt-3 shadow">
                    <div className="col-12 text-center">
                        <h2>Inventory Report</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 shadow">
                        <table className="table blackheader">
                            <thead className="blackheader">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Total Copies</th>
                                    <th scope="col">Copies Available</th>
                                    <th scope="col">Copies Rented Out</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    books.length > 0 &&
                                    books.map(book => {
                                        return (
                                            <tr>
                                                <td>{book.id}</td>
                                                <td>{book.title}</td>
                                                <td>{book.author}</td>
                                                <td>{book.totalNumberOfCopies}</td>
                                                <td>{book.numberOfCopiesAvailable}</td>
                                                <td>{book.numberOfCopiesRentedOut}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InventoryReportComponent;
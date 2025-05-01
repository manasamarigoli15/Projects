import { useEffect, useState } from "react";
import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import { GetTotalRevenuePerMonth } from "../services/bookservice";
import "../assets/css/inventory.css";

function BookRentalSummaryComponent() {
    let [books, setBooks] = useState([]);

    useEffect(() => {
        GetTotalRevenuePerMonth().then(d => { setBooks(d.data); console.debug(d.data); })
            .catch((error) => console.error(error))
    }, []);

    const totalRevenue = books.reduce((total, book) => total + book.revenue, 0);
    const totalCopiesRented = books.reduce((total, book) => total + book.numberOfCopiesReturned, 0);

    return (
        <div className="addbook-background">
            <AppNavBar></AppNavBar>
            <AppSideBar></AppSideBar>
            <div className="content">
                <div className="row mb-3 mt-3 shadow">
                    <div className="col-12 text-center">
                        <h2>Monthly Revenue Report</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <table className="table blackheader">
                            <thead className="blackheader">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Copies Returned</th>
                                    <th scope="col">Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    books.length > 0 &&
                                    books.map(book => {
                                        return (
                                            <tr>
                                                <td>{book.bookId}</td>
                                                <td>{book.title}</td>
                                                <td>{book.numberOfCopiesReturned}</td>
                                                <td>₹{book.revenue}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 shadow-lg">
                        <p><b>Total Revenue Generated: ₹{totalRevenue}</b></p>
                        <p><b>Total Copies Returned: {totalCopiesRented}</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookRentalSummaryComponent;
import { useEffect, useState } from "react";
import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import { GetRentedBooks } from "../services/bookservice";
import RentedBookItem from "./rentedbookitem";


function RentedBookComponent() {

    let [books, setBooks] = useState([]);
    useEffect(() => {
        GetRentedBooks().then(d => {
            let books = d.data;
            books.sort((a,b) => {
                const dueDateA = new Date(a.dueDate);
                const dueDateB = new Date(b.dueDate);
                return dueDateB.getDate() - dueDateA.getDate();
              });
            setBooks(d.data)

        })
            .catch((error) => console.error(error))
    }, []);

    return (
        <div className="addbook-background">
            <AppNavBar></AppNavBar>
            <AppSideBar></AppSideBar>
            <div className='content'>
                <div className='row mb-4 mt-4 shadow'>
                    <h2 className="text-center">Rented Books</h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul className="list-group">
                            {
                                books.length > 0 &&
                                books.map(d => {
                                    return (
                                        <li className="list-group-item">
                                            <RentedBookItem item={d}></RentedBookItem>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentedBookComponent;
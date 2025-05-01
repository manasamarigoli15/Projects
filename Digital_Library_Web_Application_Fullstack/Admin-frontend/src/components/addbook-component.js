import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import "../assets/css/addbook.css";
import { AddNewBook } from "../services/bookservice";

function AddBookComponent() {
    let [book, setBook] = useState({});
    let nav = useHistory();

    function onBookCreate() {

        book.genre = parseInt(book.genre);

        AddNewBook(book)
            .then((response) => {
                console.debug(response.data);
                alert("New Book Added Successfully !");
                nav.push("/viewbooks");
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="addbook-background">
            <AppNavBar></AppNavBar>
            <AppSideBar></AppSideBar>

            <div className="content">
                <div className='row mt-4 shadow'>
                    <div className="col-12">
                        <h2 className="text-center">Add Book</h2>
                    </div>
                </div>
                <hr className="mt-3"></hr>
                <h4>Book Details</h4><hr></hr>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-3">
                                <label for="" className="mb-2"><b>Book Title</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Book Title"
                                    onChange={(e) => { setBook({ ...book, title: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-3 ms-5">
                                <label className="mb-2" for=""><b>Author</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Author"
                                    onChange={(e) => { setBook({ ...book, author: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>Rent per day in Rs.</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Rent per day"
                                    onChange={(e) => { setBook({ ...book, rentPerDay: e.target.value }) }}
                                    required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-3">
                                <label for="" className="mb-2"><b>Genre</b></label>
                                <select
                                    className="form-select"
                                    placeholder=""
                                    onChange={(e) => { setBook({ ...book, genre: e.target.value }) }}
                                >
                                    <option value="-1">Select genre</option>
                                    <option value="1">Mystery</option>
                                    <option value="2">Thriller</option>
                                    <option value="3">Horror</option>
                                    <option value="4">Fantasy</option>
                                    <option value="5">ScienceFiction</option>
                                </select>
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>Total Number of Books</b></label>
                                <input type="number"
                                    className="form-control"
                                    placeholder="Total Number of Books"
                                    onChange={(e) => { setBook({ ...book, totalNumberOfCopies: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>Number of Books Available</b></label>
                                <input type="number"
                                    className="form-control"
                                    placeholder="Number of Books Available"
                                    onChange={(e) => { setBook({ ...book, numberOfCopiesAvailable: e.target.value }) }}
                                    required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-3">
                                <label for="" className="mb-2"><b>Number of Books Rented</b></label>
                                <input type="number"
                                    className="form-control"
                                    placeholder="Number of Books Rented"
                                    onChange={(e) => { setBook({ ...book, numberOfCopiesRentedOut: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-5 ms-5">
                                <label for="" className="mb-2"><b>Add Image</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Image"
                                    onChange={(e) => { setBook({ ...book, imageUrl: e.target.value }) }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 d-flex justify-content-center">
                        <button type="button" onClick={onBookCreate} className="btn btn-primary buttons">Save Details</button>
                        <Link to="/dashboard" className="btn btn-warning ms-4 buttons">Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBookComponent;

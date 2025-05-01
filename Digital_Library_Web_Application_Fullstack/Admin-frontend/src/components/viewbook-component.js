import { useEffect, useState } from "react";
import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import { GetAllBooks, GetSearchFilter } from "../services/bookservice";
import BookItem from "./bookitem";


function ViewBookComponent() {

    let [books, setBooks] = useState([]);
    let [filterParams, setFilterParams] = useState({ Title: "", Author: "", Genre: 'All' })

    useEffect(() => {
        GetAllBooks().then(d => setBooks(d.data))
            .catch((error) => console.error(error))
    }, []);

    function searchBooks() {
        console.log(filterParams);
        GetSearchFilter(filterParams).then(d => setBooks(d.data))
            .catch((error) => console.error(error))
    }


    return (
        <div className="viewbook-background">
            <AppNavBar></AppNavBar>
            <AppSideBar></AppSideBar>
            <div className='content'>
                <div className='row mb-4 mt-4 shadow'>
                    <div className="col-12">
                        <h2 className="text-center">Manage Books</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="input-group">
                            <div className="col-3">
                                <label htmlFor="title" className="mb-2"><b>Title</b></label>
                                <div className="me-3">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Search by title"
                                        onChange={(e) => { setFilterParams({ ...filterParams, Title: e.target.value }) }}
                                    />
                                </div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="author" className="mb-2 ms-2"><b>Author</b></label>
                                <div className="me-3">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Search by author"
                                        onChange={(e) => { setFilterParams({ ...filterParams, Author: e.target.value }) }}
                                        required />
                                </div>
                            </div>
                            <div className="col-3">
                                <label for="" className="mb-2"><b>Genre</b></label>
                                <div className="me-3">
                                    <select
                                        className="form-select"
                                        placeholder=""
                                        onChange={(e) => { setFilterParams({ ...filterParams, Genre: e.target.value }) }}
                                    >
                                        <option value="All">All</option>
                                        <option value="Mystery">Mystery</option>
                                        <option value="Thriller">Thriller</option>
                                        <option value="Horror">Horror</option>
                                        <option value="Fantasy">Fantasy</option>
                                        <option value="ScienceFiction">ScienceFiction</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-2">
                                <button onClick={(e) => { searchBooks() }} className="btn btn-primary w-100" style={{ marginTop: '2em' }}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="input-group">
                    {
                        books.length > 0 &&
                        books.map(book => {
                            return (
                                <BookItem item={book}></BookItem>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ViewBookComponent;
import { Link } from "react-router-dom";
import { DeleteBookById } from "../services/bookservice";


function BookItem(props) {

    function onDeleteBook(id) {
        DeleteBookById(id).then(d => {
            console.debug(d.data);
            alert(`Book with id : ${props.item.id} deleted successfully`); window.location.reload();
        })
            .catch((error) => console.error(error))
    }

    return (
        <div className="mt-2">
            <div className="row mt-3 mb-3 me-5 rounded-2">
                <div className="card" style={{ height: '400px' }}>
                    <div className="card-body">
                        <div>
                        <img src={props.item.imageUrl} alt=" " height="200px" width="100%"></img>
                        </div>
                        <div className="mt-2"><h5 className="card-title">Title: {props.item.title}</h5></div>
                        <div><p className="card-text"><b>Author: {props.item.author}</b></p></div>
                        <div>
                        {props.item.genre === 1 && <b><p className="card-text">Genre: Mystery</p></b>}
                        {props.item.genre === 2 && <b><p className="card-text">Genre: Thriller</p></b>}
                        {props.item.genre === 3 && <b><p className="card-text">Genre: Horror</p></b>}
                        {props.item.genre === 4 && <b><p className="card-text">Genre: Fantasy</p></b>}
                        {props.item.genre === 5 && <b><p className="card-text">Genre: ScienceFiction</p></b>}
                        </div>
                        <div><p className="card-text mt-2"><b>Rent per day: Rs.{props.item.rentPerDay}</b></p></div>
                        {/* <p className="card-text">Total Number Of Copies: {props.item.totalNumberOfCopies}</p>
                            <p className="card-text">Number of Copies Rented: {props.item.numberOfCopiesRentedOut}</p>
                            <p className="card-text">Number of Copies Available: {props.item.numberOfCopiesAvailable}</p> */}
                        <div className="mt-2">
                            <Link to={`/editbook/${props.item.id}`} type="button" className="btn btn-success me-2 buttonSize">Edit</Link>
                            <button className="btn btn-danger buttonSize" onClick={() => onDeleteBook(props.item.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookItem;
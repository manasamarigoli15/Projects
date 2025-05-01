
function RentedBookItem(props) {

    return (
        <div className="mt-2">
            <div className="card mb-3" style={{ height: '200px' }}>
                <div className="row no-gutters g-0">
                    <div className="col-4">
                        <img src={props.item.book.imageUrl} alt=" " height="200px" width="250px"></img>
                    </div>
                    <div className="col-4">
                        <div className="card-body">
                            <h5 className="card-title">Title: {props.item.book.title}</h5>
                            <p className="card-text"><b>Author: {props.item.book.author}</b></p>
                            {props.item.book.genre === 1 && <b><p className="card-text">Genre: Mystery</p></b>}
                            {props.item.book.genre === 2 && <b><p className="card-text">Genre: Thriller</p></b>}
                            {props.item.book.genre === 3 && <b><p className="card-text">Genre: Horror</p></b>}
                            {props.item.book.genre === 4 && <b><p className="card-text">Genre: Fantasy</p></b>}
                            {props.item.book.genre === 5 && <b><p className="card-text">Genre: ScienceFiction</p></b>}
                            <p className="card-text mt-2"><b>Rent per day: ₹{props.item.book.rentPerDay}</b></p>
                            <p className="card-text"><b>Borrower: {props.item.user.name}</b></p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card-body">
                            <p className="card-text">Rental Date: {(new Date(props.item.rentalDate)).toLocaleDateString()}</p>
                            <p className="card-text">Due Date: {(new Date(props.item.dueDate)).toLocaleDateString()}</p>
                            {props.item.actualReturnDate !== null ?<p className="card-text">Actual Return Date: {(new Date(props.item.actualReturnDate)).toLocaleDateString()}</p>:<></>}
                            {props.item.actualReturnDate !== null
                            ? <button className="btn btn-success" >Returned</button> 
                            : <button className="btn btn-warning" >Yet to Return</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentedBookItem;
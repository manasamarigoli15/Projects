import { DeleteUserById } from "../services/userservice";


function UserItem(props) {

    function onDeleteUser(id) {
        DeleteUserById(id).then(d => {
            console.debug(d.data);
            alert(`User with id : ${props.item.id} deleted successfully`); window.location.reload();
        })
            .catch((error) => console.error(error))
    }

    return (
        <div className="mt-2 page-background">
            <div className="card mb-3" style={{ height: '270px' }}>
                <div className="row no-gutters g-0">
                    <div className="col-5">
                        <img src={`https://i.pravatar.cc`} alt=" " height="270px" width="270px"></img>
                    </div>
                    <div className="col-7">
                        <div className="card-body">
                            <h5 className="card-title">Name: {props.item.name}</h5>
                            <p className="card-text"><b>Email: {props.item.email}</b></p>
                            <p className="card-text">Phone Number: {props.item.phoneNumber}</p>
                            <p className="card-text">Address: {props.item.address}</p>
                            <p className="card-text">Joined On: {(new Date(props.item.createdDate)).toLocaleDateString()}</p>
                            <div className="mt-2">
                                <button className="btn btn-danger" onClick={() => onDeleteUser(props.item.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserItem;
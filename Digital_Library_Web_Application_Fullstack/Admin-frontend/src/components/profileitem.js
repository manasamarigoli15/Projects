import { Link } from "react-router-dom";


function ProfileItem(props) {
    return (
        <div className="content">
            <div className="card m-auto mt-5 w-50 h-70">
                <div className="card-header text-center">
                    <span><i className="bi bi-person-circle fs-3"></i></span>
                    <span><h4>ADMIN PROFILE</h4></span>
                </div>
                <div className="card-body profile-body">
                    <div className="text-center">
                        <img src={`https://i.pravatar.cc/300?u=${props.item.name}`} className="img-fluid rounded-5 justify-center" width="80px" height="80px" ></img>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="mt-3 text-center">
                        Name : <b>{props.item.name}</b>
                    </div>
                    <div className="mt-3 text-center">
                        Email : <b>{props.item.email}</b>
                    </div>
                    <div className="mt-3 text-center">
                        Mobile : <b>{props.item.phoneNumber}</b>
                    </div>
                    <div className="mt-3 text-center">
                        <Link to={`/editprofile/${props.item.id}`} className="btn btn-primary"><i class="bi bi-pencil-square me-2 text-light"></i>EDIT</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileItem;
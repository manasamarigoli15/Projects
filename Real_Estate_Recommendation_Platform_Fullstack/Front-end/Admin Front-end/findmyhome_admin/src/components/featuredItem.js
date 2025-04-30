import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../constants/http-constants";
import { deletePropertyById } from "../services/propertyservice";


function FeaturedItem(props) {

    function onDeleteProperty(id) {
        deletePropertyById(id).then(d => {
            console.debug(d.data);
            alert(`Property with id : ${props.item.id} deleted successfully`); window.location.reload();
        })
            .catch((error) => console.error(error))
    }

    return (
        <div className="mt-2 page-background">
            <div className="card mb-3">
                <div className="row no-gutters g-0">
                    <div className="col-5">
                        {props.item.images && props.item.images.length > 0 &&
                            <img src={props.item.images[1].imageUrl} height="100%" width="100%"></img>}
                    </div>
                    <div className="col-7">
                        <div className="card-body">
                            <h5 className="card-title">{props.item.propertyType}</h5>
                            <p className="card-text">{props.item.propertyRegNum}</p>
                            {props.item.categoryType == 1 && <b><p className="card-text">Buy</p></b>}
                            {props.item.categoryType == 2 && <b><p className="card-text">Sell</p></b>}
                            {props.item.categoryType == 3 && <b><p className="card-text">Rent</p></b>}
                            <p className="card-text mt-2">{props.item.price}</p>
                            <p className="card-text">{props.item.description}</p>
                            <p className="card-text">Agency Name: <b>{props.item.agencyInfo.agencyName}</b></p>
                            <p className="card-text">Agency Phone : <b>{props.item.agencyInfo.agencyPhoneNumber}</b></p>
                            <div className="mt-2">
                                <Link to={`/editproperty/${props.item.id}`} type="button" className="btn btn-success me-2">Edit</Link>
                                <button className="btn btn-danger" onClick={() => onDeleteProperty(props.item.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedItem;
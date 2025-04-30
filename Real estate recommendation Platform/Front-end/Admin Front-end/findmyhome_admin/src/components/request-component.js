import "../assets/css/branddeals.css";
import "../assets/css/sidebar.css";
import AppNavBar from "../layouts/app-nav-bar";
import "../assets/css/content.css";
import AppSideBar from "../layouts/app-side-bar";
import { Link } from "react-router-dom";
import { baseUrl } from "../constants/http-constants";
import { deleteRequest, getRequest, getRequestById } from "../services/requestservice";
import { useState,useEffect } from "react";
import axios from "axios";
function RequestComponent(props)
{
    function onDeleteRequest(id) {
        deleteRequest(id).then(d => {
            console.debug(d.data);
            alert(`Deleted ${props.item.propertyRegNum} id: ${id}`);
            window.location.reload();
        })
            .catch((error) => console.error(error))
    }
    // let [request, setRequest] = useState([]);
    // useEffect(() => {
    //     getRequest(request).then(d => setRequest(d.data))
    //         .catch((error) => console.error(error))
    // }, {});
    return (
        <tbody>
            <tr>
                <td>{props.item.username.name}</td>
                <td>{props.item.propertyregnum.propertyRegNum}</td>
                <td>  {props.item.propertyregnum.categoryType == 1 && <b><p className="card-text">Buy</p></b>}
                            {props.item.propertyregnum.categoryType == 2 && <b><p className="card-text">Sell</p></b>}
                            {props.item.propertyregnum.categoryType == 3 && <b><p className="card-text">Rent</p></b>}</td>
                <td><span><button className="btn btn-danger"
                    onClick={() => onDeleteRequest(props.item.id)}>Delete</button></span></td>
            </tr>
        </tbody>
    )
}
export default RequestComponent;
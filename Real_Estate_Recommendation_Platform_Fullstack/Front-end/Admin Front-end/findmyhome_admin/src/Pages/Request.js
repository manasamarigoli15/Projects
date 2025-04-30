import { useEffect, useState } from "react";
import RequestComponent from "../components/request-component";
import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import { getRequest } from "../services/requestservice";

function Requests() {
    let [request, setRequest] = useState({});
    useEffect(() => {
        getRequest().then(d => {setRequest(d.data); console.debug(d.data);})
            .catch((error) => console.error(error));
    }, {});
    return (
        <div >
            <AppNavBar></AppNavBar>
            <AppSideBar></AppSideBar>
            <div className="content">
                <h2 className="mt-4">Requests</h2>
                <table className="table table-striped ordertable">
            <thead className="table-head">
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Property Reg.No</th>
                    <th scope="col">Request Type</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            {
                    request.length > 0 &&
                    request.map(d => {
                        return (
                            <RequestComponent item={d}></RequestComponent>
                        )
                    })
                }
            </table>
            </div>
        </div>
    )
}
export default Requests;
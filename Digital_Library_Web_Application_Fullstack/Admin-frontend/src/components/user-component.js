import { useEffect, useState } from "react";
import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import { getAllUsers } from "../services/userservice";
import UserItem from "./useritem";


function UserComponent() {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUsers().then(d => setUsers(d.data))
            .catch((error) => console.error(error))
    }, []);

    return (
        <div className="addbook-background">
            <AppNavBar></AppNavBar>
            <AppSideBar></AppSideBar>
            <div className='content'>
                <div className='row mb-3 mt-4 shadow'>
                <h2 className="text-center">Manage Users</h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul className="list-group">
                            {
                                users.length > 0 &&
                                users.map(d => {
                                    return (
                                        <li className="list-group-item">
                                            <UserItem item={d}></UserItem>
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

export default UserComponent;
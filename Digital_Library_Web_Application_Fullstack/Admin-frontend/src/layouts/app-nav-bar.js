import booklogo from '../assets/img/booklogo.jpg';
import "../assets/css/custom.css";
import { Link } from 'react-router-dom';
import { logout } from '../services/authservice';
import { getAdmin} from "../services/adminservice";
import { useEffect, useState } from "react";

function AppNavBar() {

    let [admin, setAdmin] = useState({});

    useEffect(() => {
        getAdmin()
            .then(d => { setAdmin(d.data); console.debug(d.data); })
            .catch((error) => console.error(error));
    }, {});

    return (
        <nav className="navbar navbar-expand sticky-top shadow">
            <div className="container-fluid">
                <a className="navbar-brand text-dark" href="/dashboard">
                    <img src={booklogo} alt="booklogo" width="35" height="25" className="d-inline-block align-text-top" />
                    <b className='ms-2'>Digital Library</b>
                </a>
            </div>

            <div>
                <span>
                    <a className="navbar-brand text-dark" href="/">
                        <Link to="/adminprofile">
                            <img src={`https://i.pravatar.cc/300?u=${admin.name}`} 
                            alt="img" width="40" height="30" 
                            className="d-inline-block align-text-top rounded-5 me-2" />
                            <b className='ms-2'>Admin</b>
                        </Link>
                    </a>
                </span>
            </div>
            <div>
                <Link to="/">  <span><button onClick={logout} className='btn btn-danger text-light me-2'>Logout</button></span></Link>
            </div>
        </nav>
    )
}

export default AppNavBar;
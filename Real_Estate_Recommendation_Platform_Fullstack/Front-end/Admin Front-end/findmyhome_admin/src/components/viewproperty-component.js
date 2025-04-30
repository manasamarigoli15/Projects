import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import { getProperty } from "../services/propertyservice";
import PropertyItem from "./propertyItem";


function ViewPropertyComponent() {

    let [property, setProperty] = useState([]);
    useEffect(() => {
        getProperty().then(d => setProperty(d.data))
            .catch((error) => console.error(error))
    }, []);

    return (
        <div className="addproperty-background">
            <AppNavBar></AppNavBar>
            <AppSideBar></AppSideBar>
            <div className='content'>
                <div className='row mb-5 mt-4'>
                    <div className="col-9">
                        <h2>VIEW PROPERTIES</h2>
                    </div>
                    <div className="col-3 float-end ">
                        <Link to="/buyproperty" className="me-4 fs-4">Buy</Link>
                        <span className="me-4 fs-4"><Link to="/sellproperty">Sell</Link></span>
                        <span className="fs-4 me-0"><Link to="/rentproperty">Rent</Link></span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <ul className="list-group">
                            {
                                property.length > 0 &&
                                property.map(d => {
                                    return (
                                        <li className="list-group-item">
                                            <PropertyItem item={d}></PropertyItem>
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

export default ViewPropertyComponent;
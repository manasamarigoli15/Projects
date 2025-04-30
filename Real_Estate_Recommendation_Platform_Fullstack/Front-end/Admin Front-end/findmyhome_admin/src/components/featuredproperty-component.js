import { useEffect, useState } from "react";
import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import { getProperty } from "../services/propertyservice";
import FeaturedItem from "./featuredItem";


function FeaturedPropertyComponent() {

    let [property, setProperty] = useState([]);
    useEffect(() => {
        getProperty().then(d => setProperty(d.data))
            .catch((error) => console.error(error))
    },[]);

    return (
        <div className="addproperty-background">
            <AppNavBar></AppNavBar>
            <AppSideBar></AppSideBar>
            <div className='content'>
                <div className='mb-5 mt-4'>
                    <h1>FEATURED PROPERTIES</h1>
                </div>

                <div className="row">
                    <div className="col-12">
                        <ul className="list-group">
                            {
                                property.length > 0 &&
                                property.filter(d => d.featured == 1).map(d => {
                                    return (
                                        <li className="list-group-item">
                                            <FeaturedItem item={d}></FeaturedItem>
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

export default FeaturedPropertyComponent;
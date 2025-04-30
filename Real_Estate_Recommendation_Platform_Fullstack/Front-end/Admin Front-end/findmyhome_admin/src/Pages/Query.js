import { useEffect, useState } from "react";
import QueryComponent from "../components/query-component";
import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import { getQuery } from "../services/queryservice";

function Query() {

    let [query, setQuery] = useState({});
    useEffect(() => {
        getQuery().then(d => {setQuery(d.data); console.debug(d.data);})
            .catch((error) => console.error(error));
    }, {});
    return (
        <div>
            <AppNavBar></AppNavBar>
            <AppSideBar></AppSideBar>
            {/* <h1 className="content">Customer Queries</h1> */}
            {
                query.length > 0 &&
                query.map(d => {
                    return (
                        <QueryComponent item={d}></QueryComponent>
                    )
                })
            }
        </div>
    )
}

export default Query;
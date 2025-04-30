import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getQuery, getQueryById, updateQuery } from "../services/queryservice";
import Query from "./Query"

function QueryDetails(props)
{
    let [query, setQuery] = useState({});
    const params = useParams();
    useEffect(() => {
        getQueryById(params.id).then(d => {setQuery(d.data); console.debug(d.data);})
            .catch((error) => console.error(error));
    }, []);

    let nav = useHistory();
    function onQueryUpdate()
    {
        updateQuery(query)
                    .then((response) => {
                        console.debug(response.data);
                        alert("Updated Successfully !");
                        nav.push("/query");
                    })
                    .catch((error) => {
                        console.error(error);
                    });   
    }
    return (
        <div className="content">
            <div className="col-12">
                        <div className="input-group">
                            <div className="col-3">
                                <label for="" className="mb-2"><b>Property Reg.Num</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder=""
                                    value={query.name}
                                    onChange={(e) => { setQuery({ ...query, name: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-3 ms-5">
                                <label className="mb-2" for=""><b>Property Type</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder=""
                                    value={query.email}
                                    onChange={(e) => { setQuery({ ...query, email: e.target.value }) }}
                                    required />
                            </div>
                            <div className="col-3 ms-5">
                                <label for="" className="mb-2"><b>Area in Sqft</b></label>
                                <input type="text"
                                    className="form-control"
                                    placeholder=""
                                    value={query.questions}
                                    onChange={(e) => { setQuery({ ...query, questions: e.target.value }) }}
                                    required />
                            </div>
                            <div>
                                <textarea type="text" placeholder="type answer" value={query.answers}
                                onChange={(e) => {setQuery({...query,answers : e.target.value})}}></textarea>
                            </div>
                        </div>
                    </div>
            {/* <div>{props.item.name}</div>
            <div>{props.item.email}</div>
            <div>{props.item.questions}</div> */}
           
            <button type="button" onClick={onQueryUpdate}>Post</button>
        </div>
    )
}

export default QueryDetails;
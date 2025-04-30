import { Link } from "react-router-dom";
import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import { deleteQuery } from "../services/queryservice";

function QueryComponent(props) {

    function onDeleteQuery(id) {
        deleteQuery(id).then(d => {
            console.debug(d.data);
            alert(`Deleted  id: ${id}`);
            window.location.reload();
        })
            .catch((error) => console.error(error))
    }
    return (       
        <section>
           
            <div className="content">      
                <div className="card mt-3 shadow">
                    <div className="card-body p-3">
                        Question<div className="text-muted"><b>{props.item.questions}</b></div>
                        <div className="mt-2">Answers</div>
                    </div>
                    <div className="card-footer">
                    <button type="button" className="btn btn-danger float-end"
                         onClick={() => onDeleteQuery(props.item.id)}>Delete</button>
                        <Link to={`/querydetails/${props.item.id}`} type="button" className="btn btn-warning float-end me-3"
                        >View Details</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QueryComponent;
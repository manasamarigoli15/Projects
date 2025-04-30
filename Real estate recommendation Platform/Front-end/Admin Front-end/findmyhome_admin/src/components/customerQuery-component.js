import AppNavBar from "../layouts/app-nav-bar";
import AppSideBar from "../layouts/app-side-bar";
import "../assets/css/sidebar.css";
import "../assets/css/query.css";


function CustomerQueriesComponent(){
    return(
        <div className="addproperty-background">
            <AppNavBar></AppNavBar>
            <AppSideBar></AppSideBar>
            

            <div className="con content">
                <div className="card col-8" >
                    <div className="row no-gutters ">
                        <div className="col-sm-5">
                            <img className="card-img p-1" src="https://images.moneycontrol.com/static-mcnews/2022/04/Home-loan.jpg?impolicy=website&width=770&height=431" alt="home"/>
                        </div>
                        <div className="col-sm-7">
                            <div className="card-body">
                                <h5 className="card-title">TITLE</h5>
                                <p className="card-text">Small detail about the property</p>
                                <p className="card-text text-info">For Rent</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Question about the property</p>
                    </div>
                    <div className="form-group ">                
                        <textarea className="input-group"  placeholder="Type your answer here" rows="3"></textarea>
                        <span type="button" className="input-group btn btn-info">Comment</span>
                    </div>
                </div>
            </div>

            <div className="con">
                <div className="card col-8" >
                    <div className="row no-gutters ">
                        <div className="col-sm-5">
                            <img className="card-img p-1" src="https://images.moneycontrol.com/static-mcnews/2022/04/Home-loan.jpg?impolicy=website&width=770&height=431" alt="home"/>
                        </div>
                        <div className="col-sm-7">
                            <div className="card-body">
                                <h5 className="card-title">TITLE</h5>
                                <p className="card-text">Small detail about the property</p>
                                <p className="card-text text-info">For Rent</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Question about the property</p>
                    </div>
                    <div className="form-group ">                
                        <textarea className="input-group"  placeholder="Type your answer here" rows="3"></textarea>
                        <span type="button" className="input-group btn btn-primary">Comment</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CustomerQueriesComponent;
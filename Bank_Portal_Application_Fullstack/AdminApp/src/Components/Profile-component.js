import { Link } from "react-router-dom";
import AppNavBar from "../layouts/app-nav-bar";
import SideNavBar from "../layouts/side-nav-bar";

function ProfileComponent(props){
    return(

        <div className="vh-100 bg-image body ">
    
      <AppNavBar></AppNavBar>
      
        <div className="container w-50  emp-profile shadow ">
        <div className="col-md-2 col-sm-1 col-lg-2"><SideNavBar></SideNavBar></div>
          <form method="post">
            <div className="row">
              <div className="col-md-3 col-sm-3 col-lg-3">
                <div class="profile-img">
                <img src={`https://i.pravatar.cc/300?u=${props.item.name}`}
                            alt="img" style={{ "height": "90px" }}
                            className="d-inline-block align-text-top rounded me-2" />
                </div>
              </div>
              <div className="col-md-5 col-sm-5 col-lg-5">
                <div className="profile-head ">
                  <h5>
                    {props.item.name}
                  </h5>
                  <h6>
                    Bank  {props.item.role}
                  </h6>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                        aria-controls="home" aria-selected="true">About</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4">
               <Link to={"/editprofile"}><input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" /></Link>
              </div>
            </div>
            <div className="row">
              
              <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">
                      <div className="col-md-6 col-sm-4 col-lg-6 text-md-center text-sm-center">
                        <label>User Id :</label>
                      </div>
                      <div className="col-md-6 col-sm-8 col-lg-6">
                        <p>{props.item.id}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-4 col-lg-6 text-md-center text-sm-center">
                        <label>Name :</label>
                      </div>
                      <div className="col-md-6 col-sm-8 col-lg-6">
                        <p>{props.item.name}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-4 col-lg-6 text-md-center text-sm-center">
                        <label>Email :</label>
                      </div>
                      <div className="col-md-6 col-sm-8 col-lg-6">
                        <p>{props.item.email}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-4 col-lg-6 text-md-center text-sm-center">
                        <label>Phone :</label>
                      </div>
                      <div className="col-md-6 col-sm-8 col-lg-6">
                        <p>{props.item.phoneNumber}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-4 col-lg-6 text-md-center text-sm-center">
                        <label>Profession :</label>
                      </div>
                      <div className="col-md-6 col-sm-8 col-lg-6 ">
                        <p>Bank Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
  
      </div>
    );
}
export default ProfileComponent;
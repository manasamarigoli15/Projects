import ProfileComponent from "../Components/Profile-component";
import "../CSS/Profile.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getAdmin} from "../services/adminService";
import AppNavBar from "../layouts/app-nav-bar";
import SideNavBar from "../layouts/side-nav-bar";
function Profile() {
  let [admins, setAdmin] = useState({});
  useEffect(() => {
    getAdmin().then(d =>{setAdmin(d.data);console.debug(admins)}) 
      .catch((error) => console.error(error))
  }, []);

  return (

    
      <div className="row">
  
      {
        
              <ProfileComponent item={admins}></ProfileComponent>
          
        }
</div>




  );

}
export default Profile;

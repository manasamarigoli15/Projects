import React from "react";
import "../CSS/Profile.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import '../CSS/nav.css'

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import AppNavBar from "../layouts/app-nav-bar";
import { Link } from "react-router-dom";

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  render() {
    return (
      <div className="App" >
        
         
        <SideNav className="mt-5  bg-opacity-75 opacity gradient bg-gradient h"  expanded={this.state.isVisible}  style={{'background-color': 'rgb(204, 240, 233)'}}>
          <SideNav.Toggle
            onClick={() => {
              this.setState({ isVisible: !this.state.isVisible });
            }}
            className="bg-dark mt-4 pt-3 pe-1"
          />
          <SideNav.Nav >
            <NavItem >
              <NavIcon className="text-black">
              <Link className='nav-link mt-1' to="/dashboard">
                <i className='fs-4 bi-house ms-0 ms-lg-2' style={{"color":"teal"}}></i>
                </Link>
              </NavIcon>
              <NavText > <li className='nav-item'>
                <Link className='nav-link mt-1 pt-1' to="/dashboard">

                  <span className='ms-3 d-block d-md-inline  text-black  '>Dashboard</span>
                </Link>
              </li>
              </NavText>
            </NavItem>
            <NavItem >
              <NavIcon>
              <Link className='nav-link mt-1' to="/profile">
                <i className='fs-4 bi-person-bounding-box ms-0 ms-lg-2 ' style={{"color":"teal"}}></i>
                </Link>
              </NavIcon>
              <NavText>   <li className='nav-item'>
                <Link className='nav-link mt-1 pt-1' to="/profile">

                  <span className='ms-3 d-block d-md-inline  text-black'>My Profile</span>
                </Link>
              </li>
              </NavText>
            </NavItem>
            <NavItem >
              <NavIcon>
              <Link className='nav-link mt-1' to="/card">
                <i className='fs-4 bi-r-circle ms-0 ms-lg-2' style={{"color":"teal"}}></i>
                </Link>
              </NavIcon>
              <NavText>   
                <li className='nav-item'>
                <Link className='nav-link mt-1 pt-1' to="/card">

                  <span className='ms-3 d-block d-md-inline  text-black'>Facility Requests</span>
                </Link>
              </li>
              </NavText>
            </NavItem>
            <NavItem >
              <NavIcon>
              <Link className='nav-link mt-1 ' to="/customerAccount">
                <i className='fs-4 bi-exclamation-circle ms-0 ms-lg-2' style={{"color":"teal"}}></i>
                </Link>
              </NavIcon>
              <NavText>

                <Link className='nav-link mt-1 ' to="/pending" id="navbarDropdown" role="button"
                  aria-expanded="false">

                  <span className='ms-3 d-block d-md-inline  text-black'>Pending Customers</span>
                </Link>

              </NavText>
            </NavItem>

            <NavItem >
              <NavIcon>
                <i className='fs-4 bi-check2-circle ms-0 ms-lg-2' style={{"color":"teal"}}></i>
              </NavIcon>
              <NavText>

              <li className='nav-item'>
                <Link className='nav-link  mt-1' to="/customerAccount"  aria-expanded="false">

                  <span className='ms-3 d-block d-md-inline  text-black'>Active Accounts</span>
                </Link>
                  </li>


              </NavText>
            </NavItem>
            <NavItem >
              <NavIcon>
                <i className='fs-4 bi-dash-circle ms-0 ms-lg-2 'style={{"color":"teal"}} ></i>
              </NavIcon>
              <NavText>

              <li className='nav-item'>
                <Link className='nav-link  mt-1' to="/deactivatedAccount"  aria-expanded="false">

                  <span className='ms-3 d-block d-md-inline  text-black'>Deactivated Accounts</span>
                </Link>
                  </li>


              </NavText>
            </NavItem>
            <NavItem >
              <NavIcon>
                <i className='fs-4 bi-coin ms-0 ms-lg-2' style={{"color":"teal"}}></i>
              </NavIcon>
              <NavText>  <li class='nav-item'>
                <Link className='nav-link mt-1' to="/loan">

                  <span className='ms-3 d-block d-md-inline  text-black'>Loan Approval</span>
                </Link>
              </li>
              </NavText>
            </NavItem>
            <NavItem >
              <NavIcon>
                <i className='fs-4 bi-credit-card-fill ms-0 ms-lg-2' style={{"color":"teal"}}></i>
              </NavIcon>
              <NavText>   <li className='nav-item'>
                <Link className='nav-link mt-1' to="/blockcard">

                  <span className='ms-3 d-block d-md-inline  text-black'>Block/Unblock Cards</span>
                </Link>
              </li>
              </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>

      </div>

    );
  }
}

export default SideNavBar;
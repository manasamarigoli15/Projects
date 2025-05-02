import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect,useState } from 'react';
import { logout } from '../services/authservice';
import { getAdmin } from '../services/adminService';
import '../CSS/nav.css'
function AppNavBar()
{
  let [admins, setAdmin] = useState({});
  useEffect(() => {
    getAdmin().then(d =>{setAdmin(d.data);console.debug(admins)}) 
      .catch((error) => console.error(error))
  }, []);
    
    
    return(
      <div className='row'>
      <div className='col-12'>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark m-0  gradient" style={{"backgroundColor":"teal"}}>
        <div class="container-fluid">
          <Link to="/dashboard" class="navbar-brand">
            <div className='row m-0'>
              <div className='col-2'>
           <i className='bi bi-bank2 fs-1'></i></div>
           <div className='col-2 ms-3'>
           <span className='fs-6 ms-3'>Net Banking</span><br></br>
            <span className='border border-light text-light rounded fs-6 ps-4 pe-4 pb-1'> Sky Bank</span></div></div>
          </Link>

          <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">

            <div class="navbar-nav ms-auto">
              <Link to="/" class="nav-item nav-link">
                {

                  <span>
                        <span><img src={`https://i.pravatar.cc/300?u=${admins.name}`}
                            alt="img" width="30" height="30"
                            className="d-inline-block align-text-top rounded-5 me-2" /></span>
                      <span className='me-1 text-light'>Welcome</span>
                      <span className=' text-light me-4'>{admins.name}</span>
                  
                   
                    <span>
        
                      <button type='text text-dark' onClick={logout}

                        className='btn bg-light text-dark' >Log Out<i className='bi bi-box-arrow-right ms-2'></i>
                      </button>
                    </span>
                  </span>
                }
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </div>
    )
}

export default AppNavBar;


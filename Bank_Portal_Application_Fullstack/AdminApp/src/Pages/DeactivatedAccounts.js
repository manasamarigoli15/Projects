import { useEffect, useState,useHistory } from "react";
import { Link } from "react-router-dom";
import { getCustomerDetails,updateCustomerStatus } from "../services/customerService";
import DeactiveCustomers from "../Components/DeactivateCustomer";
import '../CSS/table.css'
import AppNavBar from "../layouts/app-nav-bar";
import SideNavBar from "../layouts/side-nav-bar";
function DeactivatedAccount()
{
  
  let [customers,setCustomers] = useState([]);
  let [search,setSearch] = useState("");
    useEffect(()=>{
        getCustomerDetails().then(d => setCustomers(d.data))
                  .catch((error) => console.error(error));          
    },[]);
function getSearchData()
{
  let data = [];
  data=customers;
  if(search.length > 0)
        return data.filter(d => d.firstName.indexOf(search) >= 0);
      else
        return data;

}

    return(
      <div className="row">
      <div className="col-12"><AppNavBar></AppNavBar></div>
       <div className=" col-1 col-md-2  col-lg-2"><SideNavBar></SideNavBar></div> 
      
      <div className="col-11 col-md-10  col-lg-10 float-sm-end">
      <section className="mt-4">
        <div className="row ms-5 text-center"><div className="col-11 col-md-10  col-lg-10 float-sm-end"><b className=" text-muted fs-4 text-center">DEACTIVATED ACCOUNTS</b></div></div>
        <div className="row ms-5 mb-4 mt-3">
          <div className="col-5 text-center pt-2">
      </div>
      <div className="col-7">
      <div class="input-group  w-75 ms-4 ">
     <input type="text" className="form-control ms-5" placeholder="Search..." onChange={(event)=>setSearch(event.target.value)} ></input>               
     <button type="button" class="btn bg-gradient" style={{"background-color":"teal"}}>
    <i class="bi bi-search"></i>
  </button> 
  
  </div></div></div>

      <div className="h-100" >
        <div className="mask d-flex align-items-center h-100">
          <div className="container float-sm-end">
            <div className="row justify-content-center">
              <div className="col-10">
                <div className="card">
                  <div className="card-body p-0">
                    <div className="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style={{"position": "relative; height: 700px"}}>
                      <table className="table table-striped mb-0">
                        <thead style={{"background-color":"teal"}} className="bg-gradient">
                          <tr>
                            <th className="col-1 text-center ">ID</th>
                            <th className="col-2 text-center">Account Number</th>
                            <th className="col-3  text-center ">UserName</th>
                            <th className="col-3  text-center ">Status</th>
                            <th className="col-3  text-center">Verify</th>
                            
                          </tr>
                        </thead>
            <tbody>
              {
                       customers.length > 0 && 
                       getSearchData().map((d) => { if(d.status==3){
                        return(
                          
                          <DeactiveCustomers item={d}></DeactiveCustomers>
                        ) }})
  
                      }
                      {
                          customers.length == 0 &&
                          <div class="spinner-border text-primary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      }
  
                
  </tbody>
          </table>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</div>

    );

}
export default DeactivatedAccount;
import { getLoanRequest } from "../services/customerService";
import LoanComponent from "../Components/LoanComponent";
import { useEffect,useState } from "react";
import AppNavBar from "../layouts/app-nav-bar";
import SideNavBar from "../layouts/side-nav-bar";
function Loan()
{
    let [loan,setloan]=useState([]);
    let [filter,setFilter] = useState("all");
    useEffect(()=>{
        getLoanRequest().then(d => {setloan(d.data)})
                  .catch((error) => console.error(error));          
    },[]);
    
        function getFilterData()
        {
          let data=[]
          if(filter =="all")
          data= loan;
          else if(filter =="1")
          data=loan.filter(t=>t.loanType==1)
          else if(filter =="2")
          data=loan.filter(t=>t.loanType== 2)
          else if(filter =="3")
          data=loan.filter(t=>t.loanType==3)
          else if(filter =="4")
          data=loan.filter(t=>t.loanType==4)
          
          return data;
      }     
      
      
      return(

          <div>
              <AppNavBar></AppNavBar>
      <div className="container">
      
          <div className="row">
         
             <div className=" col-2 col-md-2 col-lg-2"><SideNavBar></SideNavBar></div>
              <div className="col-10 col-md-10 float-sm-end  ">
              <div className="row ms-5 text-center mt-3"><div className="col-11 col-md-10  col-lg-10 float-sm-end"><b className=" text-muted fs-4 text-center ms-5">LOAN REQUEST</b></div></div>
              <div className="row"> <div className="col-12 col-md-12 float-end "><select className="form-select mt-3 w-25  ms-5" onChange={(event)=> setFilter(event.target.value)}>
              <option value="all">All</option>
              <option value="1">Personal Loan</option>
              <option value="2">Home Loan</option>
              <option value="3">Vehicle Loan</option>
              <option value="4">Education Loan</option>
           </select> </div></div>   
        <ul className="list-group list-group-flush ms-5 mt-2">
                  
                      {
                  loan.length > 0 && 
                  getFilterData().map((d) => { {if(d.loanStatus==1)
                            return(
                              
                                <LoanComponent item={d}></LoanComponent>
                            ) }})
      
                          }
                          {
                              loan.length == 0 &&
                              <div className="spinner-border text-primary" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </div>
                          }
                  </ul>
                 
              </div>
          </div>
      
      </div>
      </div>
      );

}
export default Loan;
import { getfacilities } from "../services/customerService";
import CardRequestComponent from "../Components/CardRequestComponent";
import { useEffect,useState } from "react";
import AppNavBar from "../layouts/app-nav-bar";
import SideNavBar from "../layouts/side-nav-bar";
function CardRequest()
{
    let [card,setCard] = useState([]);
    let [filter,setFilter] = useState("all");
  
    useEffect(()=>{
        getfacilities().then(d => setCard(d.data))
                  .catch((error) => console.error(error));          
    },[]);
    function getFilterData()
  {
    let data=[]
    if(filter =="all")
    data= card;
    else if(filter =="1")
    data=card.filter(t=>t.type==1)
    else if(filter =="2")
    data=card.filter(t=>t.type== 2)
    else if(filter =="3")
    data=card.filter(t=>t.type==3)
    
    return data;
}     


return(
    <div>
        <AppNavBar></AppNavBar>
<div className="container">

    <div className="row">
   
       <div className=" col-2 col-md-2 col-lg-2"><SideNavBar></SideNavBar></div>
        <div className="col-10 col-md-10 float-sm-end  ">
        <div className="row ms-5 text-center mt-3"><div className="col-11 col-md-10  col-lg-10 "><b className=" text-muted fs-4 text-center ">CARDS/CHEQUEBOOK REQUEST</b></div></div>
   <div className="row"> <div className="col-12 col-md-12 float-end "><select className="form-select mt-3 w-25  float-end" onChange={(event)=> setFilter(event.target.value)}>
        <option value="all">All</option>
        <option value="2">Credit Card</option>
        <option value="1">Debit Card</option>
        <option value="3">Cheque Book</option>
     </select> </div> </div>  
  <ul className="list-group list-group-flush ms-5 mt-2">
            
                {
            card.length > 0 && 
            getFilterData().map((d) => { if(d.status==1  ){
                      return(
                        
                          <CardRequestComponent item={d}></CardRequestComponent>
                      ) }})

                    }
                    {
                        card.length == 0 &&
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
export default CardRequest;
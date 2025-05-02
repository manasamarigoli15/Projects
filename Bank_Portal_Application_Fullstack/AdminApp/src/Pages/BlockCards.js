import { getfacilities } from "../services/customerService";
import CardBlockComponent from "../Components/CardBlockComponent";
import { useEffect,useState } from "react";
import AppNavBar from "../layouts/app-nav-bar";
import SideNavBar from "../layouts/side-nav-bar";
function BlockCard()
{
    let [card,setCard] = useState([]);
    let [filter,setFilter] = useState("all");
    let [cardfilter,setcardFilter] = useState("all");
  
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
    
    
    return data;
}   
function getCardData()
{
  let data1=[]
  if(cardfilter=="all")
  data1=getFilterData()
  else if(cardfilter =="1")
  data1=getFilterData().filter(t=>t.status==2)
  else if(cardfilter =="2")
  data1=getFilterData().filter(t=>t.status== 3)
  
  
  return data1;
}     
return(
<div>
        <AppNavBar></AppNavBar>
<div className="container">

    <div className="row">
   
       <div className=" col-2 col-md-2 col-lg-2"><SideNavBar></SideNavBar></div>
        <div className="col-10 col-md-10 float-sm-end  ">
        <div className="row ms-5 text-center mt-3"><div className="col-11 col-md-10  col-lg-10 "><b className=" text-muted fs-4 text-center  ">BLOCK/UNBLOCK CARDS</b></div></div>
            <div className="row ms-1 mt-2"><div className="col-8">
             
    <select className="form-select mt-2 w-50 float-end " onChange={(event)=> setFilter(event.target.value)}>
        <option value="all">All</option>
        <option value="2">Credit Card</option>
        <option value="1">Debit Card</option>
        
     </select>  </div>
    <div className="col-4 "> <select className="form-select mt-2   " onChange={(event)=> setcardFilter(event.target.value)}>
       <option value="all">All</option>
        <option value="2">UnBlock Card</option>
        <option value="1">Block Card</option>
        
     </select> </div>   </div>
  <ul className="list-group list-group-flush ms-5 mt-2">
            
                {
            card.length > 0 && 
            getCardData().map((d) => { if(d.status==2 ||d.status==3 ){
                if(d.type==1 || d.type==2)
                      return(
                        
                          <CardBlockComponent item={d}></CardBlockComponent>
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
export default BlockCard;
import { Link } from "react-router-dom";

function LoanComponent(props)
{
    return(
        <li className="list-group-item shadow mt-2 opacity-80" style={{"backgroundColor":"#F0E9D2"}}>
            <div className="row">
                                <div className="col-md-6 col-sm-12 col-lg-6"><prev>AccountNumber: {props.item.accountNo}
                                </prev><br></br>
                                {
                                    props.item.loanType==1 &&<prev>Request :<b> Personal Loan </b></prev>
                                }
                                {
                                    props.item.loanType==2 && <prev>Request :<b> Home Loan </b></prev>
                                }
                                {
                                    props.item.loanType==3 && <prev>Request :<b> Vehicle Loan </b></prev>
                                }
                                 {
                                    props.item.loanType==4 && <prev>Request :<b> Education Loan </b></prev>
                                }
                                </div>
                                { 
                                <div className="col-md-6 col-sm-12  float-end float-sm-end"><Link className="btn float-md-end mt-5 text-light float-end" to={"/view/"+ props.item.accountNo+"/"+props.item.id }  type="button" style={{"background-color":"#181D31"}}>View</Link></div>
}

                               
              </div>             
                       
        </li>
    );
}
export default LoanComponent;
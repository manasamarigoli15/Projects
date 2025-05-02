import {Route,Switch} from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import Login from "./Pages/login";
import DashBoard from './Pages/DashBoard';
import Profile from './Pages/Profile';
import CustomerAccount from './Pages/Bank_Customer_Accounts';
import PendingCustomers from './Components/PendingCustomers';
import Customersdata from './Pages/CustomersApproval';
import CustomerProfileView from './Pages/CustomerProfileView';
import DeactivatedAccount from './Pages/DeactivatedAccounts';
import Deposit from './Pages/Deposit';
import { isLoggedIn } from './services/authservice';
import EditProfileComponent from './Components/EditProfile-component';
import Reject from './Pages/RejectionReason';
import CardRequest from './Pages/CardRequest';
import Next from './Pages/Next';
import BlockCard from './Pages/BlockCards';
import Loan from './Pages/Loan';
import LoanApprovalView from './Pages/LoanApprovalView';
import LoanReject from './Pages/LoanRejection';
function App() {
  /*const getUser=()=>
  {
    return JSON.parse(localStorage.getItem("Token"));
  }*/
  let checkIsUserLoggedIn = (to,from,next) =>
{
 /* if(to.meta.auth)
  {
      if(isLoggedIn())
      {
        if(to.meta.role != null)
        {
            let user = getUser();
            let roles=to.meta.role.find(d=>user.role==d);
            if(roles)
              next();
            else
              next.redirect("/");
        }
        else
        {
          console.debug("Logged In");
          next();
        }
    }
    else
      next.redirect("/");
  }
  else
  { 
      
      console.error("Require No Authentication");
      next();
  }*/
  if(isLoggedIn())
  {
     next();
  }  
  else
    next.redirect("/login");

}
 return (
    
    <GuardProvider >
        <Switch>
          
          
          <Route path="/" component={Login} exact></Route>
          <GuardedRoute path="/dashboard" component={DashBoard} exact ></GuardedRoute>
          <GuardedRoute path="/profile" component={Profile} exact /*meta={{auth:true,role:["Admin"]}}*/></GuardedRoute>
          <GuardedRoute path="/customerAccount" component={CustomerAccount} exact /*meta={{auth:true,role:["Admin"]}}*/></GuardedRoute>
          <GuardedRoute path="/pending" component={Customersdata} exact></GuardedRoute>
          <GuardedRoute path="/pendingCustProfile/:id" component={CustomerProfileView} exact></GuardedRoute>
          <GuardedRoute path="/deactivatedAccount" component={DeactivatedAccount} exact></GuardedRoute>
          <GuardedRoute path="/editprofile" component={EditProfileComponent} exact></GuardedRoute>
          <GuardedRoute path="/deposit/:id" component={Deposit} exact></GuardedRoute>
          <GuardedRoute path="/reject/:id" component={Reject} exact></GuardedRoute>
          <GuardedRoute path="/card" component={CardRequest} exact></GuardedRoute>
          <GuardedRoute path="/next/:id" component={Next} exact></GuardedRoute>
          <GuardedRoute path="/blockcard" component={BlockCard} exact></GuardedRoute>
          <GuardedRoute path="/loan" component={Loan} exact></GuardedRoute>
          <GuardedRoute path="/view/:acc/:id" component={LoanApprovalView} exact></GuardedRoute>
          <GuardedRoute path="/loanreject/:id" component={LoanReject} exact></GuardedRoute>
          
        

        </Switch>
      </GuardProvider>

  );
}

export default App;

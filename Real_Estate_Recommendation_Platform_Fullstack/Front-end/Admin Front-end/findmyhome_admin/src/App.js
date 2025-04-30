
import AdminDashboard from "./Pages/AdminDashboard";
import CustomerQueries from "./Pages/CustomerQuery";
import { Switch } from "react-router-dom";
 import Login from './Pages/login';
import { Route } from "react-router-dom";
import { GuardedRoute, GuardProvider } from "react-router-guards";
import ViewProperty from "./Pages/ViewProperty";
import AdminProfile from "./Pages/AdminProfile";
import EditProfileComponent from "./components/editprofile-component";
import AddPropertyPage from "./Pages/AddProperty";
import EditPropertyPage from "./Pages/EditProperty";
import { isLoggedIn } from "./services/auth";
import BuyProperty from "./Pages/BuyProperty";
import SellProperty from "./Pages/SellProperty";
import Rentproperty from "./Pages/RentProperty";
import FeaturedProperty from "./Pages/FeaturedProperty";
import Query from "./Pages/Query";
import QueryDetails from "./Pages/QueryDetails";
import Requests from "./Pages/Request";

let checkIsUserLoggedIn = (to,from,next) =>
{
      if(isLoggedIn())
      {
         next();
      }
      else
        next.redirect("/");
}

function App() {
  return (
    <div className="App">
      <GuardProvider guards={[checkIsUserLoggedIn]}>
      <Switch>
      <Route path="/" component={Login} exact></Route>
        <GuardedRoute path="/dashboard" component={AdminDashboard} exact></GuardedRoute>
        <GuardedRoute path="/queries" component={CustomerQueries} exact></GuardedRoute>
        <GuardedRoute path="/featured" component={FeaturedProperty} exact></GuardedRoute>
        <GuardedRoute path="/viewproperty" component={ViewProperty} exact></GuardedRoute>
        <GuardedRoute path="/adminprofile" component={AdminProfile} exact></GuardedRoute>
        <GuardedRoute path="/editprofile/:id" component={EditProfileComponent} exact></GuardedRoute> 
        <GuardedRoute path="/addproperty" component={AddPropertyPage} exact></GuardedRoute> 
        <GuardedRoute path="/editproperty/:id" component={EditPropertyPage} exact></GuardedRoute> 
        <GuardedRoute path="/buyproperty" component={BuyProperty} exact></GuardedRoute>
        <GuardedRoute path="/sellproperty" component={SellProperty} exact></GuardedRoute>    
        <GuardedRoute path="/rentproperty" component={Rentproperty} exact></GuardedRoute>   
        <GuardedRoute path="/query" component={Query} exact></GuardedRoute>  
        <GuardedRoute path="/querydetails/:id" component={QueryDetails} exact></GuardedRoute>
        <GuardedRoute path="/request" component={Requests} exact></GuardedRoute>       
       </Switch>
      </GuardProvider>
    </div>
  );
}

export default App;

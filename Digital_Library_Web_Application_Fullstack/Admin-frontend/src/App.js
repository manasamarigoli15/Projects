import { GuardProvider, GuardedRoute } from "react-router-guards";
import { isLoggedIn } from "./services/authservice";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminProfile from "./pages/AdminProfile";
import EditProfileComponent from "./components/editprofile-component";
import ViewBooks from "./pages/ViewBooks";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import RentedBooks from "./pages/RentedBooks";
import Users from "./pages/Users";
import InventoryReport from "./pages/InventoryReport";
import BookRentalSummary from "./pages/BookRentalSummary";

let checkIsUSerLoggedIn = (to, from, next) => {
  if(isLoggedIn())
  {
    console.log("Login successful");
    next();
  }
  else
  {
    next.redirect("/");
  }
}

function App() {
  return (
    <div className="App">
      <GuardProvider guards={[checkIsUSerLoggedIn]}>
      <Switch>
        <Route path="/" component={Login} exact></Route>
        <GuardedRoute path="/dashboard" component={Dashboard} exact></GuardedRoute>
        <GuardedRoute path="/adminprofile" component={AdminProfile} exact></GuardedRoute>
        <GuardedRoute path="/editprofile/:id" component={EditProfileComponent} exact></GuardedRoute>
        <GuardedRoute path="/viewbooks" component={ViewBooks} exact></GuardedRoute>
        <GuardedRoute path="/addbook" component={AddBook} exact></GuardedRoute>
        <GuardedRoute path="/editbook/:id" component={EditBook} exact></GuardedRoute>
        <GuardedRoute path="/rentedbooks" component={RentedBooks} exact></GuardedRoute>
        <GuardedRoute path="/users" component={Users} exact></GuardedRoute>
        <GuardedRoute path="/inventory" component={InventoryReport} exact></GuardedRoute>
        <GuardedRoute path="/rentalsummary" component={BookRentalSummary} exact></GuardedRoute>
      </Switch>
      </GuardProvider>
    </div>
  );
}

export default App;

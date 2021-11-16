import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import Booking from './Pages/Shared/Booking/Booking/Booking';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute'
import MyOrder from './Pages/Shared/Booking/MyOrder/MyOrder';
import AllOrder from './Pages/Shared/Booking/AllOrder/AllOrder';
import Dashboard from './Pages/Shared/Dashboard/Dashboard/Dashboard';
import Pay from './Pages/Shared/Pay/Pay';
import Explore from './Pages/Home/Banner/Explore/Explore';
import AddReviews from './Pages/Shared/Dashboard/AddReviews/AddReviews';
import AddServices from './Pages/AddServices/AddServices';
import ManageProducts from './Pages/Shared/Dashboard/ManageProducts/ManageProducts';
import MakeAdmin from './Pages/Shared/Dashboard/MakeAdmin/MakeAdmin';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/booking/:productId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/allorder">
              <AllOrder></AllOrder>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/addproducts">
              <AddServices></AddServices>
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute exact path="/addreviews">
              <AddReviews></AddReviews>
            </PrivateRoute>
            <PrivateRoute exact path="/manageproducts">
              <ManageProducts></ManageProducts>
            </PrivateRoute>
            <PrivateRoute exact path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>



          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

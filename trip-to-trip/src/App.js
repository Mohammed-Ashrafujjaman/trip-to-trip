// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Register from './RegisterPage/RegisterPage';
import SignIn from './SignIn/SignIn';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home/Home';
import Community from './Community/Community';
import DiscoverPage from './DiscoverPage/DiscoverPage';
import AboutUs from './AboutUs/AboutUs';
import SpecialDeal from './SpecialDeal/SpecialDeal';
import Booking from './BookingPage/BookingPage';

function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Routes>
              <Route exact path="/Home" element={<Home/>}/>
              <Route exact path="/Discover" element={<DiscoverPage/>}/>
              <Route exact path='/Community' element={<Community/>}/>
              <Route exact path='/SpecialDeal' element={<SpecialDeal/>}/>
              <Route exact path='/AboutUs' element={<AboutUs/>}/>
              <Route exact path='/SignIn' element={<SignIn/>}/>
              <Route exact path='/Register' element={<Register/>}/>
              <Route exact path='/booking' element={<Booking/>}/>
              <Route exact path='/' element={<Home/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;

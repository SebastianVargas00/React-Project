import React from 'react';
import './css/App.css';
import Navbar from './components';
import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom'
import Home from './pages/Home';
import Auth from './pages/Auth';
import New_Job from './pages/New_job';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Contact from "./pages/Contact"
import Footer from "./footer/Footer"
import about_us from './pages/about_us';



function App() {
  return (
    <div>
    <Router>
     <Navbar/>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/signin" exact component={Auth}/>
       <Route path="/servicies" exact component={New_Job}/>
       <Route path="/contact-us" exact component={Contact}/>
       <Route path="/about" exact component={about_us}/> 
     </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;

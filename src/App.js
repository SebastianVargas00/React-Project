import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom'
import Home from './pages/Home';
import Auth from './pages/Auth';
function App() {
  return (
    <Router>
     <Navbar/>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/signin" exact component={Auth}/>
     </Switch>
    </Router>
  );
}

export default App;

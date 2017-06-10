import React, { Component } from 'react';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from '../Home/Home.js';
import About from '../About/About.js';
import Topics from '../Topic/Topic.js';
import AuthExample from '../Login/Login.js';


const Navbar = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/login" component={AuthExample}/>
    </div>
  </Router>
)
export default Navbar;

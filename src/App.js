import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import logo from './logo.svg';

import Home from "./pages/Home";
import Account from "./pages/Account/index.js";
import Login from "./pages/Account/login.js";
import Register from "./pages/Account/register.js";
// import Blog from "./pages/Blog";
// import Connect from "./pages/Connect";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* <Route exact path="/blog" component={Blog} />
        <Route exact path="/connect" component={Connect} /> */}
      </div>
    </Router>
  );
}

export default App;
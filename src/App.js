import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import logo from './logo.svg';

import Home from "./pages/Home";
import Account from "./pages/Account/index.js";
import Login from "./pages/Account/login.js";
import Register from "./pages/Account/register.js";
import Form from "./pages/Form";
import Habits from "./pages/Habits";
import Leaderboard from "./pages/Leaderboard";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/Habits" component={Habits} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/leaderboard" component={Leaderboard} />
      </div>
    </Router>
  );
}

export default App;
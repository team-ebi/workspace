import React, { useState } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import List from "./components/List/List";
// useContext 
import {BusinessContext} from "./components/BusinessContext/BusinessContext";
import About from "./components/About/About"
import Team from "./components/Team/Team"
import BizCard from "./components/BizCard/BizCard"
import Profile from './components/Profile/Profile'


function App() {

  const [businesses, setBusinesses] = useState([]); 

  return (
    <div className="App">
      {/* useContext */}
      <BusinessContext.Provider value={{businesses, setBusinesses}}>
      <Nav />
        <Switch>
          <Route path="/list" exact component={List} />
          <Route path="/about" exact component={About} />
          <Route path="/team" exact component={Team} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/" exact component={Search} />
        </Switch>
        </BusinessContext.Provider>
    </div>
  );
}

export default App;

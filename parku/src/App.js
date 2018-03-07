import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Find from "./pages/Find";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Form from "./components/FormBtn";
import axios from "axios";

const App = () =>
  <Router>
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/find" component={Find} />
      <Route exact path="/find" component={Form} />
      <Route exact path="/post" component={Post} />
      <Route component={NoMatch} />
    </Switch>
  </div>
  </Router>;

    


export default App;
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./pages/landing";
import Idea from "./pages/idea";
import Navbar from "./components/navbar";

import "./style/index.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/idea" component={Idea} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

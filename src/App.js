import React, { Component } from "react";
import Router from "./components/router";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="startup-header">
          <Router />
        </header>
      </div>
    );
  }
}

export default App;

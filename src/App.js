import React, { Component } from "react";
import Landing from "./pages/landing";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="startup-header">
          <Landing />
        </header>
      </div>
    );
  }
}

export default App;

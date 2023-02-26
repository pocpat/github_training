import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Count from "./Count";
import Way from "./Way";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Count></Count>
        <Way></Way>
      </header>
    </div>
  );
}

export default App;

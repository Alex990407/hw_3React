import React from "react";
import Rating from "./components/Rating";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Rating</h1>
      <Rating />
      <h1></h1>
      <List />
    </div>
  );
}

export default App;

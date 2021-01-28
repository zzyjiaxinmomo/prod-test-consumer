import React from "react";
import ReactDOM from "react-dom";
import Header from "generalui/Header";
import Input from "generalui/Input";
import "./index.css";

const App = () => (
  <div>
    <Header />
    <Input />
    Hi there, I'm React from Webpack 5.Consumer app
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

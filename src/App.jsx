import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "generalui/DatePicker";
import "./index.css";

const App = () => (
  <div>
    <DatePicker />
    Hi there, I'm React from Webpack 5.Consumer app
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

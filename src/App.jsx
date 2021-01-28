import React from "react";
import ReactDOM from "react-dom";
import Header from "header/Header";
import "./index.css";

const App = () => (
  <div>
    <Header />
    Hi there, I'm React from Webpack 5.Consumer app
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

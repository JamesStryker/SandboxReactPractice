import React from "react";
import ReactDom from "react-dom";

var yourName = "James";
var year = new Date().getFullYear();

ReactDom.render(
  <div className="App">
    <p className="heading">{yourName}</p>
    <p>{year}</p>
  </div>,
  document.getElementById("root")
);

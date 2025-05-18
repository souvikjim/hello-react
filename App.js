import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hello World"),
  React.createElement("h2", {}, "This is Jim the developer.")
);
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(header);

import React from "react";
import ReactDOM from "react-dom/client"
const heading = React.createElement(
  "h1",
  { id: "heading", dataheading: "heading-name" }, //dataheading is a custom attribute that we can give
  "Hello world from React!"
); //creates a h1 tag with content

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 from child 2"),
    React.createElement("h2", {}, "I am h2 from child 2"),
  ])]
);

const root = ReactDOM.createRoot(document.getElementById("root")); //creates a root element and remember you can have only one root element
root.render(parent); //Renders/Injects the heading inside the root element

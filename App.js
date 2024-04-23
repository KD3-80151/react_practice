
import React from "react";
//react - coming from node modules
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" }, //props- are children + attribute which I pass
//   "hello from react"
// );

// //ReactElement(Object) => is HTML that browser understands

// console.log(heading); //return object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); //render method- to take this object and put the object into heading tag and put it in the dom

// const parent = React.createElement(
//   "div",
//   { id: "parent" },[
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h1", {}, "Automatically reload by parcel"),
//     // array of children -> so all 3 come at the same level
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"), // array of children -> so all 3 come at the same level
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ])

  //to pass more sibiling to child -> convert them into array -> array of children
//]);

//Above are very lengthy so JSX (but inside is the above)

// console.log(parent); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//React.createElement- not an html but create an object and when we render this into DOM then it becomes a html element

const jsxHeading = <h1 id="heading"> This is jsx way</h1>;
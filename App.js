// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" }, //props- are children + attribute which I pass
//   "hello from react"
// );

// //ReactElement(Object) => is HTML that browser understands

// console.log(heading); //return object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); //render method- to take this object and put the object into heading tag and put it in the dom

const parent = React.createElement(
  "div",
  { id: "parent" },[
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"), // array of children -> so all 3 come at the same level
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"), // array of children -> so all 3 come at the same level
    React.createElement("h2", {}, "I'm an h2 tag"),
  ])

  //to pass more sibiling to child -> convert them into array -> array of children
]);

//Above are very lengthy so JSX (but inside is the above)

console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

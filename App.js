import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';

// Lecture 3

// Creating a React element

const heading = React.createElement("h1", {}, "Namaste React 🚀");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

//React Element
const jsxHeading = <h1 id="heading">Namaste React 🚀 using JSX</h1>;

// Babel transpiles JSX => React.createElement => react element (JS object) => rendered as html element

// root.render(jsxHeading);
console.log(jsxHeading);
console.log(jsxHeading === heading); //false as 2 objects are pointing to different memory locations

//React Component

const TitleComponent = () => (
  <h1>This title was made using react component 🚀</h1>
);

const elem = (
  <div>
    <TitleComponent /> - is a component which is being called inside a react
    element This is a react element 🚀
  </div>
);

const elem2 = (
  <div>
    {elem} - is being called inside a react element
    <h1>This is another react element 🚀</h1>
  </div>
);

const HeadingComponent = () => {
  return (
    <div id="container">
      {elem2} - is a react elem which is being called inside a react component
      <TitleComponent /> 1- is being called inside a react component
      <TitleComponent></TitleComponent>2{TitleComponent()}3{<TitleComponent />}4
      <h1 className="header">Namaste React 🚀 using React component</h1>
    </div>
  );
};

const HeadingComponent2 = () => (
  <div id="container">
    <h1 className="header">Namaste React 🚀 using React component</h1>
    {/* <TitleComponent>{elem2}</TitleComponent>  */}
    {/* elem2 not printed nothing happens if you write above code */}
  </div>
);

//Rendering a react component

// root.render(<HeadingComponent />);

//Assignment
const Logo = () => {
  return (
    <div className="logo">
      <img
        src="https://e1.pxfuel.com/desktop-wallpaper/455/160/desktop-wallpaper-god-shiva-shiva-logo.jpg"
        alt="logo"
      />
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="searchBar">
      <label className="label" htmlFor="search">
        Label
      </label>
      <input type="text" id="search" className="inputText" />
    </div>
  );
};

const UserIcon = () => {
  return (
    <div className="userIcon">
      <img
        src="https://e1.pxfuel.com/desktop-wallpaper/251/345/desktop-wallpaper-psd-universal-blue-web-user-icon.jpg"
        alt="user icon"
      />
    </div>
  );
};

const App = () => {
    return <div className="container">
        <Logo/>
        <SearchBar/>
        <UserIcon/>
    </div>
}
root.render(<App/>);


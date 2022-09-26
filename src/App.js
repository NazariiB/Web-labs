// import { Component } from "react";
import Navbar from "./containers/Navbar";
import HomePage from "./containers/HomePage";
import Footer from "./containers/Footer";

function App() {
  let component = <HomePage />;
  switch(window.location.pathname) {
    case "/":
      component = <HomePage />;
      break;
    default:
      
  }
  return <>
    <Navbar/>
    {component}
    <Footer/>
  </>
}

export default App;

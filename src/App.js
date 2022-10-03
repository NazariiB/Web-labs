// import { Component } from "react";
import Navbar from "./containers/Navbar";
import HomePage from "./containers/HomePage";
import Footer from "./containers/Footer";
import Catalog from "./containers/Catalog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
    <Route path="/">
            <Route index element={<HomePage />}></Route>
            <Route path="catalog" element={<Catalog />}></Route>
            {/* <Route path="cart" element={<Cart />}></Route> */}
            <Route path="*" element={<HomePage />}></Route>
          </Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
  </>
}

export default App;

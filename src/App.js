import Navbar from "./containers/Navbar";
import HomePage from "./containers/HomePage";
import Footer from "./containers/Footer";
import Catalog from "./containers/Catalog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemPage from "./containers/ItemPage";
import React, { useContext, useState} from "react";
import ThemeContext from "./containers/Context";
import CartPage from "./containers/CartPage";


function App() {
  return <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/catalog"  element={<Catalog />}/>
          <Route path="/home" element={<HomePage/>} />
          <Route path="*" element={<HomePage/>} />
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/itemPage/:id" element={<ItemPage />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>

}

export default App;

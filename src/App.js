// import { Component } from "react";
import Navbar from "./containers/Navbar";
import HomePage from "./containers/HomePage";
import Footer from "./containers/Footer";
import Catalog from "./containers/Catalog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemPage from "./containers/ItemPage";
import React, { useContext, useState} from "react";
import ThemeContext from "./containers/Context";


function App() {
  const[idCard, setIdcard] = useState('light');
  const[temp1, setTemp2] = useState('aaaaaaaaaaaaaaaaaa');
  let cardId = undefined;
  const setID = (id) => {
    cardId = id;
    console.log(id);
    console.log('asdasd')
  }
  return <ThemeContext.Provider value={{idCard, setIdcard}}>
    <Navbar/>
    <BrowserRouter>
      <Routes>
          <Route path="/catalog" element={<Catalog cardFun={{setTemp2}} />}/>
          <Route path="/home" element={<HomePage/>} />
          <Route path="*" element={<HomePage />}></Route>
          <Route path="/itemPage/:id" element={<ItemPage item={idCard}/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </ThemeContext.Provider>

}

export default App;

import Navbar from "./containers/Navbar";
import HomePage from "./containers/HomePage";
import Footer from "./containers/Footer";
import Catalog from "./containers/Catalog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemPage from "./containers/ItemPage";
import React, { useContext, useState} from "react";
import ThemeContext from "./containers/Context";


function App() {
  const[idCard, setIdcard] = useState('');
  return <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
          <Route path="/catalog"  element={<Catalog />}/>
          <Route path="/home" element={<HomePage/>} />
          <Route path="*" element={<HomePage />}></Route>
          <Route path="/itemPage/:id" element={<ItemPage />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </>

}

export default App;

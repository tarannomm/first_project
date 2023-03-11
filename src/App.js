import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import { Navigate, Route, Routes } from "react-router-dom";
import DetailsPage from "./components/DetailsPage";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<DetailsPage/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/" element={<Landing/>} />
        <Route path="/notfound" element={<NotFound/>}/>
        <Route path="/*" element={<Navigate to="/notfound"/>}/>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

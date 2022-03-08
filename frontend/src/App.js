import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";

import ProductDetails from "./components/Product/ProductDetails.js";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Product/Products.js";
import "./App.css";

const App = () => {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" extact element={<Home />} />
        <Route path="/product/:id" extact element={<ProductDetails />} />
        <Route path="/products" extact element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

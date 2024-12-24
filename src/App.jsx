import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/responsive.css";
import "./css/style.css";
import "./css/bootstrap.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

import "./css/font-awesome.min.css";
import Footer from "./pages/Footer";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import "./js/bootstrap";
import ProductDetail from "./pages/ProductDetail";
// import "./js/custom";
import CartCheckout from "./components/CartCheckout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";



const App = () => {
  // window.$ = window.jQuery = $;
  // console.log(window.$)
  return (
    <>
      <PayPalScriptProvider
        options={{
          "client-id": "AffwFJ8inyhJPDQmjU9w0g9o07ZQuw9hiyDfEJJUWCiGh4oXuZyHJcmqr1yYrJ9KLeQO5PSbfRl7PWvU",
          currency: "US",
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/product/:productID" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartCheckout />} />
          </Routes>
          <Footer />
        </Router>
      </PayPalScriptProvider>

      {/* <CartCheckout /> */}
    </>
  );
};

export default App;

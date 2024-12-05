import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import CartTap from "./CartTap"; // CartTap component
import Hero from "./Hero"; // Hero component

const NavBar = () => {
  // set menu
  const [menu, setMenu] = useState("Home");




  const [open, setOpen] = useState(false); // State to manage CartTap visibility
  const [totalQuality, setTotalQuality] = useState(0);

  const carts = useSelector((store) => store.cart.items);

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuality(total);
  }, [carts]);

  const handleToggleCart = () => {
    setOpen((prevState) => !prevState); // Toggle the open state
  };

  return (
    <>
      {/* Header Section */}
      <div className="hero_area">
        <header className="header_section position-relative">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link className="navbar-brand" to={"/"}>
                <img src="" alt="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav p-2">
                  <li className={`nav-item  ${menu === "Home" ? "bg-danger" : "bg-primary"}`} onClick={() => setMenu("Home")}>
                    <Link className="nav-link" to={"/"}>
                      Home <span className="sr-only bg-primary">(current)</span>
                    </Link>
                    
                  </li>
                  <li className={`nav-item dropdown ${menu === "Pages" ? "bg-danger" : ""}`} >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <span className="nav-label">
                      Pages <span className="caret"></span>
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="testimonial.html">Testimonial</a>
                    </li>
                  </ul>
                </li>
                  <li className={`nav-item ${menu === "Product" ? "bg-danger" : ""}`}>
                    <Link to={"/product"} className="nav-link">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/blog"}>
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/contact"}>
                      Contact
                    </Link>
                  </li>

                  {/* Cart Section */}
                  <li className="nav-item position-relative">
                    <button
                      type="button"
                      onClick={handleToggleCart}
                      className="position-relative"
                      style={{
                        border: "none",
                        outline: "none",
                        background: "#fff",
                        color: "#000",
                      }}
                    >
                      Cart
                      <i className="fa fa-shopping-cart p-2"></i>
                      <span
                        style={{ fontSize: "14px", color: "#fff" }}
                        className="position-absolute top-0 start-100 translate-middle bg-secondary badge rounded-pill text-bg-secondary"
                      >
                        {totalQuality}
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* CartTap Container */}
          {open && (
            <div
              style={{
                position: "absolute",
                right: "20px",
                top: "60px",
                width: "300px",
                background: "#fff",
                border: "1px solid #ddd",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                zIndex: 1000,
              }}
            >
              <CartTap closeCart={() => setOpen(false)} />
            </div>
          )}
        </header>
        <Hero />
      </div>
    </>
  );
};

export default NavBar;

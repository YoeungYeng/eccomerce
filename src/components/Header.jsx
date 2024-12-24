import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartTap from "./CartTap";

const Header = () => {
  const [open, setOpen] = useState(false); // State to manage CartTap visibility
  const [totalQuality, setTotalQuality] = useState(0);

  // set menu
  const [menu, setMenu] = useState("PRODUCT");
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
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="index.html">
              <img width="250" src={logo} alt="Logo"  style={{width: "100px", height: "100px"}} />
            </a>
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
              <ul className="navbar-nav">
                <li className={`nav-item `} onClick={() => setMenu("HOME")}>
                  {/* <a className="nav-link" href="/">
                    Home <span className="sr-only">(current)</span>
                  </a> */}
                  <Link className="nav-link " to={"/"}>
                    HOME <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
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
                <li
                  className={`nav-item  ${
                    menu === "PRODUCT" ? "bg-danger" : ""
                  }`}
                  onClick={() => setMenu("PRODUCT")}
                >
                  <Link
                    to={"/product"}
                    className="nav-link "
                    style={{ borderRadius: "5px 7px" }}
                  >
                    {" "}
                    PRODUCT{" "}
                  </Link>
                </li>
                <li
                  className={`nav-item  ${menu === "BLOG" ? "bg-danger" : ""}`}
                  onClick={() => setMenu("BLOG")}
                >
                  <Link className="nav-link" to={"/blog"}>
                    BLOG
                  </Link>
                </li>
                <li className={`nav-item  ${menu === "CONTACT" ? "bg-danger" : ""}`}
                  onClick={() => setMenu("CONTACT")}>
                  <Link className="nav-link" to={"/contact"}>
                  CONTACT
                  </Link>
                </li>
                <li className="nav-item ml-2">
                  {/* <a className="nav-link" href="#">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 456.029 456.029"
                      style={{ enableBackground: "new 0 0 456.029 456.029" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248 c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                      </g>
                      <g>
                        <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48 C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064 c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4 C457.728,97.71,450.56,86.958,439.296,84.91z" />
                      </g>
                      <g>
                        <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296 c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                      </g>
                    </svg>
                  </a> */}
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
                </li>
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
                <form className="form-inline ml-3">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

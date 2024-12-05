import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cartTab.css";
import CartCheckout from "./CartCheckout";
import { Link } from "react-router-dom";
import { addToCart, dincrease, increase, removeFromCart } from "../store/cart";

const CartTap = ({ closeCart, id }) => {
  const dispatch = useDispatch();
  const { items, totalQuality, totalAmount } = useSelector((state) => state.cart);

  // const totalAmount = cartItems.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0
  // );

  // console.log(cartItems);



  return (
    <div
      className={` content p-4 translate-middle overflow-auto hidden`}
      style={{ background: "#f2f2f2" }}
    >
      <div className="d-flex justify-content-between">
        <h2>Shopping Cart</h2>
        <button
          onClick={closeCart}
          className="btn btn-danger"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        >
          <span>
            <i class="fa-duotone fa-solid fa-xmark"></i>
          </span>
          {/* {show  ? <CartTap /> : "" } */}
        </button>
      </div>
      <hr className="border border-primary border-3 opacity-75" />
      {items.length === 0 ? (
        <p className="text-5xl text-blue-500">Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) =>(
            <div  className="d-flex  p-2 ml-2">
            <div
              className="d-flex  p-4 border "
              style={{
                marginBottom: "20px",
                marginLeft: "10px",
                width: "100%",
                borderRadius: "5px 7px",
                background: "#e6e6e6",
              }}
            >
              <img
                src={item.image}
                style={{ width: "40px", objectFit: "contain" }}
              />
              <h4 style={{ fontSize: "12px" }}>{item.category}</h4>
              {/* <p style={{ fontSize: "12px" }}>Quantity: {item.quantity}</p> */}
    
              <p style={{ marginLeft: "5px" }}>${item.price * item.quantity}</p>
              <div style={{ marginLeft: "10px", display: "flex" }}>
                <button
                  onClick={() => dispatch(dincrease({ id: item.id }))}
                  className="btn btn-primary"
                  style={{
                    width: "30px",
                    height: "30px",
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span>
                    <i class="fa-solid fa-minus"></i>
                  </span>
                </button>
                <span className="ml-2"> {item.quantity} </span>
                <button
                   onClick={() => dispatch(increase({ id: item.id }))}
                  className="btn btn-primary ml-2"
                  style={{
                    width: "30px",
                    height: "30px",
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span>
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </button>
              </div>
            </div>
            
          </div>
          ))}
        </>
      )}
      
      <div
        class=" text-center w-100  "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-xxl-12 " style={{ width: "1000%" }}>
          <div className="card w-100">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <hr />
              <p className="card-text">
                Total Items:{" "}
                ${totalQuality}
              </p>
              <p className="card-text fw-bold">Total Amount: ${totalAmount} </p>
              <Link to={"/cart"}>
                <button className="btn btn-primary w-100 mt-3">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTap;

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from './Header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dincrease, increase } from '../store/cart';
import PaymentButton from './PayPalButtons';

const CartCheckout = () => {
  const dispatch = useDispatch();
  const { items, totalQuality, totalAmount } = useSelector((state) => state.cart);

  // Handle successful payment
  const handlePaymentSuccess = (paymentDetails) => {
    console.log("Payment Successful:", paymentDetails);
    // Optional: Clear the cart after successful payment
    alert("Payment Successful! Thank you for your order.");
  };

  // Handle payment errors
  const handlePaymentError = (error) => {
    console.error("Payment Error:", error);
    alert("There was an issue with your payment. Please try again.");
  };

  return (
    <>
      <Header />
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card shopping-cart"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body text-black">
                  <div className="row">
                    {/* Left Column - Cart Items */}
                    <div className="col-lg-7 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                        Your products
                      </h3>
                      {/* Cart Items */}
                      {items.length === 0 ? (
                        <p className="text-5xl text-blue-500">
                          Your cart is empty.
                        </p>
                      ) : (
                        items.map((item) => (
                          <div
                            className="d-flex align-items-center mb-5"
                            key={item.id}
                          >
                            <div className="flex-shrink-0">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="img-fluid"
                                style={{ width: "150px" }}
                              />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h5 className="text-primary">{item.title}</h5>
                              <div className="d-flex align-items-center">
                                <p className="fw-bold mb-0 me-5 pe-3">
                                  ${item.price * item.quantity}
                                </p>
                                <button
                                  className="btn btn-secondary"
                                  onClick={() =>
                                    dispatch(dincrease({ id: item.id }))
                                  }
                                >
                                  <i className="fa fa-minus"></i>
                                </button>
                                <input
                                  type="text"
                                  className="form-control w-25 text-center mx-2"
                                  value={item.quantity}
                                  readOnly
                                />
                                <button
                                  className="btn btn-secondary"
                                  onClick={() =>
                                    dispatch(increase({ id: item.id }))
                                  }
                                >
                                  <i className="fa fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                      <hr
                        className="mb-4"
                        style={{ height: "2px", backgroundColor: "#1266f1" }}
                      />
                      <div
                        className="d-flex justify-content-between p-2 mb-2"
                        style={{ backgroundColor: "#e1f5fe" }}
                      >
                        <h5 className="fw-bold mb-0">Total:</h5>
                        <h5 className="fw-bold mb-0">${totalAmount}</h5>
                      </div>
                    </div>
                    {/* Right Column - Payment */}
                    <div className="col-lg-5 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                        Payments
                      </h3>
                      <PaymentButton
                        totalAmount={totalAmount}
                        onPaymentSuccess={handlePaymentSuccess}
                        onPaymentError={handlePaymentError}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartCheckout;

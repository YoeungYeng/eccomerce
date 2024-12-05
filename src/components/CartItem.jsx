import React from "react";
import { useSelector } from "react-redux";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="bg-primary content p-4">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 && (
        <p className="text-5xl text-blue-500">Your cart is empty.</p>
      )}
      {cartItems.map((item) => (
        <div key={item.id} className="d-flex">
          <div>
            <h4 style={{ fontSize: "14px" }}>{item.title}</h4>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price * item.quantity}</p>
          </div>
        </div>
      ))}
      <div class="row text-center">
        <div class="col">
          <button>Close</button>
        </div>
        <div class="col">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

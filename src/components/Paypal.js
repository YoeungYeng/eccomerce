import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = () => {
  return (
    <div>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons style={styles} />
      </PayPalScriptProvider>
    </div>
  );
};

export default Paypal;

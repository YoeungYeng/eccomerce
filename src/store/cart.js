import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items:  [],
    statueTab: false,
    totalQuality: 0,
    totalAmount: 0,
    searchResults: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
        toast.info(`Increased quantity of ${existingItem.price}`, {
          position: "bottom-left",
        });
      } else {
        state.items.push({ ...item, quantity: 1 });
        toast.success(`${item.price} added to the cart`, {
          position: "bottom-left",
        });
      }

      // Update totals
      state.totalQuality = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      // Update localStorage
      // localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const id = action.payload;

      state.items = state.items.filter((item) => item.id !== id);

      toast.error("Item removed from cart", {
        position: "bottom-left",
      });

      // Update totals
      state.totalQuality = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      // Update localStorage
      // localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    increase: (state, action) => {
      const cartItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
        toast.info("Increased item quantity", {
          position: "bottom-left",
        });
      }

      // Update totals
      state.totalQuality = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      // Update localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    toggleStatusTab: (state) => {
      state.statueTab = !state.statueTab;
    },
    dincrease: (state, action) => {
      const cartItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem) {
        if (cartItem.quantity > 1) {
          cartItem.quantity -= 1;
        } else {
          // Remove item if quantity reaches 0
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }

      // Update totals
      state.totalQuality = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      // Update localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    // Action to filter products by search term
    searchProduct: (state, action) =>{
      const searchIterm = action.payload.toLowerCase();
      state.searchResults = state.items.filter((product) =>(
        product.title.toLowerCase().includes(searchIterm)
      ))
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  toggleStatusTab,
  increase,
  dincrease,
  searchProduct
} = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch all products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk to fetch product detail
export const fetchProductDetail = createAsyncThunk(
  "products/fetchProductDetail",
  async (productID, { rejectWithValue }) => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${productID}`);
      console.log("Fetched product detail:", res.data);
      return res.data;
    } catch (error) {
      console.error(`Error fetching product with ID ${productID}:`, error);
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [], // List of all products
    productDetail: {}, // Details of a single product
    productsStatus: "idle", // Status for fetching products
    productDetailStatus: "idle", // Status for fetching product details
    productsError: null, // Error for products
    productDetailError: null, // Error for product detail
    
  },
  extraReducers: (builder) => {
    // Fetch all products
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productsStatus = "loading";
        state.productsError = null; // Clear previous errors
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsStatus = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productsStatus = "failure";
        state.productsError = action.payload;
      });

    // Fetch product detail
    builder
      .addCase(fetchProductDetail.pending, (state) => {
        state.productDetailStatus = "loading";
        state.productDetailError = null; // Clear previous errors
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.productDetailStatus = "succeeded";
        state.productDetail = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.productDetailStatus = "failure";
        state.productDetailError = action.payload;
      });
  },
});

export default productsSlice.reducer;

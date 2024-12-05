import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";
// import useProducts from "../store/useProducts";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cart";
import { fetchProducts } from "../store/proudctSlice";

const Product = () => {
  // const products = useProducts();
  const dispatch = useDispatch();

  // select data from api
  const { products, productsStatus } = useSelector((state) => state.products);
  // fetch api
  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, productsStatus]);

  if (productsStatus === "loading") {
    return <p>Loading...</p>;
  }

  if (productsStatus === "failure") {
    console.error("Error fetching products:", productsError);
    return <p>Error: {productsError || "Failed to load products"}</p>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <Header />
      {/* <!-- inner page section --> */}
      <section class="inner_page_head">
        <div class="container_fuild">
          <div class="row">
            <div class="col-md-12">
              <div class="full">
                <h3>Product Grid</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end inner page section --> */}
      {/* <!-- product section --> */}
      <section class="product_section layout_padding">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>
              Our <span>products</span>
            </h2>
          </div>

          <div class="row">
            {products.map((product) => (
              <div class="col-sm-6 col-md-3 col-lg-3">
                <div class="box" key={product.id}>
                  <div class="option_container">
                    <div class="options">
                      {/* <a href="" class="option1">
                      Add To Cart
                    </a> */}
                      <Link
                        className="option1"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </Link>
                      <Link to={`/product/${product.id}`} class="option2">
                        View
                      </Link>
                    </div>
                  </div>
                  <div class="img-box">
                    <img src={product.image} alt="" />
                  </div>
                  <div class="detail-box">
                    <h5> {product.title} </h5>
                    <h6>${product.price}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- end product section --> */}
    </>
  );
};

export default Product;

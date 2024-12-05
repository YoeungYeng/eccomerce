import React, { useEffect } from "react";
import slide1 from "../assets/images/arrival-bg.jpg";
import { useDispatch, useSelector } from "react-redux";

const Slider = () => {
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
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={slide1} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={slide1} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={slide1} alt="Third slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slider;

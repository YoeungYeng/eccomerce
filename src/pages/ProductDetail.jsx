import React, { useEffect } from "react";
import Header from "../components/Header";
import NewProduct from "../components/NewProduct";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../store/proudctSlice";

const ProductDetail = () => {
  
  const { productID } = useParams();
  const dispatch = useDispatch();
  const  { productDetail, productDetailStatus, } = useSelector((state) => state.products);
  
  useEffect(() =>{
    if (productDetailStatus === "idle" || productDetail.id !== parseInt(productID)) {
      dispatch(fetchProductDetail(productID));
    }
  },[dispatch, productID])
  
  if (!productID) {
    return <p>Invalid product. Please check the URL.</p>;
  }
  
  if (productDetailStatus === "loading") return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <p>Loading product details...</p>
    </div>
  );
  if (productDetailStatus === "failed") return <p>Error: {error}</p>;
  
  
  return (
    <>
      <div>
        <Header />
        {/*  */}
        <div class="container mt-5">
          <div class="row">
            {/* <!-- Product Images --> */}
            <div class="col-md-6 mb-4" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <img style={{height: "200px"}}
                src={productDetail?.image}
                alt="Product"
                class="img-fluid rounded mb-3 product-image"
                id="mainImage"
              />
            </div>

            {/* <!-- Product Details --> */}
            <div class="col-md-6">
              <h2 class="mb-3"> {productDetail?.title} </h2>
              {/* <p class="text-muted mb-4">SKU: WH1000XM4</p> */}
              <div class="mb-3">
                <span class="h4 me-2">${productDetail?.price} </span>
              </div>
              <div class="mb-3">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-half text-warning"></i>
                {/* <span class="ms-2">{productDetail?.rating} (120 reviews)</span> */}
              </div>
              <p class="mb-4">
                {productDetail?.description}
              </p>

              {/* <div class="mb-4">
                <label for="quantity" class="form-label">
                  Quantity:
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="quantity"
                  value={}
                  min="1"
                  style={{ width: "80px;" }}
                />
              </div> */}
              <button class="btn btn-primary btn-lg mb-3 me-2">
                <i class="bi bi-cart-plus"></i> Add to Cart
              </button>

              
            </div>
            
            <NewProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

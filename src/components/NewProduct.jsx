import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cart";
import { fetchProducts } from "../store/proudctSlice";




const NewProduct = () => {
  const dispatch = useDispatch();
  const { products, productsStatus, error: productsError } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (productsStatus === "idle") {
      console.log("Fetching products...");
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
    <section className="product_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Our <span>Products</span>
          </h2>
        </div>
        <div className="row">
          {products.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-4" key={product.id}>
              <div className="box">
                <div className="option_container">
                  <div className="options">
                    <Link className="option1" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </Link>
                    <Link to={`/product/${product.id}`} className="option2">
                      View
                    </Link>
                  </div>
                </div>
                <div className="img-box">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="detail-box">
                  <h5>{product.title}</h5>
                  <h6>${product.price}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProduct;

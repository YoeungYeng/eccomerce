import React from "react";
import newArrivals from "../assets/images/arrival-bg.png";


const NewArrivals = () => {
  return (
    <>
      {/* <!-- arrival section --> */}
      <section class="arrival_section">
        <div class="container">
          <div class="box">
            <div class="arrival_bg_box">
              <img src={newArrivals} alt="" />
            </div>
            <div class="row">
              <div class="col-md-6 ml-auto">
                <div class="heading_container remove_line_bt">
                  <h2>#NewArrivals</h2>
                </div>
                <p style={{ marginTop: "20px", marginBottom: "30px" }}>
                  Vitae fugiat laboriosam officia perferendis provident aliquid
                  voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic?
                  Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem
                  similique ex unde!
                </p>
                <a href="">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end arrival section --> */}
    </>
  );
};

export default NewArrivals;

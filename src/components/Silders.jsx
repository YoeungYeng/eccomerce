import React, { useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";


const Silders = () => {

  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    const carouselElement = carouselRef.current;
    const carouselInstance = new window.bootstrap.Carousel(carouselElement)
    carouselInstance.prev(); // Moves to the previous slide
  };

  const handleNextClick = () => {
    const carouselElement = carouselRef.current;
    const carouselInstance = new window.bootstrap.Carousel(carouselElement);
    carouselInstance.next(); // Moves to the next slide
  };
  
  
  
  return (
    <>
      <div id="customCarousel1" class="carousel slide" data-ride="carousel" ref={carouselRef}>
        <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container ">
                <div class="row">
                  <div class="col-md-7 col-lg-6 ">
                    <div class="detail-box">
                      <h1>
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Explicabo esse amet tempora quibusdam laudantium,
                        laborum eaque magnam fugiat hic? Esse dicta aliquid
                        error repudiandae earum suscipit fugiat molestias,
                        veniam, vel architecto veritatis delectus repellat modi
                        impedit sequi.
                      </p>
                      <div class="btn-box">
                        <a href="" class="btn1">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="container ">
                <div class="row">
                  <div class="col-md-7 col-lg-6 ">
                    <div class="detail-box">
                      <h1>
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Explicabo esse amet tempora quibusdam laudantium,
                        laborum eaque magnam fugiat hic? Esse dicta aliquid
                        error repudiandae earum suscipit fugiat molestias,
                        veniam, vel architecto veritatis delectus repellat modi
                        impedit sequi.
                      </p>
                      <div class="btn-box">
                        <a href="" class="btn1">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container ">
                <div class="row">
                  <div class="col-md-7 col-lg-6 ">
                    <div class="detail-box">
                      <h1>
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Explicabo esse amet tempora quibusdam laudantium,
                        laborum eaque magnam fugiat hic? Esse dicta aliquid
                        error repudiandae earum suscipit fugiat molestias,
                        veniam, vel architecto veritatis delectus repellat modi
                        impedit sequi.
                      </p>
                      <div class="btn-box">
                        <a href="" class="btn1">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <ul class="carousel-indicators" style={{listStyle: "none", marginLeft: "5px"}}>
              <li
                data-target="#customCarousel1"
                data-slide-to="0"
                class="active"
               
              ></li>
              <li data-target="#customCarousel1" data-slide-to="1" ></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ul>
          </div>
      </div>
    </>
  );
};

export default Silders;

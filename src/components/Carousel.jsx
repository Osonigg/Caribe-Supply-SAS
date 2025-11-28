import React from "react";

function Carousel() {
  return (
    <>
      <div id="myCarousel" class="carousel slide-stick mb-2 mb-md-6 py-0" data-bs-ride="carousel">

        {/* indicadores de slide */}
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
        </div>
        
        <div class="carousel-inner mb-2 py-2">
          <div class="carousel-item ">
            <svg aria-hidden="true" class="bd-placeholder-img" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
            </svg>
            
            <div class="container ">
              <div class="carousel-caption text-star">
                <p>
                  <a class="btn btn-primary" href="#">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div class="carousel-item">
            <svg aria-hidden="true" class="bd-placeholder-img" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
            </svg>
            
            <div class="container-md">
              <div class="carousel-caption">
                <p>
                  <a class="btn btn-primary" href="#">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div class="carousel-item active">
            <svg aria-hidden="true" class="bd-placeholder-img " height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
            </svg>
            
            <div class="container">
              <div class="carousel-caption text-end">
                <a class="btn btn-primary" href="#">
                  Browse gallery
                </a>
                
              </div>
            </div>
          </div>
        </div>
        
        {/* controles de slide */}
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
 
export default Carousel;
import React from "react";

function Carousel() {
  return (
    <>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        
        {/* indicadores de slide */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
        </div>
        
        {/* imagenes para el slide */}
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item">
            <svg aria-hidden="true" class="bd-placeholder-img" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
            </svg>
            
            <div className="carousel-caption text-star">
              <h1>Example headline.</h1>
              <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
            </div>
          </div>
          
          <div className="carousel-item">
            <svg aria-hidden="true" class="bd-placeholder-img" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
            </svg>
            
            <div class="carousel-caption">
              <h1>Another example headline.</h1>
              <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
            </div>
          </div>
          
          <div class="carousel-item active">
            <svg aria-hidden="true" class="bd-placeholder-img" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
            </svg>
            
            <div class="carousel-caption text-end">
              <h1>Another example headline.</h1>
              <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
            </div>
          </div>
        </div>
        
        {/* controles de slide */}
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>{" "}
        
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>{" "}
        </button>
      </div>
    </>
  );
}
 
export default Carousel;
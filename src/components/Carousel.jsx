import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

function Carousel() {
  return (
    <>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
       
        {/* indicadores de slide */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="active"
            aria-current="true"
          ></button>
        </div>

        {/* imagenes para el slide */}
        <div className="carousel-inner mt-md-0" role="listbox">
          <div className="carousel-item">
            <img 
              aria-hidden="true"
              className="d-block w-100 object-fit-cover"
              preserveAspectRatio="xMidYMid slice"
              src="../assets/taina.png" alt=""  height="100%"
            />

            <div className="carousel-caption  text-star p-2 mt-2">
              <h1>Example headline.</h1>
              <p>
                <Link className="btn btn-lg btn-primary" to="/register">
                  Sign up today
                </Link>
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img 
              aria-hidden="true"
              className="d-block w-100 object-fit-cover"
              preserveAspectRatio="xMidYMid slice"
              src="../assets/grecas.png" alt="" height="100%"
            />

            <div className="carousel-caption p-2 mt-2">
              <h1>Another example headline.</h1>
              <p>
                <Link className="btn btn-lg btn-primary" to="">
                  Learn more
                </Link>
              </p>
            </div>
          </div>

          <div class="carousel-item active">
            <img 
              aria-hidden="true"
              className="d-block w-100 object-fit-cover"
              preserveAspectRatio="xMidYMid slice"
              src="../assets/dominos.png" alt="" height="100%"
            />
            

            <div className="carousel-caption text-end p-2 mt-2">
              <h1>Another example headline.</h1>
              <p>
                <Link className="btn btn-lg btn-primary" to="/catalog">
                  Browse catalog
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* controles de slide */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;

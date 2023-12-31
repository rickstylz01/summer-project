import React from "react";
import './Slider.css'

const Slider = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        >
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2">
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3">
        </button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-image-container">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/slider_1.jpg'}
              className="slider-img-1 d-block w-100"
              alt="An NLU student holding a blue folder"
            />
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-image-container">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/slider_2.jpg'}
              className="slider-img-2 d-block w-100"
              alt="An image of NLU students and alumni"
            />
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-image-container">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/slider_3.jpg'}
              className="slider-img-3 d-block w-100"
              alt="People working together on laptops"
            />
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Slider;

import React from 'react';
import Slider from "react-slick";
// import { Link } from 'react-router-dom';

export default function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="main-banner" {...settings}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-content">
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}

import React from 'react';
import Slider from "react-slick";
import image1 from "../../assets/Ticket/musicfest.jpg";
import image2 from "../../assets/Ticket/success.jpeg";

export default function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [image1, image2];

  return (
    <Slider className="main-banner" {...settings}>
      {images.map((img, index) => (
        <div key={index}>
          <img
            src={img}
            alt={`Banner ${index}`}
            style={{
              width: '100%',
              height: '20rem',
              objectPosition: 'center 35%',
              // padding: '50px 0px 200px',
              objectFit: 'cover',
            }}
          />
        </div>
      ))}
    </Slider>
  );
}

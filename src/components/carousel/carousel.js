import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import Owl Carousel CSS
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Import Owl Carousel theme CSS
import ev1 from "../../assets/images/show-events-01.jpg";
import ev2 from "../../assets/images/show-events-02.jpg";
import ev3 from "../../assets/images/show-events-03.jpg";
import ev4 from "../../assets/images/show-events-04.jpg";

export default function Carousel() {
  return (
    <div className="show-events-carousel">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <OwlCarousel 
              className="owl-theme" 
              items={1} 
              loop 
              margin={10} 
              nav 
              autoplay 
              autoplayTimeout={3000} 
              autoplayHoverPause
            >
              <div className="item">
                <a href="event-details.html">
                  <img src={ev1} alt="Event 1" />
                </a>
              </div>
              <div className="item">
                <a href="event-details.html">
                  <img src={ev2} alt="Event 2" />
                </a>
              </div>
              <div className="item">
                <a href="event-details.html">
                  <img src={ev3} alt="Event 3" />
                </a>
              </div>
              <div className="item">
                <a href="event-details.html">
                  <img src={ev4} alt="Event 4" />
                </a>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

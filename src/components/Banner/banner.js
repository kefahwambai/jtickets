import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Banner() {
  const targetDate = new Date('2024-12-31T00:00:00');

  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(targetDate));

  function getTimeRemaining(targetDate) {
    const now = new Date();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="main-banner">
      <div className="counter-content">
        <ul>
          <li>Days<span id="days">{timeRemaining.days}</span></li>
          <li>Hours<span id="hours">{timeRemaining.hours}</span></li>
          <li>Minutes<span id="minutes">{timeRemaining.minutes}</span></li>
          <li>Seconds<span id="seconds">{timeRemaining.seconds}</span></li>
        </ul>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-content">
              <div className="next-show">
                <i className="fa fa-arrow-up" style={{marginTop: '1rem'}}></i>
                <span>Next Show</span>
              </div>
              <h6>Opening on Thursday, December 31st</h6>
              <h2>The Sunny Hill Festival 2024</h2>
              <div className="main-dark-button">                    
                <Link to="/tickets">Purchase Tickets</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

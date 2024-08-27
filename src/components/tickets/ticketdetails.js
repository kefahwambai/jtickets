import React, { useState } from 'react';
import tikdet from "../../assets/images/ticket-details.jpg";

export default function TicketDetails() {
  const [quantity, setQuantity] = useState(1);
  const pricePerTicket = 4000;

  const handleQuantityChange = (increment) => {
    const newQuantity = Math.max(1, quantity + increment);
    setQuantity(newQuantity);
  };

  const getTotalPrice = () => {
    return quantity * pricePerTicket;
  };

  return (
    <>
      <div className="page-heading-shows-events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Tickets On Sale Now!</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="ticket-details-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="left-image">
                <img src={tikdet} alt="Ticket Details" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-content">
                <h4>Sunny Hill Festival</h4>
                <ul>
                  <li><i className="fa fa-clock-o"></i> Thursday 18:00 to 22:00</li>
                  <li><i className="fa fa-map-marker"></i> Nairobi, Kenya</li>
                </ul>
                <div className="quantity-content">
                  <div className="left-content">
                    <h6>Standard Ticket</h6>
                    <p>Ksh: {pricePerTicket}</p>
                  </div>
                  <div className="right-content">
                    <div className="quantity buttons_added">
                      <input 
                        type="button" 
                        value="-" 
                        className="minus" 
                        onClick={() => handleQuantityChange(-1)} 
                      />
                      <input 
                        type="number" 
                        step="1" 
                        min="1" 
                        max="10" 
                        name="quantity" 
                        value={quantity} 
                        title="Qty" 
                        className="input-text qty text" 
                        size="4" 
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                      />
                      <input 
                        type="button" 
                        value="+" 
                        className="plus" 
                        onClick={() => handleQuantityChange(1)} 
                      />
                    </div>
                  </div>
                </div>
                <div className="total">
                  <h4>Total: Ksh {getTotalPrice()}</h4>
                  <div className="main-dark-button">
                    <a href="#">Purchase Tickets</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

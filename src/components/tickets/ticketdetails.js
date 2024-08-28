import React, { useState } from 'react';
import tikdet from "../../assets/Ticket/success.jpeg";

export default function TicketDetails() {
  const [quantity, setQuantity] = useState(1);
  const pricePerTicket = 1500; 

  const handleQuantityChange = (increment) => {
    const newQuantity = Math.max(1, quantity + increment);
    setQuantity(newQuantity);
  };

  const getTotalPrice = () => {
    return quantity * pricePerTicket;
  };

  return (
    <div className="ticket-details-container">
            <div className="page-heading-shows-events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2></h2>
            </div>
          </div>
        </div>
      </div>


      <div className="ticket-details-page container">
        <div className="row">
          <div className="col-lg-8">
            <div className="ticket-image">
              <img src={tikdet} alt="Ticket Details" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ticket-summary">
              <div className="date-box text-center mb-4">
                <h4 className="date-day">30</h4>
                <p className="date-month">Nov</p>
              </div>
              <h4 className="event-title">Wonderful Festival</h4>
              <p className="event-location">Alloy Bar & Lounge</p>
              <p className="event-description">South Africa's top Amapiano DJ, Success Moutang, is coming to Nairobi on November 30th. Grab your tickets and get ready for an unforgettable night of an electrifying groove!</p>

              <div className="ticket-purchase">
                <div className="quantity-section mb-3">
                  <span className="quantity-label">Advance Tickets</span>
                  <div className="quantity-buttons">
                    <button className="quantity-btn minus" onClick={() => handleQuantityChange(-1)}>-</button>
                    <input 
                      type="number" 
                      value={quantity} 
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))} 
                      className="quantity-input"
                    />
                    <button className="quantity-btn plus" onClick={() => handleQuantityChange(1)}>+</button>
                  </div>
                  <span className="ticket-price">{pricePerTicket * quantity}</span>
                </div>
                <div className="total-price-section">
                  <p className="total-label">Total</p>
                  <h4 className="total-amount">KES. {getTotalPrice()}</h4>
                </div>
                <button className="purchase-btn">Purchase Ticket</button>
              </div>

              <div className="disclaimer">
                <p>By registering and/or purchasing these ticket(s) you are agreeing to be bound by TicketFusion's <a href="#">Terms & Conditions</a>, and by the <a href="#">Privacy Policy</a>.</p>
                <p>Tickets are subject to change without notice under event organizers advisory.</p>
                <p>The organizer of this event has a no-refund and ticket change policy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

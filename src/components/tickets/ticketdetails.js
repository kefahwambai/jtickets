import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'; 
import Preloader from '../Preloader/Preloader';
import { Link } from 'react-router-dom';


export default function TicketDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1); // Default to 1 ticket
  const [selectedTicket, setSelectedTicket] = useState(null); 
  const [eventDetails, setEventDetails] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate();
  const [purchaseSuccess, setPurchaseSuccess] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/events/${id}`);  
        const eventData = response.data;
        setEventDetails(eventData);

        if (eventData.tickets.length > 0) {
          setSelectedTicket(eventData.tickets[0]); 
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event details:", error);
        setError("Failed to load event details.");
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]);

  const handleQuantityChange = (increment) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + increment)); 
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(isNaN(value) ? 1 : Math.max(1, value));
  };

  const getTotalPrice = () => {
    return quantity * parseFloat(selectedTicket?.price || 0);
  };

  const handleTicketChange = (e) => {
    const ticketId = parseInt(e.target.value);
    const ticket = eventDetails.tickets.find(t => t.id === ticketId);
    setSelectedTicket(ticket);
  };

  const handleSubmit = () => {
    if (!selectedTicket || quantity <= 0) {
      alert('Purchase Failed! You need to select a valid ticket and quantity.');
      return;
    }
  
    const totalPrice = getTotalPrice();
    navigate('/checkout', {
      state: {
        ticketId: selectedTicket.id,
        quantity,
        totalPrice,
        ticketDetails: selectedTicket
      }
    });
  };

  if (loading) {
    return <Preloader />;
  }
  if (error) return <div>{error}</div>;

  return (
    <div className="ticket-details-container" >
      <div className="page-heading-shows-events" 
      style={{
        backgroundImage: `url(http://localhost:3000${eventDetails?.image?.url || ''})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <h2>{eventDetails?.name || "Event Details"}</h2> */}
            </div>
          </div>
        </div>
      </div>

      <div className="ticket-details-page container">
        <div className="row">
          <div className="col-lg-8">
            <div className="ticket-image">
              {eventDetails?.image?.url ? (
                <img
                  src={`http://localhost:3000${eventDetails.image.url}`}
                  alt={eventDetails?.name}
                />
              ) : (
                <div>No image available for this event.</div>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ticket-summary">
              <div className="date-box text-center mb-4">
                <h4 className="date-day">{new Date(eventDetails?.date).getDate()}</h4>
                <p className="date-month">{new Date(eventDetails?.date).toLocaleString('default', { month: 'short' })}</p>
              </div>
              <h4 className="event-title">{eventDetails?.name}</h4>
              <p className="event-location">{eventDetails?.location}</p>
              <p className="event-description">{eventDetails?.description}</p>

              {eventDetails?.tickets?.length > 0 ? (
                <>
                  <div className="ticket-selection mb-3">
                    <label htmlFor="ticketType" className="ticket-label">
                      Select Ticket Type:
                    </label>
                    <select 
                      id="ticketType" 
                      className="ticket-select"
                      onChange={handleTicketChange}
                      value={selectedTicket?.id}
                    >
                      {eventDetails.tickets.map(ticket => (
                        <option key={ticket.id} value={ticket.id}>
                          {ticket.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="ticket-purchase">
                    <div className="quantity-section mb-3">
                      <span className="quantity-label">{selectedTicket?.name} Ticket(s)</span>
                      <div className="quantity-buttons">
                        <button className="quantity-btn minus" onClick={() => handleQuantityChange(-1)}>-</button>
                        <input 
                          type="number" 
                          value={quantity} 
                          onChange={handleInputChange} 
                          className="quantity-input"
                          min="1"
                        />
                        <button className="quantity-btn plus" onClick={() => handleQuantityChange(1)}>+</button>
                      </div>
                    </div>
                    <div className="total-price-section">
                      <p className="total-label">Total</p>
                      <h4 className="total-amount">KES {getTotalPrice().toFixed(2)}</h4>
                    </div>
                    <button className="purchase-btn" onClick={handleSubmit}>Purchase Ticket</button>
                  </div>
                </>
              ) : (
                <div>No tickets available for this event.</div>
              )}

              <div className="disclaimer">
                <p>By registering and/or purchasing these ticket(s), you are agreeing to be bound by TicketFusion's <Link to="/terms-and-conditons" >Terms & Conditions</Link>, and by the <Link to="/privacy-policy">Privacy Policy</Link>.</p>
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

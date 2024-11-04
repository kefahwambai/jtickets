import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Banner() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('https://ticketfusionapi.onrender.com/events');
        const events = response.data.map(event => ({
          id: event.id,
          img: event.image,
          title: event.name,
          date: event.date
        }));
        setTickets(events);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-content">
              <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                  {tickets.length > 0 ? (
                    tickets.map((ticket, index) => (
                      <div
                        key={ticket.id}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                      >
                        <div className="event-card">
                          <img
                            src={ticket.img.url}
                            alt={ticket.title}
                            className="event-image responsive-img"
                            style={{ height: '400px', objectFit: 'cover', border: 'none' }}
                          />
                          <Link to={`/tickets/${ticket.id}`} className="buy-ticket-btn">
                            <p>Buy Ticket</p>
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No events available</p>
                  )}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Preloader from '../Preloader/Preloader'; 

const ITEMS_PER_PAGE = 3;

export default function TicketsPage() {
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('Upcoming');
  const [loading, setLoading] = useState(true);

  const totalPages = Math.ceil(tickets.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('https://ticketfusionapi.onrender.com/events'); 
        const events = response.data.map(event => ({
          id: event.id,
          img: event.image, 
          title: event.name,
          description: event.description,
          location: event.location,
          date: event.date
        }));
        
        console.log(events)
        setTickets(events); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue);
    setCurrentPage(1);
  };

  const filterTickets = (ticket) => {
    if (filter === 'Upcoming') {
      return new Date(ticket.date) > new Date();
    } else if (filter === 'Past') {
      return new Date(ticket.date) < new Date();
    }
    return true;
  };

  const displayedTickets = tickets.filter(filterTickets).slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="tickets-page" style={{ marginTop: '5rem' }}>
      <div className="container">
        {/* Filter Tabs */}
        <div className="row mb-4">
          <div className="col-lg-12 text-center">
            <ul className="filter-tabs">
              <li>
                <a
                  className={`filter-tab ${filter === 'Upcoming' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('Upcoming')}
                >
                  Upcoming
                </a>
              </li>
              <li>
                <a
                  className={`filter-tab ${filter === 'Past' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('Past')}
                >
                  Past
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Render Tickets */}
        <div className="row">
          {displayedTickets.length > 0 ? (
            displayedTickets.map((ticket, index) => (
              <div className="col-lg-4 mb-4" key={index}>
                <div className="card h-100 w-75 shadow-sm">
                  <img
                    src={ticket.img.url}
                    alt={ticket.title}
                    className="card-img-top responsive-img"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <div className="date-box text-center mr-3" style={{ marginLeft: '0.4rem' }}>
                        <h4 className="mb-0">{new Date(ticket.date).getDate()}</h4>
                        <p className="mb-0 text-muted">{new Date(ticket.date).toLocaleString('default', { month: 'short' })}</p>
                      </div>
                      <div className="ml-3">
                        <h5 className="card-title mb-1">{ticket.title}</h5>
                        <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                        <h5 className="card-location">{ticket.location}</h5>
                      </div>
                    </div>
                    <Link to={`/tickets/${ticket.id}`} className="btnnn btn-block">
                      <p>Buy Ticket</p>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-lg-12 text-center">
              <p>No Events available.</p>
              <br />
              <p>All previous Events Will render here.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="row">
            <div className="col-lg-12">
              <div className="pagination">
                <ul className="pagination">
                  <li className="page-item">
                    <a href="#" className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Prev</a>
                  </li>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                      <a className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a href="#" className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

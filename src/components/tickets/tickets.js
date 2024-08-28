import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tik1 from "../../assets/Ticket/success.jpeg";


const tickets = [
  { img: tik1, title: "Success Moutang Live", description: "Saturday: 03:00 PM to 03:00 AM", location: "Alloy Bar & lounge", date: "2024-11-30" },
  // Add more tickets here to test pagination and filtering
];

const ITEMS_PER_PAGE = 3;

export default function TicketsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('Upcoming');

  const totalPages = Math.ceil(tickets.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue);
    setCurrentPage(1); // Reset to the first page when filter changes
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

  return (
    <div className="tickets-page" style={{ marginTop: '5rem' }}>
      <div className="container">
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
        <div className="row">
          {displayedTickets.map((ticket, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img src={ticket.img} alt={ticket.title} className="card-img-top" />
                <div className="card-body" >
                  <div className="d-flex align-items-center mb-2">
                    <div className="date-box text-center mr-3" style={{ marginLeft: '0.4rem'}}>
                      <h4 className="mb-0 text-danger">{new Date(ticket.date).getDate()}</h4>
                      <p className="mb-0 text-muted">{new Date(ticket.date).toLocaleString('default', { month: 'short' })}</p>
                    </div>
                    <div>
                      <h5 className="card-title mb-1">{ticket.title}</h5>
                      <p className="card-text text-muted mb-1"><i className="fa fa-map-marker"></i> {ticket.location}</p>
                      <p className="card-text text-muted"><i className="fa fa-clock-o"></i> {ticket.description}</p>
                    </div>
                  </div>
                  <Link to="/tickets" className="btn btn-danger btn-block">Buy Tickets</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

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
                      <a href="#" className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</a>
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tik1 from "../../assets/images/ticket-01.jpg";
import tik2 from "../../assets/images/ticket-02.jpg";
import tik3 from "../../assets/images/ticket-03.jpg";
import tik4 from "../../assets/images/ticket-04.jpg";
import tik5 from "../../assets/images/ticket-05.jpg";
import tik6 from "../../assets/images/ticket-06.jpg";

const tickets = [
  { img: tik1, title: "Wonderful Festival", description: "Thursday: 05:00 PM to 10:00 PM", location: "Nairobi, Kenya", ticketsLeft: "200" },
  { img: tik2, title: "Golden Festival", description: "Sunday: 06:00 PM to 09:00 PM", location: "Nairobi, Kenya", ticketsLeft: "260" },
  { img: tik3, title: "Water Splash Festival", description: "Tuesday: 07:00 PM to 11:00 PM", location: "Nairobi, Kenya", ticketsLeft: "340" },
  { img: tik4, title: "Tiger Festival", description: "Thursday: 06:40 PM to 11:40 PM", location: "Nairobi, Kenya", ticketsLeft: "420" },
  { img: tik5, title: "Woodland Festival", description: "Wednesday: 06:00 PM to 09:00 PM", location: "Nairobi, Kenya", ticketsLeft: "420" },
  { img: tik6, title: "Winter Festival", description: "Saturday: 06:00 PM to 09:00 PM", location: "Nairobi, Kenya", ticketsLeft: "520" },
];

const ITEMS_PER_PAGE = 3;

export default function TicketsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(tickets.length / ITEMS_PER_PAGE);
  
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const displayedTickets = tickets.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="tickets-page" style={{ marginTop: '5rem'}}>
      <div className="container">
        <div className="row">
          {displayedTickets.map((ticket, index) => (
            <div className="col-lg-4" key={index}>
              <div className="ticket-item">
                <div className="thumb">
                  <img src={ticket.img} alt={ticket.title} />
                </div>
                <div className="down-content">
                  {/* <span>There Are {ticket.ticketsLeft} Tickets Left For This Show</span> */}
                  <h4>{ticket.title}</h4>
                  <ul>
                    <li>
                      <i className="fa fa-clock-o"></i> {ticket.description}
                    </li>
                    <li><i className="fa fa-map-marker"></i> {ticket.location}</li>
                  </ul>
                  <div className="main-dark-button">                    
                    <a href="#">
                      <Link to="/tickets">Purchase Tickets</Link>
                    </a>                   
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div className="pagination">
              <ul>
                <li>
                  <a href="#" onClick={() => handlePageChange(currentPage - 1)}>Prev</a>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index} className={index + 1 === currentPage ? 'active' : ''}>
                    <a href="#" onClick={() => handlePageChange(index + 1)}>{index + 1}</a>
                  </li>
                ))}
                <li>
                  <a href="#" onClick={() => handlePageChange(currentPage + 1)}>Next</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

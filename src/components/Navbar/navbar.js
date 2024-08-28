import React from 'react';
import { Link } from 'react-router-dom';
import { IoTicketSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="/" className="logo">
                Ticket<em>Fusion</em>
              </Link>
              <ul className="nav">
                {/* <li>
                  <IoTicketSharp style={{ fontSize: '2rem'}} />
                  <span style={{ marginTop: '4rem'}}>Tickets</span>
                  
                </li>  */}
              </ul>        
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

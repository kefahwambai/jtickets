import React from 'react';
import { Link } from 'react-router-dom';
import { IoTicketSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
          <nav className="main-nav d-flex justify-content-between align-items-center">
              <Link to="/" className="logo">
                Ticket<em>Fusion</em>
              </Link>
              <ul className="nav">
                {/* <li>
                  <IoTicketSharp style={{ fontSize: '2rem'}} />
                  <span style={{ marginTop: '4rem'}}>Tickets</span>
                  
                </li>  */}
              </ul>      
              <h1 className="helpline">
                <a href="tel:0722222222">
                  <span>Need Help? </span> 0722222222
                </a>
              </h1>  
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

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="/" className="logo">
                J<em>Tickets</em>
              </Link>
              <ul className="nav">
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

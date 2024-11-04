import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header-area');
      if (window.scrollY > 1) {
        header.classList.add('header-blur');
      } else {
        header.classList.remove('header-blur');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header-area">
      <div className="container">
        <nav className="main-nav d-flex justify-content-between align-items-center">
          <Link to="/" className="logo">
            Ticket<em>Fusion</em>
          </Link>
          <ul className="admin-dropdown d-none d-md-block">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Organizer
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="https://ticketfusion-admin.vercel.app" target='_blank'>Admin Login</a></li>
              </ul>
            </li>
          </ul>
          <button className="menu-trigger d-md-none" onClick={() => setMenuOpen(!isMenuOpen)}>
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </nav>
        {isMenuOpen && (
          <div className="mobile-menu">
            <ul>
              <li><a href="https://ticketfusion-admin.vercel.app" target='_blank'>Admin Login</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

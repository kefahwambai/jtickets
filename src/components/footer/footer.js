import React from 'react';
import logo from "../../assets/Ticketfusion2 no bg.png";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '2rem 0' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-start mb-3 mb-lg-0">
            <img src={logo} alt="Ticketfusion Logo" className="footer-logo" />
          </div>

          <div className="col-lg-4 d-flex flex-column align-items-center mb-3 mb-lg-0">
            <h4 style={{ fontSize: '1rem', color: "grey" }}>Links</h4>
            <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="about.html" style={{ color: '#333' }}>About Us</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="privacy-policy.html" style={{ color: '#333' }}>Privacy Policy</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="terms-conditions.html" style={{ color: '#333' }}>Terms & Conditions</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="help-center.html" style={{ color: '#333' }}>Help Center</a></li>
            </ul>
          </div>

          <div className="col-lg-4 d-flex flex-column align-items-center align-items-lg-end">
            <h4 style={{ fontSize: '1rem', color: "grey" }}>Contact Us</h4>
            <address style={{ textAlign: 'center', color: '#333', lineHeight: '1.5' }}>
              Suraya Suites, Ridgeways<br />
              P.O.Box 000 - 00900 Nairobi<br />
              <strong>Telephone:</strong> 0711 111 111<br />
              <strong>Email:</strong> <a href="mailto:info@tokea.com" style={{ color: '#333' }}>info@ticketfusion.com</a>
            </address>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col text-center">
            <p style={{ fontSize: '0.875rem', color: '#666' }}>© 2024. TicketFusion! All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

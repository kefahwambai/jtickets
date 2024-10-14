import React from 'react';
import logo from "../../assets/Ticketfusion2 no bg.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
  <footer className="footer text-center py-5">
      <div className="social">
        <a href="#" className='m-5'><InstagramIcon/></a>
        <a href="#" className='mx-5'><XIcon/></a>
      </div>
      <ul className="mt-5 p-3 list-inline">
          <li className="list-inline-item mx-5"><Link to="/about-us">About</Link></li>
          <li className="list-inline-item mx-5"><Link to="/terms-and-conditons">Terms & Conditions</Link></li>
          <li className="list-inline-item mx-5"><Link to="/privacy-policy">Privacy Policy</Link></li>
      </ul>
      <p className="copyright">TicketFusion © 2024</p>
  </footer>
  );
}

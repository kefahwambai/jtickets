// import React from 'react';
// import logo from "../../assets/Ticketfusion2 no bg.png";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import XIcon from '@mui/icons-material/X';
// import { Link } from 'react-router-dom';

// export default function Footer() {
//   return (
//   <footer className="footer text-center py-5">
//       <div className="social">
//         <a href="#" className='m-5'><InstagramIcon/></a>
//         <a href="#" className='mx-5'><XIcon/></a>
//       </div>
//       <ul className="mt-5 p-3 list-inline">
//           <li className="list-inline-item mx-5"><Link to="/about-us">About</Link></li>
//           <li className="list-inline-item mx-5"><Link to="/terms-and-conditons">Terms & Conditions</Link></li>
//           <li className="list-inline-item mx-5"><Link to="/privacy-policy">Privacy Policy</Link></li>
//       </ul>
//       <p className="copyright">TicketFusion © 2024</p>
//   </footer>
//   );
// }
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const MultiColumnFooter = () => {
  return (
    <footer className="bg-light py-5">
      <Container className='text-end'>
        <Row>
          <Col md={4} sm={6} xs={12}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/about-us">About</Link></li>
            </ul>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><Link to="/terms-and-conditons">Terms & Conditions</Link></li>
              <li className='privacy-footer'><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </Col>
          <Col md={4} sm={12} xs={12}>
            <h5>Connect with Us</h5>
            <div className="social">
              <a href="#" className='m-5'><InstagramIcon/></a>
              <a href="#" className='mx-5'><XIcon/></a>
            </div>
            <p className='footer-email'>Email: <a href="mailto:info@yourcompany.com">info@ticketfusion.com</a></p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
        <hr/>
        <Row className="mt-3">
          <Col className="text-center">
            <p>TicketFusion © 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MultiColumnFooter;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Button, Form, Alert, Row, Col } from 'react-bootstrap';
import { BsPhone } from 'react-icons/bs';
import axios from 'axios';


const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { ticketId, quantity, totalPrice, ticketDetails: initialTicketDetails } = location.state || {};

  const [ticketDetails] = useState(initialTicketDetails || null);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    // if (!phone.match(/^07\d{8}$/)) {
    //   setError('Please enter a valid phone number starting with 07.');
    //   return;
    // }
  
    if (!email) {
      setError('Please enter your email.');
      return;
    }
  
    try {
      const orderData = {
        ticket_id: ticketId,
        sales_id: null, 
        phoneNumber: phone,
        email: email,
        quantity: quantity
      };
  
      const saleData = {
        event_id: 1, 
        ticket_id: ticketId,
        revenue: totalPrice,
      };
  
      // const saleResponse = await axios.post('https://ticketfusionapi.onrender.com/sales', saleData);
      
      if (orderData) {
        // orderData.sales_id = saleResponse.data.id;
  
        const orderResponse = await axios.post('https://ticketfusionapi.onrender.com/orders', { order: orderData });
  
        if (orderResponse.status === 201) {
          window.alert('Check Email for yout ticket!')
          navigate('/')
        } else {
          setError('Order creation failed. Please try again.');
        }
      } else {
        setError('Sale creation failed. Please try again.');
      }
    } catch (error) {
      console.error('Error processing order:', error);
      setError('Order processing failed.');
    }
  };
  
  

  if (!ticketDetails) {
    return <Alert variant="danger">No ticket details provided.</Alert>;
  }

  return (
    <div className="checkout-page">
      <h2 className="text-center mb-4">Secure Checkout</h2>

      <Row className="align-items-start">
        <Col md={6}>
          <div className="payment-section text-center">
            <h4>Payment Method</h4>
            <div className="payment-buttons d-flex justify-content-center mb-3">
              <Button variant="dark" className="payment-btn">
                <BsPhone className="me-2" /> Mpesa
              </Button>
            </div>

            <Form className="payment-form">
              <Form.Group className="mb-3">
                <Form.Label>Enter Phone (required)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="2547xxxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Enter Email Address (required)</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="james@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="danger" className="w-100 payment-btn" onClick={handlePayment}>
                Confirm & Pay
              </Button>
            </Form>

            {error && <Alert variant="danger" className="mt-3 text-center">{error}</Alert>}
          </div>
        </Col>

        <Col md={6}>
          <Card className="mb-4 ticket-card">
            <Card.Body>
              <Card.Title>{ticketDetails?.name} Ticket</Card.Title>
              <Card.Text>
                <strong>Price :</strong> KES {ticketDetails?.price} <br />
                <strong>Quantity:</strong> {quantity} <br />
                <strong>Total Price:</strong> KES {totalPrice}/-
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutPage;

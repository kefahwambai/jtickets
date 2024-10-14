import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>TicketFusion</h1>
      <p>
        Welcome to TicketFusion, your trusted platform for easy and seamless event ticketing. Whether you're attending a concert, sports event, or live performance, 
        our goal is to make ticket purchasing a breeze.
      </p>

      <h2>Our Mission</h2>
      <p>
        We believe that attending events should be hassle-free. Our mission is to provide a user-friendly, reliable, and secure platform where users can discover and purchase tickets to events of all kinds.
      </p>

      <h2>What We Offer</h2>
      <p>
        From major concerts to intimate gatherings, TicketFusion offers tickets to a wide range of events. We partner with event organizers to bring you the best experiences, 
        ensuring you get the most out of your entertainment journey.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li><strong>Convenience:</strong> Our platform is designed with simplicity and efficiency in mind.</li>
        <li><strong>Security:</strong> We prioritize your security, offering secure payment options and safeguarding your personal information.</li>
        <li><strong>Support:</strong> Our customer support team is available to assist you with any questions or issues.</li>
      </ul>

      <h2>Join the Community</h2>
      <p>
        TicketFusion is more than just a ticketing platform. We're a community of event-goers and organizers passionate about bringing people together. 
        Join us and be part of the experience!
      </p>

      <p style={{ marginBottom: '5rem'}}>Contact us at <a href="mailto:info@ticketfusion.com">info@ticketfusion.com</a> for more information.</p>
    </div>
  );
};

export default AboutUs;

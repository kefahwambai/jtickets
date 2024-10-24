import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>At TicketFusion, we take your privacy seriously. This policy outlines how we handle your personal information.</p>

      <h2> Data Collection</h2>
      <p>
        We collect personal information such as your name, email, phone number, and payment details when you purchase tickets.
        This information is essential for processing your orders and communicating event-related updates.
      </p>

      <h2> Data Usage</h2>
      <p>
        We use your information to process transactions, send tickets, and notify you of important event updates. 
        We may also use your data for marketing purposes, but you have the option to opt out at any time.
      </p>

      <h2>Data Sharing</h2>
      <p>
        We do not share your personal data with third parties unless required for processing transactions, legal compliance, 
        or with event organizers for event management purposes.
      </p>

      <h2>Security</h2>
      <p>
        We take appropriate measures to safeguard your information, including encryption and secure payment gateways.
      </p>

      <h2>Cookies</h2>
      <p>
        We use cookies to enhance your browsing experience. These cookies help us improve our website functionality 
        and deliver personalized content. You can manage your cookie preferences through your browser settings.
      </p>

      <h2>Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal data. To request any of these actions, please contact us at <a href="mailto:privacy@ticketfusion.com">privacy@ticketfusion.com</a>.
      </p>

      <p style={{ marginBottom: '10rem'}}>If you have any concerns about how your data is handled, please reach out to us at <a href="mailto:privacy@ticketfusion.com">privacy@ticketfusion.com</a>.</p>
    </div>
  );
};

export default PrivacyPolicy;

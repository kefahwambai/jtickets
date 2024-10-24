import React from 'react';


const TermsAndConditions = () => {
  return (
    <div className="terms-conditions-container">
      <h1>Terms and Conditions</h1>
      <p>Welcome to TicketFusion! By purchasing a ticket, you agree to the following terms:</p>

      <h2>Ticket Usage</h2>
      <p>
        Tickets purchased through our platform are non-transferable and valid only for the event listed. 
        You must present your ticket upon entry, either in digital or printed form. 
        Once scanned, the ticket will be considered redeemed and cannot be reused.
      </p>

      <h2>Refunds and Cancellations</h2>
      <p>
        All sales are final. Refunds or exchanges are only applicable in the event of event cancellation. 
        Any other reasons for a refund must be reviewed and approved by the event organizer.
      </p>

      <h2>Event Cancellation</h2>
      <p>
        In case of event cancellation, the organizer reserves the right to issue a refund or offer alternative event tickets.
        Any applicable service charges may not be refundable.
      </p>

      <h2>Liability</h2>
      <p>
        TicketFusion is not liable for any personal injury, property damage, or loss sustained by attendees during the event. 
        Attendees assume all risks associated with the event.
      </p>

      <h2>Behavior</h2>
      <p>
        We reserve the right to refuse admission or remove individuals who are disruptive, intoxicated, or violate event policies.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We may update these terms from time to time. Any changes will be posted on our website and become effective immediately.
      </p>

      <p style={{ marginBottom: '10rem'}}>If you have any questions regarding these terms, please contact our support team at <a href="mailto:support@ticketfusion.com">support@ticketfusion.com</a>.</p>
    </div>
  );
};

export default TermsAndConditions;

import React from 'react';
import './Style.css'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-text'>
        <p className='contact-text-heading'>Interested in delving deeper into the project?</p>
        <p className='contact-text-details'>
          If you'd like to explore further details about our initiatives or any
          of our affiliated brands, don't hesitate to connect. You can reach
          out to us via email at <strong>hello@abc.com</strong> or give us a
          call at <strong>+91 480 20802730</strong>.
        </p>
      </div>
      <div className='button-group'>
        <button className='skype-button'>Ring us on Skype</button>
        <button className='email-button'>Contact Us</button>
      </div>
    </div>
  );
};

export default Contact;

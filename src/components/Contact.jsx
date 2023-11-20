import React from 'react';
import '../styles/contact.scss';

function Contact() {
  return (
    <div id="#Contact" className="contact-container">
      <h1>Contact</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter valid email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            aria-describedby="subjectHelp"
            placeholder="Enter Subject"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            placeholder="Leave a message!"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;

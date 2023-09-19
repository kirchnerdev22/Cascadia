import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to send the form data to your server.
    alert('Form submitted successfully!');
    // You can also reset the form fields if needed.
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div>
      <h1>Contact Us</h1>

      <p>
        Have a question? Need a recommendation? Want to chat about coffee brewing? We’re here to help.
      </p>

      <p>
        Fill out the form on this page, or email us at{' '}
        <a href="mailto:hello@Cascadia-coffee.com">hello@crema-coffee.com</a> and we will get back to you, pronto!
      </p>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          /><br /><br />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          /><br /><br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          /><br /><br />

          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          /><br /><br />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea><br /><br />

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="map-container">
        {/* The map will be embedded here. You can use a mapping library like Google Maps or Mapbox. */}
      </div>
    </div>
  );
}

export default Contact;

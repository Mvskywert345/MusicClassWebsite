import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png'; 
import mail_icon from '../../assets/mail-icon.png'; 
import phone_icon from '../../assets/phone-icon.png';  
import location_icon from '../../assets/location-icon.png'; 
import white_arrow from '../../assets/white-arrow.png'; 

const Contact = () => {
  const [result, setResult] = useState('');

  const validateForm = (formData) => {
    const phone = formData.get("phone");
    const email = formData.get("email");
    const phonePattern = /^[0-9]{10}$/; 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!phonePattern.test(phone)) {
      return "Phone number must be exactly 10 digits.";
    }

    if (!emailPattern.test(email)) {
      return "Please enter a valid email address.";
    }

    return null; 
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "757a3ea7-dfe4-4d80-8c98-4d8bb2790113");

    const errorMessage = validateForm(formData);
    if (errorMessage) {
      setResult(errorMessage);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Email submitted successfully!");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="Message Icon" />
        </h3>
        <p>
          Contact for details, feel free to reach out through the contact form or find our contact information below.
        </p>
        <ul>
          <li><img src={mail_icon} alt="Mail Icon" className="contact-icon" /> <a href="mailto:ssrecords905@gmail.com">ssrecords905@gmail.com</a></li>
          <li><img src={phone_icon} alt="Phone Icon" className="contact-icon" /> +917055453498</li>
          <li><img src={location_icon} alt="Location Icon" className="contact-icon" /> Mewati Complex, Dhanaura Road, Chopla, Gajraula (244235) UP.</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter your name" 
            required 
          />
          
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            required 
          />

          <label htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder="Enter your 10-digit mobile number" 
            pattern="[0-9]{10}" 
            title="Phone number must be 10 digits" 
            required 
          />

          <label htmlFor="message">Write your message here</label>
          <textarea 
            id="message" 
            name="message" 
            rows="6" 
            placeholder="Enter your message" 
            required
          ></textarea>
          
          <button type="submit" className='btn dark-btn'>
            Submit now <img src={white_arrow} alt="Arrow Icon" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;

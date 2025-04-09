import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-container">
            <div className="contact-info">
              <p><strong>Phone:</strong> +959 250 899 121</p>
              <p><strong>Email:</strong> myahtutkhaung2002@gmail.com</p> 
              <p><strong>Address:</strong> North Okkalapa Township, Yangon, Myanmar</p>
            </div>

            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="text" placeholder="Subject" required />
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>
  );
};

export default Contact;

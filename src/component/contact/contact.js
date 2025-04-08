import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-container">
            <div className="contact-info">
            <p><strong>Phone:</strong> +95 9 123 456 789</p>
            <p><strong>Email:</strong> myagyi.dev@example.com</p>
            <p><strong>Address:</strong> Yangon, Myanmar</p>
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

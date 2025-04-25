import React from 'react'
import ContactForm from '../components/ContactForm'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">Get in touch with our team</p>
        </div>
      </section>
      
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Have questions or feedback? We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <h3>Address</h3>
                  <p>123 Main Street, City, Country</p>
                </div>
                
                <div className="contact-item">
                  <h3>Email</h3>
                  <p>info@example.com</p>
                </div>
                
                <div className="contact-item">
                  <h3>Phone</h3>
                  <p>+1 (123) 456-7890</p>
                </div>
                
                <div className="contact-item">
                  <h3>Working Hours</h3>
                  <p>Monday - Friday: 9am - 5pm</p>
                </div>
              </div>
              
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">Facebook</a>
                  <a href="#" className="social-icon">Twitter</a>
                  <a href="#" className="social-icon">Instagram</a>
                  <a href="#" className="social-icon">LinkedIn</a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-section">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

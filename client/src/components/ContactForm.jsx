import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill in all required fields.'
      })
      return
    }
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    })
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="contact-form-container">
      {formStatus.submitted && (
        <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
          {formStatus.message}
        </div>
      )}
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary submit-btn">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm

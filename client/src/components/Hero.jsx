import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Capstone Project</h1>
          <p className="hero-description">
            This is a responsive web application based on the low-fidelity design from Figma.
            Explore our features and content to learn more about what we offer.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">Learn More</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <span>Hero Image</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

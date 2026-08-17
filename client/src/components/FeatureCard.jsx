import React from 'react'
import './FeatureCard.css'

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        {icon || <div className="icon-placeholder">Icon</div>}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  )
}

export default FeatureCard

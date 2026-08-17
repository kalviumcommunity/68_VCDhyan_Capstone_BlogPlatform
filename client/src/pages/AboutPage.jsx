import React from 'react'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">Learn more about our mission and vision</p>
        </div>
      </section>
      
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <h2>Our Mission</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              
              <h2>Our Vision</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
            
            <div className="about-image">
              <div className="image-placeholder">About Image</div>
            </div>
          </div>
          
          <div className="team-section">
            <h2 className="team-title">Our Team</h2>
            <div className="team-grid">
              {[1, 2, 3, 4].map((member) => (
                <div key={member} className="team-member">
                  <div className="member-image">
                    <div className="image-placeholder">Photo</div>
                  </div>
                  <h3 className="member-name">Team Member {member}</h3>
                  <p className="member-position">Position</p>
                  <p className="member-bio">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

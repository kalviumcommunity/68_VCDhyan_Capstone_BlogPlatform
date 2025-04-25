import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">Capstone Project</Link>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${menuOpen ? 'active' : ''}`}></span>
        </button>
        
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link" onClick={() => setMenuOpen(false)}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

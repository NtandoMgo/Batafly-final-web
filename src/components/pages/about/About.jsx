import React from 'react'
import './About.css'
import blue_orange from '../../../assets/about_page/blu_orange.jpg'

export const About = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Values</h1>
          <p>Diversity</p>
          <p>Transparency</p>
          <p>Inclusivity</p>
          <p>Integrity</p>
          <p>Honesty</p>
          <p>Making impact</p>
        </div>
        <div className="hero-image">
          <img src={blue_orange} alt="Blue and Orange" />
        </div>
        <div className="hero-subtext">
          <p>Additional text goes here. This could be a caption, quote, or any supplementary information.</p>
        </div>
      </div>
      <div className="mission-section"></div>
      <div className="commitment"></div>
      <div className="motivation-section"></div>
    </div>
  )
}

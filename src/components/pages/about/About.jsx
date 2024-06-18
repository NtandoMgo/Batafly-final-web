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
          <p>Our purpose is to create innovation by solving most important problems in our societywithout changing our identity, traditions, cultures and religios values. </p>
          <b></b>
          <p>We believe that progress should not require sacrificing the essence of who we 
            are as a society. By embracing innovation, we strive to find groundbreaking ways 
            to tackle pressing issues without compromising the unique aspects that define us. 
          </p>
          <b></b>
          <p>This approach allows us to harness the power of creativity, technology, and 
            forward thinking ideas, while cherishing and respecting our heritage. Through 
            this balanced approach, we aim to prepare for the future and be the future, one 
            that upholds our core values and contributes to the greater good of our society, 
            without undermining the rich tapestry of our collective identity.
          </p>
        </div>
      </div>
      <div className="mission-section"></div>
      <div className="commitment"></div>
      <div className="motivation-section"></div>
    </div>
  )
}

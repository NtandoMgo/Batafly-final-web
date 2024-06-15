import React from 'react';
import './Footer.css';
import logo from '../../assets/logo/Logo.png'
import linked from '../../assets/footer/linkedIn.png'
import tiktk from '../../assets/footer/tiktok.png'
import ytb from '../../assets/footer/youtube.png'
import insta from '../../assets/footer/Instagram.png'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        {/* Logo */}
        <div className="logo-footer">
          <img src={logo} alt="Logo" />
        </div>
        {/* Subscribe section */}
        <div className="subscribe">
          <div className='sub-scribe'>Subscribe</div>
          <div className='message'>Stay in touch with our exciting insights</div>
          <div>
            <input type="email" placeholder="Enter your email" className='in-put'/>
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>

      {/* Vertical line separator */}
      <div className="separator"></div>

      <div className="footer-right">
        {/* Text links */}
        <div className="text-links">
          <a href="/contact">Let's Chat</a>
          <a href="/faq">FAQ</a>
          <a href="/#">Privacy Policy</a>
          <a href="/#">Terms of Use</a>
          <a href="/about">Vision and Mission</a>
        </div>
        {/* Social icons */}
        <div className="social-icons">
          <a href="https://www.linkedin.com"><img src={linked} alt="LinkedIn" /></a>
          <a href="https://www.twitter.com"><img src="/path/to/twitter.png" alt="Twitter" /></a>
          <a href="https://www.tiktok.com"><img src={tiktk} alt="TikTok" /></a>
          <a href="https://www.youtube.com"><img src={ytb} alt="YouTube" /></a>
          <a href="https://www.instagram.com"><img src={insta} alt="Instagram" /></a>
        </div>
      </div>
      <div className="social-icons-small">
          <a href="https://www.linkedin.com"><img src={linked} alt="LinkedIn" /></a>
          <a href="https://www.twitter.com"><img src="/path/to/twitter.png" alt="Twitter" /></a>
          <a href="https://www.tiktok.com"><img src={tiktk} alt="TikTok" /></a>
          <a href="https://www.youtube.com"><img src={ytb} alt="YouTube" /></a>
          <a href="https://www.instagram.com"><img src={insta} alt="Instagram" /></a>
        </div>

        {/* horizontal line separator */}
      
    </footer>
  );
}

export default Footer;

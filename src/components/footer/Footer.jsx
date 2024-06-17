import React from 'react';
import './Footer.css';
import logo from '../../assets/logo/Logo.png';
import linked from '../../assets/footer/linkedIn.png';
import tiktok from '../../assets/footer/tiktok.png';
import youtube from '../../assets/footer/youtube.png';
import instagram from '../../assets/footer/Instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-footer-container">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="logo" />
          <p className='subscribe-text'>Subscribe</p>
          <p className='subscribe-text2'>Stay in touch with our exciting insights</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Submit</button>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-right">
          <nav className="footer-links">
            <a href="#">Let's Chat</a>
            <a href="#">FAQ</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Vision and Mission</a>
            <a href="#">Cookies</a>
          </nav>
          <div className="social-links">
            <a href="#"><img src={linked} alt="LinkedIn" /></a>
            <a href="#"><img src={tiktok} alt="TikTok" /></a>
            <a href="#"><img src={youtube} alt="YouTube" /></a>
            <a href="#"><img src={instagram} alt="Instagram" /></a>
          </div>
        </div>
      </div>

      <hr className="footer-line" />

      <div className="footer-bottom">
        <p className="company-info">
          <span className="company-name">Spaza Sam</span> - Get your own e-commerce platform that saves time and costs
        </p>
        <p className="copyright">© Batafly (Pty). All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

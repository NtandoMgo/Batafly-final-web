import './Trending.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrow_btn from '../../../../../assets/half_arrow.png'
import { useNavigate } from 'react-router-dom';

export const Trending = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/blog');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className='trending-container'>
      <h2>TRENDING</h2>
      <div className='slider-wrapper'>
        <Slider {...settings}>
          {trends.map((d, index) => (
            <div key={index} className='trend-item'>
              <div className='trend-content'>
                <p className='trend-title'>{d.title}</p>
                <p className='trend-type'>{d.type}</p>
                <button className='half-arrow-button' onClick={handleClick}>
                  <img src={arrow_btn} alt="VIEW"/>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const trends = [
  { id: 1, title: 'Business Today', type: 'PODCAST' },
  { id: 2, title: 'Alternative of using trend lines to analyse stocks', type: 'INSIGHTS' },
  { id: 3, title: 'Mining strategies in SA', type: 'VIDEO' },
  { id: 4, title: 'AN AI construction Website for Buidit', type: 'CASE STUDY' },
  { id: 5, title: 'Economic Outlook for 2024', type: 'WEBINAR' },
  { id: 6, title: 'Sustainable Energy Solutions', type: 'ARTICLE' },
  { id: 7, title: 'Advancements in AI Technology', type: 'REPORT' },
  { id: 8, title: 'Marketing Strategies Post-Pandemic', type: 'WHITE PAPER' },
  { id: 9, title: 'Crypto Market Analysis', type: 'BLOG POST' },
  { id: 10, title: 'Customer Experience Trends', type: 'SURVEY' },
  { id: 11, title: 'Future of Remote Work', type: 'PODCAST' },
  { id: 12, title: 'Blockchain Applications in Finance', type: 'INSIGHTS' },
  { id: 13, title: 'Renewable Energy Projects', type: 'VIDEO' },
  { id: 14, title: 'AI-Powered Customer Support Systems', type: 'CASE STUDY' },
];

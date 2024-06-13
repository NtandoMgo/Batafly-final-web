import './Publication.css';
import React from 'react';
import arrow_btn from '../../../../../assets/half_arrow.png';
import photo from '../../../../../assets/trending_home_publications/photo.jpg';
import photo1 from '../../../../../assets/trending_home_publications/photo1.jpg';

const imagesData = [
  {
    id: 1,
    title: 'CASE STUDY',
    topic: 'Strategy for a mining corporation',
    img: photo
  },
  {
    id: 2,
    title: 'PUBLICATION',
    topic: 'How Top100 Fortune Companies uses AI',
    img: photo1
  },
  {
    id: 3,
    title: 'INSIGHTS',
    topic: 'Emerging trends in renewable energy',
    img: photo
  },
  {
    id: 4,
    title: 'WHITE PAPER',
    topic: 'Future of blockchain technology',
    img: photo1
  },
  {
    id: 5,
    title: 'REPORT',
    topic: 'Advancements in AI technology',
    img: photo
  }
];

export const Publication = () => {
  return (
    <div className="publication-scroll-container">
      <div className="publication-container">
        {imagesData.map((image) => (
          <div key={image.id} className="background-image" style={{ backgroundImage: `url(${image.img})` }}>
            <div className="overlay-text">
              <p className='text-top'>{image.title}</p>
              <p className='text-topic'>{image.topic}</p>
              <div className="view-btn">
                <p>VIEW</p>
                <img src={arrow_btn} alt="arrow" className='white-arrow'/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

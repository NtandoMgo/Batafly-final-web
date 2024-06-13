import './Publication.css';
import React from 'react';
import arrow_btn from '../../../../../assets/half_arrow.png'

export const Publication = () => {
  return (
    <div className="publication-container">
      <div className="background-image image1">
        <div className="overlay-text">
          <p className='text-top'>CASE STUDY</p>
          <p className='text-topic'>Strategy for a mining corporation</p>
          <div className="view-btn">
            <p>VIEW</p>
              <img src={arrow_btn} alt="" className='no-color-filter'/>
          </div>
      </div>
        </div>
          <div className="background-image image2">
            <div className="overlay-text">
              <p className='text-top'>PUBLICATION</p>
              <p className='text-topic'>How Top100 Fortune Companies are using AI</p>
              <div className="view-btn">
                <p>VIEW</p>
                  <img src={arrow_btn} alt=""/>
              </div>
            </div>
        </div>
    </div>
  );
};

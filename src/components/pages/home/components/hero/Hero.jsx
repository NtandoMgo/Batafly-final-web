import './Hero.css'
import half_arow from '../../../../../assets/arrow_btn.png'

import React from 'react'

export const Hero = () => {
  return (
    <div className='hero-content'>
      <p className='text1'>THE PODCAST</p>
      <p className='text2'>Business Today</p>
      <div className="listen-btn">
        <p>LISTEN</p>
        <img src={half_arow} alt="arrow" className='white-arrow'/>
      </div>
    </div>
  )
}


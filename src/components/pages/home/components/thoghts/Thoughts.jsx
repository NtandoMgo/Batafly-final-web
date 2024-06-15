import './Thoughts.css'
import chickens from '../../../../../assets/thoughts_home/chicken_photo.jpg'
import vr from '../../../../../assets/thoughts_home/vr_photo.jpg'

import React from 'react'

const Thoughts = () => {
  return (
    <div className="thoughts-container">
      <h1 className="topic-header">Our Thoughts Lately</h1>
      <p className="subtext">Together we can innovate and be the Future</p>
      <div className="image-container">
        <div className="image-left">
          <img src={vr} alt="VR" />
          <div className="overlay-text">
            <p className="text1">Metaverse: How to prepare your company for a virtual life</p>
            <p className="text2">Being in touch with the digital world is the first step in preparing for the future, as it is the new frontier for most organizations and clients.</p>
          </div>
        </div>
        <div className="image-right">
          <img src={chickens} alt="Chickens" />
        </div>
      </div>
      <div className="additional-text">
        <p className="text-below1">Metaverse: How to prepare your company for a virtual life</p>
        <p className="text-below2">Being in touch with the digital world is the first step in preparing for the future, as it is the new frontier for most organizations and clients.</p>
      </div>
    </div>
  )
}

export default Thoughts

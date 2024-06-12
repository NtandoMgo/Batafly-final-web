import React, { useState } from 'react'
import './Home.css'
import { Background } from './components/background/Background'
import { Hero } from './components/hero/Hero'

export const Home = () => {
    let heroData = [
        {text1:"The podcast", text2:"Business Today"}, 
        {text1: "Guest interview", text2: "Entrepreneurship insights"}, 
        {text1: "New release", text2: "Industry innovations"},
    ]
    const [heroCount, setHeroCout] = useState(2)
    const [playStatus, setPlayStatus] = useState(false)
  return (
    <div>
        <Background playStatus={playStatus} heroCount={heroCount}/>
        <Hero 
            setPlayStatus={setPlayStatus}
            heroData={heroData[heroCount]}
            heroCount={heroCount}
            setHeroCout={setHeroCout}
            playStatus={playStatus}
        />
    </div>
  )
}

import React, { useState } from 'react'
import './Home.css'
import { Background } from './components/background/Background'

export const Home = () => {
    let heroData = [
        {text1:"The podcast", text2:"Business Today"}, 
        {Text1: "Guest interview", Text2: "Entrepreneurship insights"}, 
        {Text1: "New release", Text2: "Industry innovations"},
    ]
    const [heroCount, setHeroCout] = useState(0)
    const [playStatus, setPlayStatus] = useState(false)
  return (
    <div>
        <Background playStatus={playStatus} heroCount={heroCount}/>
    </div>
  )
}

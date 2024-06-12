import React, { useEffect, useState } from 'react'
import './Home.css'
import { Background } from './components/background/Background'
import { Hero } from './components/hero/Hero'
import { Trending } from './components/trending/Trending'

export const Home = () => {
    let heroData = [
        {text1:"THE PODCAST", text2:"Business Today"}, 
        {text1: "GUEST INTERVIEW", text2: "Entrepreneurship"}, 
        {text1: "NEW RELEASE", text2: "Industry innovations"},
    ]
    const [heroCount, setHeroCout] = useState(0)
    const [playStatus, setPlayStatus] = useState(false)

    useEffect(()=>{
      setInterval(() => {
        setHeroCout((count)=>{return count===2?0:count+1})
      }, 3000);
    },[])

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
        <Trending/>
    </div>
  )
}

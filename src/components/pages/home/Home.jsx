import React, { useEffect, useState } from 'react'
import './Home.css'
import { Hero } from './components/hero/Hero'
import { Trending } from './components/trending/Trending'
import { Publication } from './components/publications/Publication'
import Thoughts from './components/thoghts/Thoughts'
import Blog from './components/blog/Blog'
import Footer from '../../footer/Footer'

export const Home = () => {
  return (
    <div className='home-container'>
      <div className='content-container'>
        <Hero className='full-height' />
        
        <Trending className='full-height' />
        <Publication className='full-height' />
        <Thoughts className='full-height' />
        <Blog className='full-height' />
        
      </div>
    </div>
  )
}
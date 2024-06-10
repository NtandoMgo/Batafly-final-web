import './App.css'
import { Navbar } from './components/nav/Navbar'
import { Routes, Route } from 'react-router'
import {About} from './components/pages/about/About'
import {Thoughts} from './components/pages/thoughts/Thoughts'
import {Services} from './components/pages/services/Services'
import {Contact} from './components/pages/contact/Contact'
import {Home} from './components/pages/home/Home'



function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/thoughts" element={<Thoughts/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App

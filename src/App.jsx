import './App.css'
import { Navbar } from './components/nav/Navbar'
import { Routes, Route } from 'react-router'
import {About, Thoughts, Services, Contact, Home} from './components/pages'
import Footer from './components/footer/Footer'



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
      <Footer/>
    </div>
  )
}

export default App

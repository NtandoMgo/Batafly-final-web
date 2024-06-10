import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
import logo from '../../assets/logo/Logo.png'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
        <Link to="/" className='logo'>
                <img src={logo} alt="Logo" className="logo-img" />
        </Link>
        <div className='menu' onClick={() => {
            setMenuOpen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/thoughts">Our Thoughts</NavLink>
            </li>
            <li>
                <NavLink to="/about">Who We Are</NavLink>
            </li>
            <li>
                <NavLink to="/services">What We Do</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Let's Talk</NavLink>
            </li>
        </ul>
    </nav>
  )
}

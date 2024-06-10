import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/thoughts">Our Thoughts</Link>
            </li>
            <li>
                <Link to="/about">Who We Are</Link>
            </li>
            <li>
                <Link to="/services">What We Do</Link>
            </li>
            <li>
                <Link to="/contact">Let's Talk</Link>
            </li>
        </ul>
    </nav>
  )
}

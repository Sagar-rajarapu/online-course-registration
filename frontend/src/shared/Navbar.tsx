import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// styles are consolidated in app.css

export default function Navbar(): JSX.Element {
  const linkClass = ({ isActive }: { isActive: boolean }) => `px-3 py-2 rounded-lg text-sm font-semibold ${isActive ? 'text-blue-700 bg-blue-50' : 'text-gray-800 hover:text-blue-700 hover:bg-blue-50'}`
  return (
    <div className="navbar">
      <Link to="/" className="flex items-center gap-2">
        <img src="/logo.PNG" className="logo" alt="logo" />
        <span className="hidden sm:block font-bold text-gray-900">LearnWithoutFees</span>
      </Link>
      <ul className="flex items-center gap-1">
        <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
        <li><NavLink to="/login" className={linkClass}>Login</NavLink></li>
        <li><NavLink to="/course" className={linkClass}>Course</NavLink></li>
        <li><NavLink to="/updates" className={linkClass}>Updates</NavLink></li>
        <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
        <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
      </ul>
    </div>
  )
}



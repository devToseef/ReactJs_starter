import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'

const Layout = () => {
  return (
    <>
      <nav className="navbar-container">
        <ul className="navbar-wrapper">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <main className="main-container">
        <Outlet />
      </main>
    </>
  )
}

export default Layout

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
const date = new Date()
const year = date.getFullYear()

  return (
    <footer className="d-flex bg-primary text-light px-2 flex-wrap justify-content-between align-items-center py-3 my-1 border-top">
    <p className="col-md-4 mb-0 ">© {year} All Rights Reserved by adev </p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="40" height="32"></svg>
    </a>
    <ul className="nav col-md-4 justify-content-end text-light">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-light">Home</Link></li>
      <li className="nav-item"><Link to="contact" className="nav-link px-2 text-light">Contact</Link></li>
      <li className="nav-item"><Link to="cart" className="nav-link px-2 text-light">Cart</Link></li>
    </ul>
  </footer>
  )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
const date = new Date()
const year = date.getFullYear()

  return (
    <footer className="d-flex bg-primary-subtle px-2 flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-body-secondary">© {year} All Rights Reserved by adev </p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    </a>
    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
      <li className="nav-item"><Link to="contact" className="nav-link px-2 text-body-secondary">Contact</Link></li>
      <li className="nav-item"><Link to="cart" className="nav-link px-2 text-body-secondary">Cart</Link></li>
    </ul>
  </footer>
  )
}

export default Footer
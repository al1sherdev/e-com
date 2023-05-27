import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="d-flex bg-primary-subtle flex-wrap justify-content-center py-3  mb-4 border-bottom">
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi " width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span className="fs-4">e-com</span>    
      </Link>

      <ul className="nav nav-pills">
        <li className="nav-item"><Link to="admin" className="nav-link active" aria-current="page">Admin</Link></li>
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="contact" className="nav-link">Contact</Link></li>
        <li className="nav-item"><Link to="cart" className="nav-link">Cart</Link></li>
        <li className="nav-item"><Link to="" className="nav-link">About</Link></li>
      </ul>
      <ul className="nav nav-pills d-none ">
        <li className="nav-item"><Link to="admin" className="nav-link" aria-current="page">Login</Link></li>
        <li className="nav-item"><Link to="/" className="nav-link">Register</Link></li>
        <li className="nav-item"><Link to="contact" className="nav-link">My orders</Link></li>
        <li className="nav-item"><Link to="contact" className="nav-link">Cart</Link></li>
      </ul>
      
    </header>
  )
}

export default Header
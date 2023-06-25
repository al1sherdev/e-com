import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';  
import { toast } from 'react-toastify';
import { auth } from '../firebase/config';

const Header = () => {

  const navigate = useNavigate()

  const logOutUser = () => {
    signOut(auth).then(() => {
      toast.success("Logout successfully")
      navigate("/login")
    }).catch((error) => {
      toast.error(error.message)
    });
  }

  return (
    <header className="d-flex bg-primary text-light flex-wrap justify-content-center py-3  mb-4 border-bottom">
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi " width="40" height="32"></svg>
        <span className="fs-4 text-light">e-com</span>    
      </Link>
     
      <ul className="nav nav-pills d-none ">
        <li className="nav-item"><Link to="/admin" className="nav-link active" aria-current="page">Admin</Link></li>
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        <li className="nav-item"><Link to="/cart" className="nav-link">Cart</Link></li>
      </ul>
      <ul className="nav nav-pills text-light ">
        <li className="nav-item"><Link to="/login" className="nav-link text-light" aria-current="page">Login</Link></li>
        <li className="nav-item"><Link to="/register" className="nav-link text-light">Register</Link></li>
        <li className="nav-item"><Link to="/my-orders" className="nav-link text-light">My orders</Link></li>
        <li className="nav-item"><Link to="/cart" className="nav-link text-light">Cart</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" onClick={logOutUser}>Logout</Link></li>

      </ul>
      
    </header>
  )
}

export default Header
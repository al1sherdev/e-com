import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import ecomLogo from '../../assets/ecommerce.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config'
import Loader from '../../components/Loader';

const Register = () => {
    const date = new Date()
    const year = date.getFullYear()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const registerUser = (e) => {
        e.preventDefault()
        if(password !== cPassword) {
            toast.error("Passwords do'nt match")
        }
        setIsLoading(true)

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            setIsLoading(false)
            toast.success("Registration Successful")
            navigate("/login")
        })
        .catch((error) => {
            toast.error(error.message)
            setIsLoading(false)
        });
    }

  return (
    <>
        <ToastContainer />
        {isLoading && <Loader />  }
        <main className="form-signin w-25 m-auto">
            <form onSubmit={registerUser} >
                <div className='d-flex justify-content-center'>
                    <img className="mb-4" src={ecomLogo} alt="" width="105" height="90" />
                </div>
                <h1 className="h3 mb-3 fw-normal text-center">Please register</h1>

                <div className="form-floating">
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email address</label>
                </div>
                <div className="form-floating">
                <input 
                    type="password" 
                    className="form-control"
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Password</label>
                </div>
                <div className="form-floating">
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    value={cPassword}
                    onChange={(e) => setCPassword(e.target.value)}    
                />
                <label>Confirm password</label>
                </div>

                <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                <p className='text-center my-2'>--or--</p>
                <button className="w-100 btn btn-lg btn-warning" type="submit">Register with Google</button>
                <p className='text-center mt-2'>Don't have an account?  
                    <Link to="/login"><span className='fw-bold ms-1 '>Login</span></Link>    
                </p>
                <p className="mt-5 mb-3 text-center text-body-secondary">© 2017–{year}</p>
            </form>
        </main>
    </>
  )
}

export default Register
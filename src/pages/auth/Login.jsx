import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ecomLogo from '../../assets/ecommerce.png';
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase/config';
import Loader from '../../components/Loader';


const Login = () => {
    const date = new Date()
    const year = date.getFullYear()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const loginUser = (e) => {
        e.preventDefault()
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setIsLoading(false)
            console.log(user.accessToken)
            toast.success("Login Successful")
            navigate('/')
        })
        .catch((error) => {
            setIsLoading(false)
            toast.error(error.message)
        });
    }

  return (
    <>
     <ToastContainer />
        {isLoading && <Loader />  }
    <main className="form-signin w-25 m-auto">
        <form onSubmit={loginUser}>
            <div className='d-flex justify-content-center'>
                <img className="mb-4" src={ecomLogo} alt="" width="105" height="90" />
            </div>
            <h1 className="h3 mb-3 fw-normal text-center">Please login</h1>

            <div className="form-floating">
            <input 
                type="email" 
                className="form-control" 
                id="floatingInput" 
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
                id="floatingPassword" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
            </div>

            <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me" /> Remember me
            </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
            <p className='text-center my-2'>--or--</p>
            <button className="w-100 btn btn-lg btn-warning" type="submit">Login with Google</button>
            <p className='text-center mt-2'>Don't have an account?  
                <Link to="/register"><span className='fw-bold ms-1 '>Register</span></Link>    
             </p>
            <p className="mt-5 mb-3 text-center text-body-secondary">© 2017–{year}</p>
        </form>
    </main>
    </>
  )
}

export default Login
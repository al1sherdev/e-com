import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Admin from "./pages/Admin";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


function App() {
  const [token, setToken] = useState()


  return (
    <>
      <Header />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/admin" element={ <Admin /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/cart" element={ <Cart /> }/>
        </Routes>
        <div>
          <Routes>
              <Route path="/login" element={ <Login /> } />
              <Route path="/register" element={ <Register/> } />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App

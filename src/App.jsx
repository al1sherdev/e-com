

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


function App() {
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
      </div>
      <Footer />
    </>
  )
}

export default App

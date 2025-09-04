import { BrowserRouter, Link, Route, Routes } from "react-router"
import Home from "./Components/Home"
import About from "./Components/About"
import Service from "./Components/Service"
import Contact from "./Components/Contact"
import { NavLink } from "react-router"
import './App.css'

let App = ()=>{
  let mystyles = {textAlign:"center", marginTop:"300px", color:"blue", fontSize:"50px"}

  return <>
    <BrowserRouter>
      <nav  className="navbar navbar-dark bg-primary navbar-expand-lg">
      <NavLink to = "/index" id="nav" className="navbar-brand ">Logo</NavLink>
      <div className="ml-auto" id="menu">
        <ul className="navbar-nav">
          <li><NavLink to = '/index' className="nav-link  color-dark">Home</NavLink></li>
          <li><NavLink to = '/about' className="nav-link">About</NavLink></li>
          <li><NavLink to = '/service' className="nav-link">Service</NavLink></li>
          <li><NavLink to = '/contact' className="nav-link">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
    <Routes>
      <Route path="/index" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/service" element = {<Service/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="*" element = {<h2 style={mystyles}>404 -Page Not Found</h2>}/>
    </Routes>
    </BrowserRouter>
  </>
}

export default App
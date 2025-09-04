import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Service from "./Components/Service"
import Contact from "./Components/Contact"

let App = ()=>{

  return <>
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to = "/index" className="navbar-brand">Logo</Link>
      <div className="ml-auto">
        <ul className="navbar-nav">
          <li><Link to = '/index' className="nav-link">Home</Link></li>
          <li><Link to = '/about' className="nav-link">About</Link></li>
          <li><Link to = '/service' className="nav-link">Service</Link></li>
          <li><Link to = '/contact' className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
    <Routes>
      <Route path="/index" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/service" element = {<Service/>}/>
      <Route path="/contact" element = {<Contact/>}/>
    </Routes>
    </BrowserRouter>
  </>
}

export default App
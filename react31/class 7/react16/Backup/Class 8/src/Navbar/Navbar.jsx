import React from 'react'
const Navbar = () => {
  return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
               <a href="/index" className='navbar-brand'>Logo</a>
               <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li><a href="/index" className='nav-link'>Home</a></li>
                    <li><a href="/about" className='nav-link'>About</a></li>
                    <li><a href="/serives" className='nav-link'>Serives</a></li>
                    <li><a href="/product" className='nav-link'>Product</a></li>
                    <li><a href="/contact" className='nav-link'>Contact</a></li>
                    <li><a href="/Employees" className='nav-link'>Employees</a></li>
                    <li><a href="/login" className='nav-link'>Login</a></li>
                </ul>
               </div>
            </nav>
}
export default Navbar

import React from 'react';
import { Link } from 'react-router-dom';

let Navbar = ()=>{

    return <div>

        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <a href="/index" className='navbar-brand'> Logo</a>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li><Link to="/index" className='nav-link'>Home</Link></li>
                    <li><Link to="/about" className='nav-link'>About</Link></li>
                    <li><Link to="/services" className='nav-link'>service</Link></li>
                </ul>
            </div>
        </nav>
    </div>
    
    
}

export default Navbar;
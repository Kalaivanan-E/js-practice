
import React from 'react';

let Navbar = ()=>{

    return <div>

        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <a href="/index" className='navbar-brand'> Logo</a>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li><a href="/index" className='nav-link'>Home</a></li>
                    <li><a href="/index" className='nav-link'>About</a></li>
                    <li><a href="/index" className='nav-link'>service</a></li>
                </ul>
            </div>
        </nav>
    </div>
    
    
}

export default Navbar;
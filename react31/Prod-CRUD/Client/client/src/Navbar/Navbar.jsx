import React from 'react'
import { NavLink } from 'react-router-dom';

let Navbar = ()=>{

  return <div> 
    
    <nav className='navbar navbar-dark bg-dark navbar expand-lg'>
    <NavLink to ='/' className='navbar-brand' style={{flex:0.4,textAlign:'center',fontSize:'25px',fontFamily:'sans-serif',fontWeight:'bold'}}>  Logo</NavLink>
    <div className=' ml-auto' style={{display:'flex',flex:'0.5',marginLeft:'300px',fontSize:'20px',fontWeight:'bold',textAlign:'center'}}>
      <ul className='navbar nav te'>
        <li><NavLink to = '/index' className='nav-link' >  Home</NavLink></li>
        <li><NavLink to = '/products' className='nav-link'> Products</NavLink></li>
        <li><NavLink to = '/admin' className='nav-link'> Admin</NavLink></li>
      </ul>
    </div>
  </nav>

  </div>


}

export default Navbar;

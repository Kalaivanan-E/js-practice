import { Link } from "react-router-dom";

let Navbar = () =>{


    return <div>

    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>     
        <Link to="/home" className=" navbar navbar-brand text-white">Logo</Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li><Link to="/home" className="nav-link">Home</Link></li>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/service" className="nav-link">Service</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
            </div>
    </nav>

</div>

    
}

export default Navbar;
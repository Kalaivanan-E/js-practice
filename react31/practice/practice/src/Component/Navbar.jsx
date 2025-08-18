import { Component } from "react";


class Navbar extends Component{


    render(){
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a href="/index" className="navbar-brand"> Logo</a>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li><a href="/index" className="nav-link">Home</a></li>
                    <li><a href="/index" className="nav-link">About</a></li>
                    <li><a href="/index" className="nav-link">Service</a></li>
                    <li><a href="/index" className="nav-link">Product</a></li>
                    <li><a href="/index" className="nav-link">Employees</a></li>
                    <li><a href="/index" className="nav-link">Contact</a></li>
                    <li><a href="/index" className="nav-link">Login</a></li>
                </ul>
            </div>
        </nav>
    }


}

export default Navbar;

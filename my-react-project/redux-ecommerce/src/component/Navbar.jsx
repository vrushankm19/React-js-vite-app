import React from 'react'
import { useSelector } from 'react-redux';  
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const items = useSelector((state)=>state.cart);
  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Redux App  </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex align-items-center" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to={"/"}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to={"/card"}>Card</NavLink>
                    </li>
                    
                </ul>
                <p className="nav-link text-light ms-auto mb-0">Items: {items.length}</p>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
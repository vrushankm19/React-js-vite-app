// React Router provides a <Link> component to create links in your application. Wherever you render a <Link>, an anchor (<a>) will be rendered in your HTML document.
// NavLink is a special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/About">About</Link>
        <Link className='link' to="/Contact">Contact</Link>
        <Link className='link' to="/Blogs">Blogs</Link>

        <br />
        <hr />

        <NavLink exact className='link' to="/" activeClassName='active'>Home</NavLink>
        <NavLink exact className='link' to="/About" activeClassName='active'>About</NavLink>
        <NavLink exact className='link' to="/Contact" activeClassName='active'>Contact</NavLink>
        <NavLink exact className='link' to="/Blogs" activeClassName='active'>Blogs</NavLink>

        <hr />
    </div>
  )
}

export default Menu
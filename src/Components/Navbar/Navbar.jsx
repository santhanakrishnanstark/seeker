import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const navbar = () => {
    return ( 
            <ul className="Navbar">
                <li><NavLink to="/" exact>about</NavLink></li>
                <li><NavLink to={{
                    pathname: '/my-projects',
                    hash: '#submit',
                    search: '?quick-submit=true'
                }}>my work</NavLink></li>
                <li><NavLink to={{
                    pathname: '/contact'
                }}>contact</NavLink></li>
            </ul>
     );
}
 
export default navbar;
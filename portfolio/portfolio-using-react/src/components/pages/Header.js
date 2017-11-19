"use strict";
import React from "react";
import {Link} from 'react-router-dom';
import { Navbar,NavbarBrand} from 'react-bootstrap';

const Header = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-default navbar-fixed-top">
            <Link to="/" class="navbar-brand">Home</Link>
            <Link to="/about" className='mr-3 pt-1'>About</Link>
            <Link to="/portfolio" className='mr-3 pt-1'>Portfolio</Link>
        </div>
    )
}

export default Header;
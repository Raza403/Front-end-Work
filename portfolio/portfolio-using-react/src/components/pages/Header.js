import React from "react";
import {Link} from 'react-router-dom';
import { Navbar,NavbarBrand,Grid } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="navbar navbar-default navbar-custom navbar-fixed-top">
            <Link to="/" class="navbar-brand">DevBros</Link>
        </div>
    )
}

export default Header;
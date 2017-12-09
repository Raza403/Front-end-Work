import React from 'react';
import {Link} from 'react-router-dom';

const Jumbotron = () => {
    return(
    <div className="jumbotron" id="jumbotron">
    <div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
    <div className="text-center">
    <p className="main-heading">Hello, I'm Ahmed Raza.</p>
        <p className="main-heading">I am Front End Developer.</p>
        <button type="button" className="btn main-btn"><Link to="/about"><span id="btn-text">View my work </span><i class="fa fa-arrow-down" aria-hidden="true"></i></Link></button>
        
    </div>
    </div>
    </div>
    </div>
    );
};

export default Jumbotron;
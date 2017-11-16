import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const HomePage = () => (
    <div className="jumbotron">
    <div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
    <div className="text-center">
    <p className="main-heading">Hello, I'm Ahmed Raza.</p>
        <p className="main-heading">I am Front End Developer.</p>
        <button type="button" className="btn main-btn"><Link to="/main">View my work</Link></button>
        
    </div>
    </div>
    </div>
    </div>
);

export default HomePage;
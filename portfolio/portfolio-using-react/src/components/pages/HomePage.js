import React from 'react';
import {Link} from 'react-router-dom';
import Jumbotron from './../container/Jumbotron';
import AboutPage from './AboutPage';
import PortfolioPage from './PortfolioPage';

const HomePage = () => (
    
    <div>
    <Jumbotron />
    <AboutPage />
    <PortfolioPage />
    </div>
);

export default HomePage;
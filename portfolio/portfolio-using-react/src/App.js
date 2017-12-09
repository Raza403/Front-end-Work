import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import PortfolioPage from './components/pages/PortfolioPage';


const App = () => <div>
  <Route path="/" exact component={HomePage} />
  <Route path="/about" exact component={AboutPage} />
  <Route path="/portfolio" exact component={PortfolioPage} />
</div>;
export default App;

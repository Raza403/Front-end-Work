import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import MainPage from './components/pages/MainPage';
import Header from './components/pages/Header';

const App = () => <div>
  <Route path="/" exact component={HomePage} />
  <Route path="/main" exact component={MainPage} />
</div>;
export default App;

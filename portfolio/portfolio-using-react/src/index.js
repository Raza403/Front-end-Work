import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App  from './App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

ReactDOM.render(<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

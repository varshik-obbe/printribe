import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

require('dotenv').config();


axios.defaults.baseURL = 'https://api.theprintribe.com/api';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
=======
import axios from 'axios';
import "dotenv";
require('dotenv').config();


>>>>>>> 9c57f01c244f652c4436fa401a50aaaff8fbe945

axios.defaults.baseURL = 'https://api.theprintribe.com/api';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import Perfil from './Pages/Perfil';
import Login from './Pages/Login';
import Facebook from './Pages/Facebook';
import Inicio from './Pages/Inicio';
import App from './Pages/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


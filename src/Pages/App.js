import React from "react";
import Perfil from './Perfil';
import Login from './Login';
import Facebook from './Facebook';
import Inicio from './Inicio';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">

        <Router>
            <div>
                <Link to="/Inicio">
                    <button>Inicio</button>
                </Link>
                <Link to="/Login">
                    <button>Login</button>
                </Link>
                <Link to="/Facebook-login">
                    <button>Facebook Login</button>
                </Link>
                <Link to="/Perfil">
                    <button>Perfil</button>
                </Link>
            </div>


            <Switch>
                <Route path="/Inicio">
                    <Inicio />
                </Route>
                <Route path="/Login"><Login /></Route>
                <Route path="/Facebook-login"><Facebook /></Route>
                <Route path="/Perfil"><Perfil /></Route>
            </Switch>

        </Router>
    </div>
  );
}

import React from 'react';

import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBookmark } from '@fortawesome/free-solid-svg-icons';

import Facas from './Pages/Facas';

import logoImg from './assets/img/logo/logoSuperNova.svg';

import './assets/css/styles.css';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/">
                <div className="wrapper">
                    <nav className="main-header navbar navbar-expand-md navbar-dark navbar-gray-dark">
                        <div className="container">
                        <Link to="/" className="navbar-brand">
                            <img src={logoImg} 
                                alt="Super Nova Logo" 
                                className="brand-image" style={{width:'300px'}} />
                        </Link>
                        <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                            <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link ButtonWhite">
                                    <FontAwesomeIcon icon={faBookmark} className="mr-1"/>  Controle de Facas
                                </Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
                    <div className="content-wrapper">
                        <Switch>
                                <Route path="/" component={Facas} />
                        </Switch>
                    </div>
                    <footer className="main-footer">
                        <div className="float-right d-none d-sm-inline">
                            All rights reserved.  - Version 2.0.0
                        </div>
                        <strong>Copyright &copy; 2017- 2020  <a href="https://www.linkedin.com/in/vitorwillian/">Vitor Willian</a>.</strong>
                    </footer>
                </div>
            </Route>
        </BrowserRouter>
    )
}

export default Routes;
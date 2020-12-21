import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css'

import logoImg from '../../assets/img/logo/logoSuperNova.svg';
import loginImg from '../../assets/img/loginImg.svg'
import entrarImg from '../../assets/img/icons/ButtonEntrar.svg'

function LoginPage(){
    return (
        <div id="page-login">
            <div className="page-login-content" id="container">
                <img src={logoImg} alt="Logo Super Nova" className="logo-img"/>
                <div className="logo-container">
                   <img src={loginImg} alt="Login Super Nova"/>
                   <form id="login-super-nova"className="LoginSuperNova" action="">
                        <div className="input-block">
                            <input type="text" className="usuario" placeholder="Usuario"/>
                            <input type="password" className="Senha"placeholder="Senha"/>
                        </div>
                        <div className="button-container">
                            <Link to="#" className="cadastrar">
                               Cadastrar-se
                            </Link>
                            <Link to="/Home" className="login">
                                <img src={entrarImg} alt="Logar"/>
                               Entrar
                            </Link>
                        </div>
                   </form>
                </div>
                <h2>Controle e Gestão para Graficas</h2>
            </div>
        </div>
    )
}
export default LoginPage;
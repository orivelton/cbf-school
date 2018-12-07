import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';
import MenuEscola from '../../assets/img/menu-a-escola.png';
import MenuParaQuem from '../../assets/img/menu-para-quem.png';
import MenuMetodologia from '../../assets/img/menu-metodologia.png';
import MenuInscricoes from '../../assets/img/menu-inscricoes.png';
import MenuContato from '../../assets/img/menu-contato.png';


import { Link } from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg fixed-top">
          <div class="container">
            <Link to="/">
              <img src={logo} alt={'Logo cbf-school'} className="img-logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarsExample07">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    <img src={MenuEscola} alt="Menu A escola" title="Menu A escola"/>
                    a escola
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link">
                  <img src={MenuParaQuem} alt="Menu para quem" title="Menu para quem" />
                    para quem
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link">
                  <img src={MenuMetodologia} alt="Menu metodologia" title="Menu metodologia" />                    
                    metodologia
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    <img src={MenuInscricoes} alt="Menu inscriçoes" title="Menu inscriçoes" />
                    inscriçoes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    <img src={MenuContato} alt="Menu Contato" title="Menu Contato" />
                    contato@cbf.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>v
      </div>
    );
  }
}

export default Menu;
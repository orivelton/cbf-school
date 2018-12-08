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
                  <Link to="/a-escola" className="nav-link" title="Menu A escola">
                    <img src={MenuEscola} alt="Menu A escola" />
                    a escola
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/para-quem" className="nav-link" title="Menu para quem">
                    <img src={MenuParaQuem} alt="Menu para quem" />
                    para quem
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/metodologia" className="nav-link" title="Menu metodologia">
                    <img src={MenuMetodologia} alt="Menu metodologia" />                    
                    metodologia
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link" title="Menu inscriçoes">
                    <img src={MenuInscricoes} alt="Menu inscriçoes" />
                    inscriçoes
                  </Link>
                </li>
                <li className="nav-item">
                  <a href={'mailto:contato@cbf.com'} className="nav-link" title="Menu Contato">
                    <img src={MenuContato} alt="Menu Contato" />
                    contato@cbf.com
                  </a>
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
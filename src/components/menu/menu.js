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
    function toogleMenu() {
      const clickMenu = document.querySelector('.navbar-toggler[aria-expanded="true"]');
      if(clickMenu) {
        clickMenu.click();
      }
    }
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <Link to="/home">
              <img src={logo} alt={'Logo cbf-school'} className="img-logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarsExample07">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" onClick={toogleMenu}>
                  <Link to="#" className="nav-link" title="Menu inscriçoes">
                    <img src={MenuInscricoes} alt="Menu inscriçoes" />
                    inscriçoes
                  </Link>
                </li>
                <li className="nav-item" onClick={toogleMenu}>
                  <a href={'mailto:contato@cbf-school.com'} className="nav-link" title="Menu Contato">
                    <img src={MenuContato} alt="Menu Contato" />
                    contato@cbf-school.com
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
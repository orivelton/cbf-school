import React, { Component } from 'react';
import ParaMetodologia from '../../assets/img/page-metodologia.jpg';
import ParaMetodologiaMobile from '../../assets/img/page-metodologia-mobile.png';

class Metodologia extends Component {
  render() {
    return (
      <>
        <img src={ ParaMetodologia } alt="Págia a escola" className='w-100 d-none d-md-block' />
        <img src={ ParaMetodologiaMobile } alt="Págia a escola" className='w-100 d-block d-sm-none' />
      </>
    );
  }
}

export default Metodologia;
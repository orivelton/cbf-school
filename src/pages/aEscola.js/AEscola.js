import React, { Component } from 'react';
import ImgPage from '../../assets/img/page-a-escola.jpg';
import ImgPage1 from '../../assets/img/page-a-escola-1.jpg';

class AEscola extends Component {
  render() {
    return (
      <>
        <img src={ ImgPage1 } alt="Págia a escola" className='w-100' />
        <img src={ ImgPage } alt="Págia a escola" className='w-100' />
      </>
    );
  }
}

export default AEscola;
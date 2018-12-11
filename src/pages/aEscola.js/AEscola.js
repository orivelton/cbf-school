import React, { Component } from 'react';
import ImgPage from '../../assets/img/page-a-escola.jpg';
import ImgPage1 from '../../assets/img/page-a-escola-1.jpg';

import ImgPageMobile from '../../assets/img/page-a-escola-mobile.jpg';
import ImgPageMobile1 from '../../assets/img/page-a-escola-mobile-1.jpg';

class AEscola extends Component {
  render() {
    return (
      <>
        <img src={ ImgPage1 } alt="Págia a escola" className='w-100 d-none d-md-block' />
        <img src={ ImgPage } alt="Págia a escola" className='w-100 d-none d-md-block' />

        <img src={ ImgPageMobile1 } alt="Págia a escola" className='w-100 d-block d-sm-none' />
        <img src={ ImgPageMobile } alt="Págia a escola" className='w-100 d-block d-sm-none' />
      </>
    );
  }
}

export default AEscola;
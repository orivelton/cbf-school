import React, { Component } from 'react';
import ParaQuemImg from '../../assets/img/page-para-quem.jpg';
import ParaQuemImgMobile from '../../assets/img/page-para-quem-mobile.jpg';

class ParaQuem extends Component {
  render() {
    return (
      <>
        <img src={ ParaQuemImg } alt="Págia a escola" className='w-100 d-none d-md-block' />
        <img src={ ParaQuemImgMobile } alt="Págia a escola" className='w-100 d-block d-sm-none' />
      </>
    );
  }
}

export default ParaQuem;
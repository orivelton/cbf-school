import React, { Component } from 'react';
import imgHome from '../../assets/img/home.jpg'
import imgHomeMobile from '../../assets/img/home-mobile.jpg'

class Home extends Component {
  render() {
    return (
      <>
        <img src={ imgHome } alt={'Imagem da home'} className='w-100 d-none d-md-block'/>
        <img src={ imgHomeMobile } alt={'Imagem da home'} className='w-100 d-block d-sm-none'/>
      </>
    );
  }
}

export default Home;
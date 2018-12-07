import React, { Component } from 'react';
import imgHome from '../../assets/img/home.jpg'

class Home extends Component {
  render() {
    return (
      <>
        <img src={ imgHome } alt={'Imagem da home'} className='w-100'/>
      </>
    );
  }
}

export default Home;
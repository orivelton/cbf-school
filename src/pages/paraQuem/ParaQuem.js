import React, { Component } from 'react';
import ParaQuemImg from '../../assets/img/page-para-quem.jpg';

class ParaQuem extends Component {
  render() {
    return (
      <>
        <img src={ ParaQuemImg } alt="Págia a escola" className='w-100' />
      </>
    );
  }
}

export default ParaQuem;
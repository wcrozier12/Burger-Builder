import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const Logo = (props) => {
  return (
    <div className='Logo'>
    <img src={burgerLogo} alt='burgerLogo' /> 
  </div>
  )
}

export default Logo;
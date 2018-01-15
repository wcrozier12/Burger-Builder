import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css';
const Toolbar = (props) => {
  return(
    <header style={style}className='Toolbar'>
      <div> Menu </div>
      <div style={{height: '80%'}}>
        <Logo />
      </div>
      <nav className='DesktopOnly'>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Toolbar;
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle.js';
import './Toolbar.css';
const Toolbar = ({ toggle }) => {
  return(
    <header className='Toolbar'>
      <DrawerToggle clicked={toggle} />
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
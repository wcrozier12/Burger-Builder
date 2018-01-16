import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../HOCs/Aux/Aux';
import './SideDrawer.css';

const SideDrawer = ({ closed, open }) => {
  let attachedClasses = ['SideDrawer', 'Close']
  open ? attachedClasses = ['SideDrawer', 'Open'] : attachedClasses = ['SideDrawer', 'Close']
  return (
    <Aux>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(' ')}> 
        <div style={{height: '11%', marginBottom: '32px'}}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default SideDrawer;
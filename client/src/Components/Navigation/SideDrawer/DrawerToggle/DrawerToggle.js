import React from 'react';
import './DrawerToggle.css';

const DrawerToggle = ({ clicked }) => {
  return (
      <div className='DrawerToggle' onClick={clicked}>
        <div></div>
        <div></div>
        <div></div>
      </div>
  )
}

export default DrawerToggle;
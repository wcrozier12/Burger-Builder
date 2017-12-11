import React from 'react';
import Aux from '../../HOCs/Aux';
import './Layout.css';

const Layout = (props) => (
  <Aux>
    <div>Toolbar, Sidedrawer, Backdrop </div>
    <main className='Content'>
      {props.children}
    </main>
  </Aux>
);

export default Layout;
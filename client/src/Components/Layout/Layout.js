import React from 'react';
import Aux from '../../HOCs/Aux';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import './Layout.css';

const Layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className='Content'>
      {props.children}
    </main>
  </Aux>
);

export default Layout;
import React from 'react';
import Aux from '../../HOCs/Aux';

const Layout = (props) => (
  <Aux>
    <div>Toolbar, Sidedrawer, Backdrop </div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default Layout;
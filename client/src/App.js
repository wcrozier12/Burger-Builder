import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import Layout from './HOCs/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import Orders from './Containers/Orders/Orders';
import Auth from './Containers/Auth/Auth';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/auth' component={Auth} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/orders' component={Orders} />
            <Route path='/' component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

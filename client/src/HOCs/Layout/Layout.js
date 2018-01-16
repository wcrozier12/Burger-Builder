import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import './Layout.css';

class Layout extends Component {
  state = { 
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }
  render() {
    return (
      <Aux>
        <Toolbar toggle={this.sideDrawerToggleHandler} />
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer} />
        <main className='Content'>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}


export default Layout;
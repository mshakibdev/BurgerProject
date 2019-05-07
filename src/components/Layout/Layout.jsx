import React, { Component } from 'react'
import Aux from '../../hoc/Auxi'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import CssClasses from './Layout.module.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state ={
    showSideDrawer : true
  }

  SideDrawerCancelHandler  = () => {
    this.setState({showSideDrawer :false})
  }
   
  

  render () {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer open={this.state.showSideDrawer} closed = {this.SideDrawerCancelHandler} />
        <main className={CssClasses.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}
export default Layout

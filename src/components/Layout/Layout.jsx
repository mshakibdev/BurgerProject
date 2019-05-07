import React from 'react'

import Aux from '../../hoc/Auxi'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import CssClasses from './Layout.module.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={CssClasses.Content}>
      {props.children}
    </main>
  </Aux>
)

export default layout

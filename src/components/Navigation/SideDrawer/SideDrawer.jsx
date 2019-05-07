import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItens from '../NavigationItems/NavigationItems'
import CssClasses from './SideDrawer.module.css'
const sideDrawer = () => {
  return (
    <div className={CssClasses.SideDrawer}>
      <div className={CssClasses.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItens />
      </nav>
    </div>
  )
}

export default sideDrawer

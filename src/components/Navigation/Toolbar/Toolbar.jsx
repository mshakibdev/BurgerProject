import React from 'react'
import CssClasses from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
  <header className={CssClasses.Toolbar}>
    <div>Menu</div>
    <div className = {CssClasses.Logo}>
      <Logo />
    </div>
    <nav className={CssClasses.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar

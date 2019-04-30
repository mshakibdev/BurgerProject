import React from 'react';
import CssClasses from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
const toolbar = (props) =>  (
    <header className={CssClasses.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
        ....
        </nav>
    </header>
  )


export default toolbar

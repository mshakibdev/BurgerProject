import React from 'react';
import bugerLogo from "../../assets/images/127 burger-logo.png";
import CssClasses from "./Logo.module.css";
const logo = (props) =>  (
    <div className ={CssClasses.Logo}>
      <img src={bugerLogo} alt="Shakibs Burger"/>
    </div>
  )


export default logo

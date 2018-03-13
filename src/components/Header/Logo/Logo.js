import React from 'react';
import classes from './Logo.css';
import LogoIcon from './Logo-nordia.png';

const Logo = () => (
  <div className={classes.Logo}>
    <img src={LogoIcon} alt="Icon" />
  </div>
);

export default Logo;

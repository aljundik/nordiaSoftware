import React from 'react';
import classes from './Header.css';
import Logo from './Logo/Logo';

const Header = () => (
  <div className={classes.Header}>
    <Logo />
  </div>
);

export default Header;

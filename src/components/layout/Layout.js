import React from 'react';
import Header from '../Header/Header';
import classes from './Layout.css';
import Content from '../Content/Content';

const Layout = () => (
  <div className={classes.Layout}>
    <Header />
    <Content />
  </div>
);

export default Layout;

import React from 'react';
import classes from './Content.css';
import Form from '../../components/Form/Form';
import TableList from '../TableList/TableList';


const Content = () => (
  <div className={classes.Content}>
    <h1>List of participants</h1>
    <Form />
    <TableList />
  </div>
);

export default Content;

import React from 'react';
import classes from './Content.css';
import Form from '../../components/Form/Form';
import TableListContainer from '../../containers/TableListContainer/TableListContainer';


const Content = () => (
  <div className={classes.Content}>
    <h1>List of participants</h1>
    <Form />
    <TableListContainer />
  </div>
);

export default Content;

import React from 'react';
import classes from './Content.css';
import FormContainer from '../../containers/FormContainer/FormContainer';
import TableListContainer from '../../containers/TableListContainer/TableListContainer';


const Content = () => (
  <div className={classes.Content}>
    <h1>List of participants</h1>
    <FormContainer />
    <TableListContainer />
  </div>
);

export default Content;

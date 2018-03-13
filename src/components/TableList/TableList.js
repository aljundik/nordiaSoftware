import React from 'react';
import classes from './TableList.css';

const TableList = () => (
  <table className={classes.TableList}>
    <thead>
      <tr>
        <th>Name<div className={classes.Icon}><i className="fas fa-arrow-down Icon" /></div></th>
        <th>E-mail address</th>
        <th>Phone number</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Khaled Aljundi</td>
        <td>aljundi@test.com</td>
        <td>12345678</td>
        <td>
          <div className={classes.Options}>
            <div className={classes.Option1}><i className="fas fa-pencil-alt" /></div>
            <div className={classes.Option2}><i className="fas fa-trash" /></div>
          </div>
        </td>
      </tr>
    </tbody>

  </table>
);

export default TableList;

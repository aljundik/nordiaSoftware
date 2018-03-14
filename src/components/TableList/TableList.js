import React from 'react';
import PropTypes from 'prop-types';
import classes from './TableList.css';
import MemberRow from './MemberRow/MemberRow';

const TableList = (props) => {
  // const m = props.editable;

  const membersList = props.members.map(member => (<MemberRow
    onEdit={props.onEdit}
    editable={props.editable}
    cancel={props.cancel}
    name={member.name}
    email={member.email}
    phone={member.phone}
    keys={member.name}
  />));


  return (
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
        {/* <tr>
          <td><input type="text" name="name" value="Khaled" readOnly={!props.editable} /></td>
          <td><input type="text" name="email" value="Khaled@test.com"
          readOnly={!props.editable} /></td> // eslint-disable-line
          <td><input type="text" name="phone" value="12345678" readOnly={!props.editable} /></td>
          <td>
            {editButton}
          </td>
        </tr> */}
        {membersList}
      </tbody>

    </table>
  );
};

TableList.propTypes = {
  editable: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  members: PropTypes.arrayOf.isRequired,
};


// https://5aa83871cef9ba001442fcc8.mockapi.io/api/v1/users
export default TableList;

import React from 'react';
import PropTypes from 'prop-types';
import classes from './TableList.css';
import MemberRow from './MemberRow/MemberRow';

const TableList = (props) => {
  // const m = props.editable;

  const membersList = props.members.map(member => (<MemberRow
    onEdit={() => props.onEdit(member.id)}
    onDelete={() => props.onDelete(member.id)}
    onChangeHandle={e => props.onChangeHandle(e, member.id)}
    editable={member.editable}
    cancel={() => props.cancel(member.id)}
    name={member.name}
    email={member.email}
    phone={member.phone}
    id={member.id}
    key={member.name + member.phone + member.id}
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
        {membersList}
      </tbody>
    </table>
  );
};

TableList.propTypes = {
//   onEdit: PropTypes.func.isRequired,
//   cancel: PropTypes.func.isRequired,
  members: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,

  })).isRequired,
};


// https://5aa83871cef9ba001442fcc8.mockapi.io/api/v1/users
export default TableList;

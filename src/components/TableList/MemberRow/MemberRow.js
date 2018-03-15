import React from 'react';
import PropTypes from 'prop-types';

import classes from './MemberRow.css';

const MemberRow = (props) => {
  let editButton = (
    <div className={classes.Options}>
      <div onClick={props.onEdit} role="button" tabIndex="-1" onKeyUp={() => {}} className={classes.Option1} ><i className="fas fa-pencil-alt" /></div>
      <div onClick={props.onDelete} role="button" tabIndex="-1" onKeyUp={() => {}} className={classes.Option2}><i className="fas fa-trash" /></div>
    </div>
  );

  if (props.editable) {
    editButton = (
      <div className={classes.Buttons}>
        <button onClick={props.cancel} className={classes.btnCancel}>Cancel</button>
        <button onClick={props.save} className={classes.btnSave}>Save</button>
      </div>);
  }

  return (
    <tr>
      <td><input onChange={props.onChangeHandle} type="text" name="name" defaultValue={props.name} readOnly={!props.editable} /></td>
      <td><input onChange={props.onChangeHandle} type="text" name="email" defaultValue={props.email} readOnly={!props.editable} /></td>
      <td><input onChange={props.onChangeHandle} type="text" name="phone" defaultValue={props.phone}readOnly={!props.editable} /></td>
      <td>
        {editButton}
      </td>
    </tr>
  );
};


MemberRow.propTypes = {
  editable: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  save: PropTypes.func.isRequired,
};
export default MemberRow;

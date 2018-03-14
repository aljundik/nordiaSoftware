import * as actions from './actions';

const editButtonClicked = id => ({
  type: actions.EDIT_BUTTON_CLICKED,
  payroll: id,
});

const cancelButtonClicked = id => ({
  type: actions.CANCEL_BUTTON_CLICKED,
  payroll: id,
});

const addMember = member => ({
  type: actions.ADD_MEBMER,
  payroll: member,
});

const deleteMember = id => ({
  type: actions.DELETE_MEBMER,
  payroll: id,
});

export { editButtonClicked, cancelButtonClicked, addMember, deleteMember };// eslint-disable-line

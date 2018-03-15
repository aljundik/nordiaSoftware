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

const updateMember = (name, value, id) => ({
  type: actions.UPDATE_MEMBER,
  name,
  value,
  id,
});

export { editButtonClicked, cancelButtonClicked, addMember, deleteMember, updateMember };// eslint-disable-line

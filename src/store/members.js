import * as actions from './actions';

const editButtonClicked = id => ({
  type: actions.EDIT_BUTTON_CLICKED,
  payroll: id,
});

const cancelButtonClicked = id => ({
  type: actions.CANCEL_BUTTON_CLICKED,
  payroll: id,
});

const saveButtonClicked = members => ({
  type: actions.SAVE_BUTTON_CLICKED,
  payroll: members,
});

const addMember = member => ({
  type: actions.ADD_MEBMER,
  payroll: member,
});

const deleteMember = id => ({
  type: actions.DELETE_MEBMER,
  payroll: id,
});

const updateMember = member => ({
  type: actions.UPDATE_MEMBER,
  member,
});

const sortByName = name => ({
  type: actions.SORT_BY_NAME,
  payroll: name,
});

export {
  editButtonClicked,
  cancelButtonClicked,
  addMember,
  deleteMember,
  updateMember,
  saveButtonClicked,
  sortByName, };// eslint-disable-line

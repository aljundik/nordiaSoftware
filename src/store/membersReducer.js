import * as actions from './actions';

const initstate = {
  members: [
    {
      name: 'khaled Aljundi',
      email: 'khaled@test.com',
      phone: '1234567',
      id: 1,
      editable: false,
    },
    {
      name: 'khaled Aljundi2',
      email: 'khaled@test.com',
      phone: '1234567',
      id: 2,
      editable: false,
    },
  ],
};

function updateObjectInArrayEdit(array, action) {
  return array.map((item, index) => {
    if (index !== action) {
      // This isn't the item we care about - keep it as-is
      return item;
    }
    item.editable = true; // eslint-disable-line
    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
    };
  });
}

function updateObjectInArrayCancel(array, action) {
  return array.map((item, index) => {
    if (index !== action) {
      // This isn't the item we care about - keep it as-is
      return item;
    }
      item.editable = false; // eslint-disable-line
    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
    };
  });
}

function addMemberToArray(array, member) {
  const newArray = array.slice();
  newArray.push(member);
  return newArray;
}

function deleteMemberfromArray(array, id) {
  const newArray = array.slice();
  newArray.splice(id - 1, 1);
  return newArray;
}

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case (actions.EDIT_BUTTON_CLICKED):
      return {
        ...state,
        members: updateObjectInArrayEdit(state.members, action.payroll), // eslint-disable-line
      };
    case (actions.CANCEL_BUTTON_CLICKED):
      return {
        ...state,
        members: updateObjectInArrayCancel(state.members, action.payroll),
      };
    case (actions.ADD_MEBMER):
      return {
        ...state,
        members: addMemberToArray(state.members, action.payroll),
      };
    case (actions.DELETE_MEBMER):
      return {
        ...state,
        members: deleteMemberfromArray(state.members, action.payroll),
      };
    default: return state;
  }
};

export default reducer;

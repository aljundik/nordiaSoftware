import * as actions from './actions';
import data from './data/data';

const initstate = {
  members: data.members,
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

// function updateObjectInArraySave(array, action) {
//   console.log(action);
//   const newArray = array.slice();
//   newArray.splice(action.id - 1, 1, action);
//   return newArray;

// return array.map((item) => {
//   if (item.id !== action.id) {
//     // This isn't the item we care about - keep it as-is
//     return item;
//   }
//     item.editable = false; // eslint-disable-line
//   // Otherwise, this is the one we want - return an updated value
//   return {
//     ...item,
//   };
// });


function addMemberToArray(array, member) {
  const newArray = array.slice();
  newArray.push(member);
  return newArray;
}

function deleteMemberfromArray(array, id) {
  const newArray = array.slice();
  newArray.splice(id, 1);
  return newArray;
}

function updateMemberfromArray(array, action) {
  const newArray = array.slice();
  const { name, id, } = action;
  return newArray.map(((member) => {
    //  const newMember = Object.assign({}, member);
    if (member.id !== id) {
      return {
        ...member,
      };
    }

    member[name] = action.value; // eslint-disable-line
    return member;
  }


  ));
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
    case (actions.SAVE_BUTTON_CLICKED):
      return {
        ...state,
        members: action.payroll,
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

    case (actions.UPDATE_MEMBER):
      return {
        ...state,
        members: updateMemberfromArray(state.members, action),
      };
    default: return state;
  }
};

export default reducer;

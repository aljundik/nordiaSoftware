import * as actions from './actions';
import data from './data/data';

const initstate = {
  members: data.members,
};

// users.sort(function(a, b){
//   if(a.firstname < b.firstname) return -1;
//   if(a.firstname > b.firstname) return 1;
//   return 0;
// })

function updateObjectInArrayEdit(array, action) {
  return array.map((item) => {
    if (item.id !== action) {
      return item;
    }

    item.editable = true; // eslint-disable-line

    return {
      ...item,
    };
  });
}

function updateObjectInArrayCancel(array, action) {
  return array.map((item) => {
    if (item.id !== action) {
      return item;
    }

    item.editable = false; // eslint-disable-line
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
  const updatedArray = newArray.map((e, index) => { // eslint-disable-line
    if (e.id === id) {
      newArray.splice(index, 1);
      return e;
    }
    return {
      ...e,
    };
  });
  return newArray;
}

function updateMemberfromArray(array, action) {
  const newArray = array.slice();
  const { name, id, } = action;
  return newArray.map(((member) => {
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

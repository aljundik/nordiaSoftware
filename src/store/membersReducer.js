import * as actions from './actions';
import data from './data/data';

const initstate = {
  members: data.members,
};


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

function updateObjectInArraySave(array, action) {
  return array.map((item) => {
    if (item.id === action) {
      return { item, };
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

function sortByName(array, name) {
  const newArray = array.slice();
  newArray.sort((a, b) => {
    if (a[name] > b[name]) return 1;
    if (b[name] > a[name]) return -1;
    return 0;
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
        members: updateObjectInArraySave(action.payroll, action.id),
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

    case (actions.SORT_BY_NAME):
      return {
        ...state,
        members: sortByName(state.members, action.payroll),
      };

    default: return state;
  }
};

export default reducer;

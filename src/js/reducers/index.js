import {
  HANDLE_LOGIN, SIGNUP_USER, LOGOUT_USER, HANDLE_SETTINGS,
}
  from '../constants/action-types';


const initialState = {
  user: '',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}


export default rootReducer;

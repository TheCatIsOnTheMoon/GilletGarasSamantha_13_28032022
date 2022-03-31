import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      console.log('USER_LOGIN_REQUEST reducer called');
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      console.log('USER_LOGIN_SUCCESS reducer called');
      return { loading: false, userInfo: action.payload };

    case USER_LOGIN_FAIL:
      console.log('USER_LOGIN_FAIL reducer called');
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      console.log('USER_LOGOUT reducer called');
      return {};

    default:
      return state;
  }
};

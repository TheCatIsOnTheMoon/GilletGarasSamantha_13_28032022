import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from '../constants/userConstants';

// LOG
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      // console.log('USER_LOGIN_REQUEST reducer called');
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      // console.log('USER_LOGIN_SUCCESS reducer called');
      return { loading: false, userInfo: action.payload };

    case USER_LOGIN_FAIL:
      // console.log('USER_LOGIN_FAIL reducer called');
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      // console.log('USER_LOGOUT reducer called');
      return {};

    default:
      return state;
  }
};

// PROFILE
export const userProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      // console.log('USER_PROFILE_REQUEST reducer called');
      return { loading: true };

    case USER_PROFILE_SUCCESS:
      // console.log('USER_PROFILE_SUCCESS reducer called');
      return { loading: false, userInfo: action.payload };

    case USER_PROFILE_FAIL:
      // console.log('USER_PROFILE_FAIL reducer called');
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// UPDATE
export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      console.log('USER_UPDATE_REQUEST reducer called');
      return { loading: true };

    case USER_UPDATE_SUCCESS:
      console.log('USER_UPDATE_SUCCESS reducer called');
      return { loading: false, userInfo: action.payload };

    case USER_UPDATE_FAIL:
      console.log('USER_UPDATE_FAIL reducer called');
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

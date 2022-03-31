import axios from 'axios';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants';

// a function nested inside another, possible because of redux thunk
export const login = (email, password) => async (dispatch) => {
  try {
    console.log('logIn called', email, password);
    //call the reducer
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.post(
      'http://localhost:3001/api/v1/user/login',
      {
        email,
        password,
      },
      config
    );

    console.log('logIn data : ', data);

    //if succesfull call this reducer witch will populate our userInfos with the payload (aka data)
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    const token = data.body.token;

    localStorage.setItem('token', JSON.stringify(token));

    console.log('localStorage succes : ', localStorage);
    //
    //
  } catch (error) {
    alert('Login failure : unknown email or bad password.');
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  //
  console.log('getProfile called', localStorage.getItem('userInfo'));

  //Get user from localstorage
  const token = localStorage.getItem('userInfo').body.token;

  console.log('getProfile token :', token);

  const config = {
    headers: { Authorization: 'Bearer ' + token },
  };
  const { data } = await axios.post(
    'http://localhost:3001/api/v1/user/profile',
    {},
    config
  );

  console.log('getProfile data : ', data);
};

export const logOut = () => async (dispatch) => {
  //
  console.log('logOut called');
  //clear local storage
  localStorage.removeItem('token');
  // other way to clear local storage
  // localStorage.clear();

  console.log('localStorage error : ', localStorage);

  //clear reduxtool
  dispatch({ type: USER_LOGOUT });
};

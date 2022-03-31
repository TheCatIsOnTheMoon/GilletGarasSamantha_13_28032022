import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
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

    //retrieve token inside data
    const token = data.body.token;

    //if succesfull call this reducer witch will populate our token with the payload (aka actual token)
    dispatch({ type: USER_LOGIN_SUCCESS, payload: token });

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

export const logOut = () => async (dispatch) => {
  //
  console.log('logOut called');
  //clear local storage
  localStorage.removeItem('token');
  // other way to clear local storage :
  // localStorage.clear();

  console.log('localStorage error : ', localStorage);

  //clear reduxtool
  dispatch({ type: USER_LOGOUT });
};

export const getProfile = (token) => async (dispatch) => {
  try {
    console.log('getProfile token :', token);

    dispatch({ type: USER_PROFILE_REQUEST });

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };

    console.log('await get profile data');

    const { data } = await axios.post(
      'http://localhost:3001/api/v1/user/profile',
      {},
      config
    );

    dispatch({ type: USER_PROFILE_SUCCESS, payload: data });

    console.log('getProfile response data : ', data);

    localStorage.setItem('userInfo', JSON.stringify(data));
    //
  } catch (error) {
    alert('Unable to get to your profile.');
    console.log('localStorage profile failure : ', localStorage);
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

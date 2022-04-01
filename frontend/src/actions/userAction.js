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

//Login
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

    console.log('logIn response data : ', data);

    //if succesfull call this reducer witch will populate our token with the payload (aka actual token)
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    //retrieve token inside data
    const token = data.body.token;

    localStorage.setItem('token', token);

    console.log('login - localStorage succes : ', localStorage);
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

//Logout and clear local storage
export const logOut = () => async (dispatch) => {
  //
  console.log('logOut called');
  //clear local storage
  // localStorage.removeItem('token');
  // localStorage.removeItem('userInfo');
  // other way to clear local storage :
  localStorage.clear();

  console.log('localStorage logout : ', localStorage);

  //clear reduxtool
  dispatch({ type: USER_LOGOUT });
};

//Get Profile Data from API
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

    console.log('getProfile response data : ', data);

    dispatch({ type: USER_PROFILE_SUCCESS, payload: data });

    //retrieve profileData inside data
    const profileData = data.body;

    localStorage.setItem('firstName', profileData.firstName);
    localStorage.setItem('lastName', profileData.lastName);

    console.log('getProfile - localStorage succes : ', localStorage);
    //
  } catch (error) {
    alert('Unable to get to your profile.');
    //
    console.log('localStorage profile failure : ', localStorage);
    //
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

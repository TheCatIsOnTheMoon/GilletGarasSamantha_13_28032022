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

    console.log('data : ', data);

    //if succesfull call this reducer witch will populate our userInfos with the payload (aka data)
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
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
  console.log('logOut called');
  //clear local storage
  localStorage.removeItem('userInfo');
  //clear reduxtool
  dispatch({ type: USER_LOGOUT });
};

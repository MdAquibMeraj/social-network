import {
  BLOG_LIST,
  LOGIN_USER,
  BASE_URL,
  GET_USER_DATA,
  GET_BLOG_LIST,
  CLEAR_LOGIN
} from '../constant';


const bloglist = (payload) => ({
  type: BLOG_LIST,
  payload
});

 
export const getBloglist = (userId) => {
  return dispatch => {
      fetch(`${BASE_URL}${GET_BLOG_LIST}${userId}`)
      .then(res => res.json())
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          dispatch(bloglist(res));
          return res;
      })
      .catch(error => {
        throw(error);
      })
  }
}


const updateUserData = (payload) => ({
  type: LOGIN_USER,
  payload
});

 
export const getUserData = (userId) => {
  return dispatch => {
      fetch(`${BASE_URL}${GET_USER_DATA}${userId}`)
      .then(res => res.json())
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          if (res.id) {
            return dispatch(updateUserData(res));
          }
          throw(res);
      })
      .catch(error => {
        throw(error);
      })
  }
}

export const logout = () => dispatch => dispatch({ type: CLEAR_LOGIN });
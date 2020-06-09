import { BLOG_LIST, LOGIN_USER, BASE_URL, GET_USER_DATA, GET_BLOG_LIST } from '../constant';


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
          dispatch(updateUserData(res));
          return res;
      })
      .catch(error => {
          dispatch(bloglist(error));
      })
  }
}
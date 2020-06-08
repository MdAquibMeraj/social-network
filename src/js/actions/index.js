import { BLOG_LIST, GET_BLOGS_URL } from '../constant';


const bloglist = (payload) => ({
  type: BLOG_LIST,
  payload
});

 
export const getBloglist = () => {
  return dispatch => {
      fetch(GET_BLOGS_URL)
      .then(res => res.json())
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          dispatch(bloglist(res));
          return res;
      })
      .catch(error => {
          dispatch(bloglist(error));
      })
  }
}
import { BLOG_LIST } from '../constant';
import bloglistJson from '../../json/bloglist.json';

 
export const bloglist = () => ({
  type: BLOG_LIST,
  payload: bloglistJson
});
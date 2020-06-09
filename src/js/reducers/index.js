import { combineReducers } from 'redux';
import blogs from './blogs';
import userData from './userData';

export default combineReducers({
	blogs: blogs,
	userData: userData
});

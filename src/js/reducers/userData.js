import { LOGIN_USER, CLEAR_LOGIN, defaultUserData } from '../constant';

const userData = (
	state = defaultUserData,
	action
) => {
	console.log(action, state);
	switch (action.type) {
		case LOGIN_USER: 
		 return {
			 ...action.payload
		 };
		case CLEAR_LOGIN:
			return state;
		default:
			return state;
	}
};

export default userData;

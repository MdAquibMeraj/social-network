import { LOGIN_USER, CLEAR_LOGIN } from '../constant';

const userData = (
	state = null,
	action
) => {
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

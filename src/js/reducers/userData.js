import { LOGIN_USER } from '../constant';

const userData = (
	state = {},
	action
) => {
	switch (action.type) {
		case LOGIN_USER: 
		 return {
			 ...action.payload
		 };
		default:
			return state;
	}
};

export default userData;

import { LOGIN_USER } from '../constant';

const userData = (
	state = null,
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

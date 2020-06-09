import { BLOG_LIST } from '../constant';

const blogs = (
	state = [],
	action
) => {
	switch (action.type) {
		case BLOG_LIST: {
			return [...action.payload.blogs];
		}
		default:
			return state;
	}
};

export default blogs;

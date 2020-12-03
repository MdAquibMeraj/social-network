export const BLOG_LIST = 'BLOG_LIST';
export const ADD_BLOG = 'ADD_BLOG';
export const LOGIN_USER = 'LOGIN_USER';
export const CLEAR_LOGIN = 'CLEAR_LOGIN';
// API URL
export const BASE_URL = 'http://localhost:3000/';
export const GET_BLOG_LIST = 'bloglist/';
export const GET_USER_DATA = 'users/';


// Commmon Methods
export const userCredentials = [
	{
		email: 'harsh.kumar@gmail.com',
		id: 'haKumar',
		password: "password"
	},
	{
		email: 'mistermohsintariq@gmail.com',
		id: 'zakaiter',
		password: "password"
	}
];

export const defaultUserData = {
	id: 'zakaiter',
	firstName: 'Mohsin',
	lastName: 'Tariq',
	profile: '../images/profile.png',
	description: 'Consultant with more than 8 years of experience in software industry. Skilled in JavaScript, HTML, CSS and mobile Technologies. Strong knowledge with 3 years of experience in ReactJS, Redux, NodeJS, & Bootstrap. Experience of working for more than 4 years at onsite serving at client location.',
	emailId: 'mistermohsintariq@gmail.com',
	password: 'password',
	skills: [
		{
			className: 'bg-info',
			label: 'ReactJS'
		},
		{
			className: 'bg-success',
			label: 'JavaScript'
		},
		{
			className: 'bg-danger',
			label: 'CSS3'
		},
		{
			className: 'bg-warning',
			label: 'Bootstrap'
		},
		{
			className: 'progress-bar-striped progress-bar-animated bg-danger',
			label: 'HTML5'
		},
		{
			className: 'progress-bar-striped progress-bar-animated bg-info',
			label: 'NodeJs'
		}
	]
};;

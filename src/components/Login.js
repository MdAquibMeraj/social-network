import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUserData } from '../js/actions';
import logo from '../assets/logo.svg';
import loginCard from '../assets/login.jpg';
import { userCredentials } from '../js/constant';

class Login extends React.Component {
	state = {
		email: '',
		password: ''
	};

	updateUserName = (event) => this.setState({ email: event.target.value });

	updatePassword = (event) => this.setState({ password: event.target.value });

	login = () => {
		const { email, password } = this.state;
		if (email && password) {
			const userData = userCredentials.find(user => user.email === email);
			if (userData) {
				this.props.fetchLoginDetails(userData.id);
			}
		}
	}

	componentDidUpdate = () => {
		const { userData } = this.props;
		if (userData) {
			this.props.history.push('/home');
		}
	}

	render() {
		return (
			<main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
				<div className="container p-5">
					<div className="card login-card">
						<div className="row no-gutters">
							<div className="col-md-5">
								<img src={loginCard} alt="login" className="login-card-img" />
							</div>
							<div className="col-md-7">
								<div className="card-body">
									<div className="brand-wrapper">
										<img src={logo} alt="logo" className="logo" />
									</div>
									<p className="login-card-description">Sign into your account</p>
									<form action="#!">
										<div className="form-group">
											<label for="email" className="sr-only">Email</label>
											<input
												type="email"
												name="email"
												id="email"
												className="form-control"
												placeholder="Email address"
												onChange={this.updateUserName.bind(this)}
												value={this.state.email}
											/>
										</div>
										<div className="form-group mb-4">
											<label for="password" className="sr-only">Password</label>
											<input
												type="password"
												name="password"
												id="password"
												className="form-control"
												placeholder="***********"
												onChange={this.updatePassword.bind(this)}
												value={this.state.password}
												/>
										</div>
										<input
											name="login"
											id="login"
											className="btn btn-block login-btn mb-4"
											type="button"
											value="Login"
											onClick={this.login} />
									</form>
									<nav className="login-card-footer-nav">
										<a href="#!">Terms of use.</a>
										<a href="#!">Privacy policy</a>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		)
	}
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators({ fetchLoginDetails: getUserData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

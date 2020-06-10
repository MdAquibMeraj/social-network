import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';

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

	login = (event) => {
		const { email, password } = this.state;
		if (email && password) {
			const userData = userCredentials.find(user => user.email === email);
			if (userData) {
				this.props.fetchLoginDetails(userData.id);
			}
		}
		event.preventDefault();
	}


	render() {
		const { userData } = this.props;
		if (userData && userData.id) {
			return <Redirect to="/home" />;
		}
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
									<form class="signup-form form-group mb-4" onSubmit={this.login}>
											<div class="form-group">
												<label class="sr-only" for="semail">Your email</label>
												<input
													type="email"
													id="semail"
													name="semail1"
													class="form-control mr-md-1 semail"
													onChange={this.updateUserName.bind(this)}
													value={this.state.email}
													required 
													placeholder="Email address" />
											</div>
											<div className="form-group mb-4">
												<label htmlFor="password" className="sr-only">Password</label>
												<input
													type="password"
													name="password"
													id="password"
													className="form-control"
													placeholder="***********"
													onChange={this.updatePassword.bind(this)}
													value={this.state.password}
													required 
												/>
											</div>
											<button
												name="login"
												id="login"
												className="btn btn-block login-btn"
												type="button"
												type="submit"
											>Login</button>
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

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchLoginDetails: getUserData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

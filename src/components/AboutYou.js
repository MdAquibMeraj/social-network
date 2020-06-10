import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';

import { logout } from '../js/actions';
import reduxArchImg from '../assets/redux_arch.png';
import reactjsVdomImg from '../assets/reactjs_v_dom.jpg';
import reactLifeCycleImg from '../assets/lifecycle_hooks.jpg';
import Header from './Header';

class AboutYou extends React.Component {
	renderProfile = () => {
		const { userData, signout } = this.props;
		if (!userData) {
			return <Redirect to="/login" />;
		}
		return (
			<Fragment>
				<Header
					userData={userData}
					signout={signout}
				/>
				<div className="aboutyou p-md-3">
					<div className="container">
						<div className="row">
							{/* <div className="col-md-4 col-sm-12 mt-md-4">
							<div className="card">
								<img className="card-img-top" style={{ backgroundSize: 'cover', height: '25rem', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%', backgroundImage: `url(${loginCard})` }} alt="" />
								<div className="card-body text-left">
									<h5 className="card-title">Md Aquib Meraj</h5>
									<p className="card-text">Final year </p>
									<p className="card-text">Bachelor of Engineering </p>
									<p className="card-text">Computer Science </p>
									<p className="card-text"><strong>Interest: </strong> Website development </p>
									<p className="card-text"><strong>Skills: </strong> UI development </p>
									<div className="">
									</div>
								</div>
							</div>
						</div>
						 */}








							<div className="offset-md-3 col-md-9 col-sm-12">
								<h1 className="mt-4">Introduction to ReactJs - JavaScript library</h1>
								<p className="lead">
									by
		      	    <a href="#"> Aquib Meraj</a>
								</p>
								<hr />
								<p>Posted on July 1, 2020 at 12:00 PM</p>
								<hr />
								<h3> What is ReactJs ?</h3>
								<p className="lead">React (also known as React.js or ReactJS) is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. ReactJs deals with EcmaScript-6 features and use JSX inspite of HTML for transpiler.</p>
								<h3 className="mt-5"> Why ReactJs ?</h3>
								<img className="img-fluid rounded" src={reactjsVdomImg} alt="" />
								<hr />
								<h4 className="text-left"> Features:</h4>
								<p className="text-left"><strong>State - </strong>State can be considered as an instance of react component class and is majorly used for communicating with a component. It is an updatable structure that is used to contain data or information about the component and can change over time. </p>
								<p className="text-left"><strong>Props - </strong>Props are read-only components. It allows passing data from one component to other components. Props are immutable so we cannot modify the props from inside the component. </p>
								<h6 className="mt-5"> Lifecycle of ReactJs</h6>
								<img className="img-fluid rounded" src={reactLifeCycleImg} alt="" />
								<hr />
								<h4 className="text-left">Introduction to Redux:</h4>
								<p className="text-left">Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.</p>
								<h6 className="mt-5"> Redux architecture</h6>
								<img className="img-fluid rounded" src={reduxArchImg} alt="" />
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}

	render() {
		return (
			<div>
				{this.renderProfile()}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = dispatch => bindActionCreators({ signout: logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AboutYou);


import React from 'react';
import loginCard from '../assets/login.jpg';
import reduxArchImg from '../assets/redux_arch.png';
import reactjsVdomImg from '../assets/reactjs_v_dom.jpg';
import reactLifeCycleImg from '../assets/lifecycle_hooks.jpg';

class AboutYou extends React.Component {
	renderProfile = () => {
		return (
			<div className="aboutyou p-md-3">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-sm-12 mt-md-4">
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
										<div className="progress mt-2 custom-progress">
											<div className="progress-bar bg-primary" role="progressbar" aria-valuenow="75"
											aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}>
												<span>JavaScript</span>
											</div>
										</div>
										<div className="progress mt-2 custom-progress">
											<div className="progress-bar bg-info" role="progressbar" aria-valuenow="75"
											aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}>
												<span>HTML5</span>
											</div>
										</div>
										<div className="progress mt-2 custom-progress">
											<div className="progress-bar bg-success" role="progressbar" aria-valuenow="75"
											aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}>
												<span>JavaScript</span>
											</div>
										</div>
										<div className="progress mt-2 custom-progress">
											<div className="progress-bar bg-danger" role="progressbar" aria-valuenow="75"
											aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}>
												<span>CSS3</span>
											</div>
										</div>
										<div className="progress mt-2 custom-progress">
											<div className="progress-bar bg-warning" role="progressbar" aria-valuenow="75"
											aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}>
												<span>Bootstrap v4</span>
											</div>
										</div>
										<div className="progress custom-progress mt-2">
											<div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="75"
											aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}>
												<span><strong>ReactJs</strong></span>
											</div>
										</div>
										<div className="progress custom-progress mt-2">
											<div className="progress-bar bg-dark" role="progressbar" aria-valuenow="75"
											aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}>
												<span>NodeJs</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-8 col-sm-12">
							<h1 class="mt-4">Introduction to ReactJs - JavaScript library</h1>	
			        <p class="lead">
			          by
		      	    <a href="#"> Aquib Meraj</a>
    			    </p>
		        <hr/>
		        <p>Posted on July 1, 2020 at 12:00 PM</p>
		        <hr/>
						<h3> What is ReactJs ?</h3>
						<p class="lead">React (also known as React.js or ReactJS) is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. ReactJs deals with EcmaScript-6 features and use JSX inspite of HTML for transpiler.</p>
						<h3 className="mt-5"> Why ReactJs ?</h3>
						<img class="img-fluid rounded" src={reactjsVdomImg} alt="" />
		        <hr/>
						<h4 className="text-left"> Features:</h4>
						<p className="text-left"><strong>State - </strong>State can be considered as an instance of react component class and is majorly used for communicating with a component. It is an updatable structure that is used to contain data or information about the component and can change over time. </p>
		        <p className="text-left"><strong>Props - </strong>Props are read-only components. It allows passing data from one component to other components. Props are immutable so we cannot modify the props from inside the component. </p>
						<h6 className="mt-5"> Lifecycle of ReactJs</h6>
						<img class="img-fluid rounded" src={reactLifeCycleImg} alt="" />
						<hr/>
						<h4 className="text-left">Introduction to Redux:</h4>
						<p className="text-left">Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.</p>
						<h6 className="mt-5"> Redux architecture</h6>
						<img class="img-fluid rounded" src={reduxArchImg} alt="" />
			  </div>
			</div>
		</div>
	</div>);
	}

	render() {
		return (
			<div>
				{this.renderProfile()}
			</div>
		)
	}
}
export default AboutYou;

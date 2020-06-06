import React from 'react';
import loginCard from '../assets/login.jpg';

class AboutYou extends React.Component {
	renderProfile = () => {
		return (
			<div className="aboutyou p-md-3">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-sm-12">
							{/* <div className="card card-inverse col-6" style={{ backgroundColor: '#e9eaed', borderColor: '#e3e3e3' }}>
								<div className="card-block row m-3">
									<div className="col-md-4 col-sm-4 text-center">
										<img className="btn-md" src={loginCard} alt="" style={{ borderRadius: '50%', width: '100%' }} />
									</div>
									<div className="col-md-8 col-sm-8 text-left pl-5">
										<h2 className="card-title"><strong>Md. Aquib Meraj</strong></h2>
										<p className="card-text">Bachelor of Engineering, 4th Year </p>
										<p className="card-text">Computer Science </p>
										<p className="card-text"><strong>Interest: </strong> Website development </p>
										<p className="card-text"><strong>Skills: </strong> UI development </p>
									</div>
									<div className="col-12 pt-4">
										<span class="badge badge-primary mx-1">HTML5</span>
										<span class="badge badge-secondary mx-1">JavaScript</span>
										<span class="badge badge-success mx-1">CSS3</span>
										<span class="badge badge-danger mx-1">Bootstrap</span>
										<span class="badge badge-warning mx-1">ReactJs</span>
										<span class="badge badge-info mx-1">EcmaScript 6</span>
										<span class="badge badge-dark mx-1">Node Js</span>
									</div>
								</div>
						</div> */}
							<div className="card">
								<img className="card-img-top" style={{ backgroundSize: 'cover', height: '25rem', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%', backgroundImage: `url(${loginCard})` }} alt="" />
								<div className="card-body text-left">
									<h5 className="card-title">Md Aquib Meraj</h5>
									<p className="card-text">Final year </p>
									<p className="card-text">Bachelor of Engineering </p>
									<p className="card-text">Computer Science </p>
									<p className="card-text"><strong>Interest: </strong> Website development </p>
									<p className="card-text"><strong>Skills: </strong> UI development </p>
									<div className="pt-2">
										<span class="badge badge-primary mx-1">HTML5</span>
										<span class="badge badge-secondary mx-1">JavaScript</span>
										<span class="badge badge-success mx-1">CSS3</span>
										<span class="badge badge-danger mx-1">Bootstrap</span>
										<span class="badge badge-warning mx-1">ReactJs</span>
										<span class="badge badge-info mx-1">EcmaScript 6</span>
										<span class="badge badge-dark mx-1">Node Js</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-8 col-sm-12">
							<h3>My name is Aquib meraj</h3>
						</div>
					</div>
				</div>
			</div>
		)
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

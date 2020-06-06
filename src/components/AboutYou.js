import React from 'react';
import loginCard from '../assets/login.jpg';

class AboutYou extends React.Component {
	renderProfile = () => {
		return (
			<div className="aboutyou p-md-3">
				<div className="row">
					<div className="col-12">
						<div className="card card-inverse" style={{ backgroundColor: '#e9eaed', borderColor: '#e3e3e3' }}>
							<div className="card-block">
								<div className="row">
									<div className="col-md-4 col-sm-4 text-center">
										<img className="btn-md m-3" src={loginCard} alt="" style={{ borderRadius: '50%', width: '40%' }} />
									</div>
									<div className="col-md-8 col-sm-8 my-3">
										<h2 className="card-title"><strong>Md. Aquib Meraj</strong></h2>
										<p className="card-text">Bachelor of Engineering, 4th Year </p>
										<p className="card-text">Computer Science </p>
										<p className="card-text"><strong>Interest: </strong> Website development </p>
										<p className="card-text"><strong>Skills: </strong> UI development </p>
										<p>
											<span className="badge bg-primary mx-1">HTML5</span>
											<span className="badge bg-info mx-1">CSS3</span>
											<span className="badge bg-warning mx-1">Bootstrap</span>
											<span className="badge bg-success mx-1">ReactJs</span>
										</p>
									</div>
									<div className="col-md-4 col-sm-4 text-center">
										<h2><strong> 5.2K </strong></h2>
										<p><small>Articles</small></p>
										<button className="btn btn-primary btn-block btn-md"><span className="fa fa-facebook-square"></span> Like  </button>
									</div>
									<div className="col-md-4 col-sm-4 text-center">
										<h2><strong>1.4K</strong></h2>
										<p><small>Following</small></p>
										<button className="btn btn-success btn-block btn-md"><span className="fa fa-twitter-square"></span> Tweet </button>
									</div>
									<div className="col-md-4 col-sm-4 text-center">
										<h2><strong>3.8K</strong></h2>
										<p><small>Followers</small></p>
										<button type="button" className="btn btn-danger btn-block btn-md"><span className="fa fa-google-plus-square"></span> Follow </button>
									</div>
								</div>
							</div>
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

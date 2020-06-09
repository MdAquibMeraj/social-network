import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faHistory, faUser, faBookmark, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import profileImg from '../assets/blogs/profile.png';


class Header extends React.Component {
	render() {
		const {
			userData: {
				description,
				firstName,
				lastName,
				skills,
				profile
			}
		} = this.props;
		return (
			<header className="header text-center">
				<h1 className="blog-name pt-lg-3 mb-0"><Link to="/about">{firstName}'s Blog</Link></h1>
				<nav className="navbar navbar-expand-lg navbar-dark">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div id="navigation" className="collapse navbar-collapse flex-column">
						<div className="profile-section pt-3 pt-lg-0">
							<img className="profile-image mb-3 rounded-circle mx-auto" src={profile} alt="" />
							<div className="bio mb-3">{description}<br /><Link to="/about">Find out more about this application</Link></div>{/*//bio*/}
							<div className="row justify-content-center">
								{ this.renderSkills(skills) }														
							</div>
						<hr />
						</div>{/*//profile-section*/}
						<ul className="navbar-nav flex-column text-md-left">
							<li className="nav-item">
								<Link className="nav-link" to='/home'><FontAwesomeIcon className="mr-2" icon={faHome} />Blog Home <span className="sr-only">(current)</span></Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to='/blog-post'><FontAwesomeIcon className="mr-2" icon={faBookmark} />Blog Post</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to='/about'><FontAwesomeIcon className="mr-2" icon={faUser} />About</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		)
	}

	renderSkills = (skills) => {
		return skills.map(({label, className}) => (
			<div className="progress m-2 custom-progress">
				<div className={`progress-bar ${className}`} role="progressbar" aria-valuenow="75"
					aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}>
					<span>{label}</span>
				</div>
			</div>
		));
	}
}

Header.propTypes = {
	goTo: PropTypes.func,
	userData: PropTypes.object
};

export default Header;

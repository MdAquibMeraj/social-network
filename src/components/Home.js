import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from "react-router-dom";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getBloglist, logout } from '../js/actions';
import Header from './Header';
import Loader from './Loader';

class Home extends React.Component {
	componentDidMount() {
		const { userData } = this.props;
		if (userData && userData.id) {
			this.props.fetchBlogs(userData.id);
		}
	}
	render() {
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
				<div className="main-wrapper">
					<section className="cta-section theme-bg-light py-4">
						<div className="container text-center">
							<h2 className="heading">Blogs template</h2>
						</div>{/*//container*/}
					</section>
					<section className="blog-list px-3 py-5 p-md-5">
						<div className="container">
							{this.renderBlogList()}
						</div>
					</section>
					<footer className="footer text-center py-2 theme-bg-dark">
						<small>&copy; by <a href="http://xyz.com/merajAhmed" rel="noopener noreferrer" target="_blank">Meraj Ahmed</a> with <FontAwesomeIcon icon={faHeart} /></small>
					</footer>
				</div>
			</Fragment>);
	}

	renderBlogList = () => {
		const { blogs } = this.props;
		if (blogs && blogs.length > 0) {
			return blogs.map(({ title, date, description, thumbnail }) => (
				<div className="item mb-5 text-left" key={thumbnail}>
					<div className="media">
						<img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={thumbnail} alt="" />
						<div className="media-body">
							<h3 className="title mb-1"><Link to="/blog-post">{title}</Link></h3>
							<div className="meta mb-1"><span className="date">{date}</span><span className="time">5 min read</span><span className="comment"><a href="">8 comments</a></span></div>
							<div className="intro">{description}</div>
							<Link to="/blog-post" className="more-link">Read more →</Link>
						</div>
					</div>
				</div>
			));
		} else {
			return <Loader />;
		}
	}

}

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = dispatch => bindActionCreators(
	{
		fetchBlogs: getBloglist,
		signout: logout
	}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

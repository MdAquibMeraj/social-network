import React, { Fragment } from 'react';

import bloglistJson from '../json/bloglist.json';

import profileImg from '../assets/blogs/profile.png';
import { faHistory, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Home extends React.Component {
	componentDidMount() {
		// console.log(bloglistJson);
		// this.props.bloglist(bloglistJson);
	}
	render() {
		return (
			<Fragment>
				<div className="main-wrapper">
					<section className="cta-section theme-bg-light py-5">
						<div className="container text-center">
							<h2 className="heading">DevBlog - A Blog Template Made For Developers</h2>
							<div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
							<form className="signup-form form-inline justify-content-center pt-3">
								<div className="form-group">
									<label className="sr-only" htmlFor="semail">Your email</label>
									<input type="email" id="semail" name="semail1" className="form-control mr-md-1 semail" placeholder="Enter email" />
								</div>
								<button type="submit" className="btn btn-primary">Subscribe</button>
							</form>
						</div>{/*//container*/}
					</section>
					<section className="blog-list px-3 py-5 p-md-5">
						<div className="container">
							{this.renderBlogList()}
						</div>
					</section>
					<footer className="footer text-center py-2 theme-bg-dark">
						<small>&copy; by <a href="http://xyz.com/merajAhmed" target="_blank">Meraj Ahmed</a> with <FontAwesomeIcon icon={faHeart} /></small>
					</footer>
				</div>
			</Fragment>);
	}

	renderBlogList = () => {
		if (bloglistJson) {
			return bloglistJson.map(({ title, date, description, thumbnail }) => (
					<div className="item mb-5 text-left">
						<div className="media">
							<img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={thumbnail} alt="" />
							<div className="media-body">
								<h3 className="title mb-1"><a href="blog-post.html">{title}</a></h3>
								<div className="meta mb-1"><span className="date">{date}</span><span className="time">5 min read</span><span className="comment"><a href="#">8 comments</a></span></div>
								<div className="intro">{description}</div>
								<a className="more-link" href="blog-post.html">Read more →</a>
							</div>
						</div>
					</div>					
				));
		}
	}
	
}

export default Home;

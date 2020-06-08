import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { bloglist } from '../js/actions';

class Home extends React.Component {
	componentDidMount() {
		this.props.blogList();
	}
	render() {
		return (
			<Fragment>
				<div className="main-wrapper">
					<section className="cta-section theme-bg-light py-5">
						<div className="container text-center">
							<h2 className="heading">Blogs template</h2>
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

	redirect = () => {
	 console.log('redirect');
	 return this.props.history.push("/about");
	}

	renderBlogList = () => {
		const { blogs } = this.props;
		if (blogs) {
			return blogs.map(({ title, date, description, thumbnail }) => (
				<div className="item mb-5 text-left" key={thumbnail}>
					<div className="media">
						<img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={thumbnail} alt="" />
						<div className="media-body">
							<h3 className="title mb-1"><a href="blog-post.html">{title}</a></h3>
							<div className="meta mb-1"><span className="date">{date}</span><span className="time">5 min read</span><span className="comment"><a href="#">8 comments</a></span></div>
							<div className="intro">{description}</div>
							<a href="" className="more-link" onClick={this.redirect}>Read more →</a>
						</div>
					</div>
				</div>
			));
		}
	}

}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ blogList: () => { dispatch(bloglist()) } });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

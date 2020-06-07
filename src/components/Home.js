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
				<header className="header text-center">
					<h1 className="blog-name pt-lg-4 mb-0"><a href="index.html">Anthony's Blog</a></h1>
					<nav className="navbar navbar-expand-lg navbar-dark">
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<div id="navigation" className="collapse navbar-collapse flex-column">
							<div className="profile-section pt-3 pt-lg-0">
								<img className="profile-image mb-3 rounded-circle mx-auto" src={profileImg} alt="" />
								<div className="bio mb-3">Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also provide a link to the about page.<br /><a href="about.html">Find out more about me</a></div>{/*//bio*/}
								<ul className="social-list list-inline py-3 mx-auto">
									<li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHistory} /></a></li>
									<li className="list-inline-item"><a href="#"><svg className="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>{/* <i class="fab fa-linkedin-in fa-fw"></i> */}</a></li>
									<li className="list-inline-item"><a href="#"><svg className="svg-inline--fa fa-github-alt fa-w-15 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512" data-fa-i2svg><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" /></svg>{/* <i class="fab fa-github-alt fa-fw"></i> */}</a></li>
									<li className="list-inline-item"><a href="#"><svg className="svg-inline--fa fa-stack-overflow fa-w-12 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="stack-overflow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg><path fill="currentColor" d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z" /></svg>{/* <i class="fab fa-stack-overflow fa-fw"></i> */}</a></li>
									<li className="list-inline-item"><a href="#"><svg className="svg-inline--fa fa-codepen fa-w-16 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="codepen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z" /></svg>{/* <i class="fab fa-codepen fa-fw"></i> */}</a></li>
								</ul>{/*//social-list*/}
								<hr />
							</div>{/*//profile-section*/}
							<ul className="navbar-nav flex-column text-left">
								<li className="nav-item">
									<a className="nav-link" href="index.html"><svg className="svg-inline--fa fa-home fa-w-18 fa-fw mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" /></svg>{/* <i class="fas fa-home fa-fw mr-2"></i> */}Blog Home <span className="sr-only">(current)</span></a>
								</li>
								<li className="nav-item active">
									<a className="nav-link" href="blog-post.html"><svg className="svg-inline--fa fa-bookmark fa-w-12 fa-fw mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bookmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg><path fill="currentColor" d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z" /></svg>{/* <i class="fas fa-bookmark fa-fw mr-2"></i> */}Blog Post</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="about.html"><svg className="svg-inline--fa fa-user fa-w-14 fa-fw mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" /></svg>{/* <i class="fas fa-user fa-fw mr-2"></i> */}About Me</a>
								</li>
							</ul>
							<div className="my-2 my-md-3">
								<a className="btn btn-primary" href="https://themes.3rdwavemedia.com/" target="_blank">Get in Touch</a>
							</div>
						</div>
					</nav>
				</header>
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

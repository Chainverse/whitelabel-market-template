import React from 'react';
import logo from '@assets/images/ChainVerse.svg';

const Section: React.FC = () => {
	return (
		<React.Fragment>
			<div className="bx-section section-contact" id="bx-contact">
				<div className="container">
					<div className="bx-contact">
							<div className="contact-action">
								<div className="link-social">
									{/* <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"/></a> */}
									<a href="https://twitter.com/chainverse_org" target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"/></a>
									<a href="https://www.linkedin.com/company/chainverse-co" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
									<a href="https://t.me/chainverse_community" target="_blank" rel="noreferrer"><i className="fab fa-telegram"></i></a>
									<a href="https://discord.gg/dT9Nt6qNQ8" target="_blank" rel="noreferrer"><i className="fab fa-discord"></i></a>
									<a href="https://chainverse.medium.com/" target="_blank" rel="noreferrer"><i className="fab fa-medium"/></a>
								</div>
								<h3>Get in Touch</h3>
								<a className="btn-email" href="mailto:hello@chainverse.org" title="">Email Us</a>
							</div>
							<div className="contact-footer">
								<img src={logo} alt=""/>
								<p>© 2021 ChainVerse Inc. All rights reserved.</p>
							</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Section;

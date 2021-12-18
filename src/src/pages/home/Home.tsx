import React from 'react';
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from '@assets/images/ChainVerse.svg';
import solution_1 from '@assets/images/solution-1.png';
import solution_2 from '@assets/images/solution-2.png';
import solution_3 from '@assets/images/solution-3.png';
import solution_4 from '@assets/images/solution-4.png';
import solution_5 from '@assets/images/solution-5.png';
import solution_6 from '@assets/images/solution-6.png';

const Section: React.FC = () => {
	return (
		<>
		<Navbar  variant="dark" expand="lg" >
				<Container>
					<Navbar.Brand href="#home">
						<a href="https://discord.gg/dT9Nt6qNQ8" target="_blank" rel="noreferrer"><i className="fab fa-discord"></i></a>
						<a href="https://twitter.com/chainverse_org" target="_blank" rel="noreferrer"><i className="fab fa-twitter"/></a>
						<a href="https://chainverse.medium.com/" target="_blank" rel="noreferrer"><i className="fab fa-medium"/></a>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
						<Nav className="justify-content-center" activeKey="/home" as="ul">
							<Nav.Item as="li">
								<Nav.Link href="#bx-platform">Platform</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Nav.Link href="#bx-tokenomics" eventKey="link-tokenomics">
									UnboundDAO
								</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Nav.Link href="#bx-games" eventKey="link-games">
									Games
								</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Nav.Link href="#bx-roadmap" eventKey="link-roadmap">
									Road Map
								</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Nav.Link href="#bx-team" eventKey="link-team">
									Team
								</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Nav.Link href="https://docsend.com/view/cat28gwpmkyezsvh" target="_blank" eventKey="link-white-paper">
									White Paper
								</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Nav.Link href="#bx-partners" eventKey="link-partners">
									Partners
								</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Nav.Link href="#bx-contact" eventKey="link-contact">
									Contact
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		<div className="bx-section section-home" id="bx-home" >
			<div className="container">
				<div className="bx-home">
					<img src={logo} alt=""/>
					<h1>
						Blockchain Game Publishing Platform
					</h1>
					<p>
						A full-stack blockchain solution for indie game developers to create token-based economies. 
					</p>
				</div>
				<div className="bx-solution">
					<div className="info-solution">
						Our full-stack solution is designed to abstract all the underlying blockchain technologies, so that developers can focus on building great games without having to manage the steep learning curves. Easily integrated, interoperable with any major chains, and instantly giving access to a network of 50 million mobile users, ChainVerse provides developers with cheap, convenient, and effective end-to-end solution to embark on their blockchain journey. 
					</div>
					<div className="list-solution">
						<div className="item-solution">
							<div className="item-inner">
								<div className="item-cover">
									<img src={solution_1} alt=""/>
								</div>
								<div className="item-info">
									<h5>NFTs for Games</h5>
									<ul>
										<li>Instant utilities</li>
										<li>Seamless asset-crossing from game to game, chain to chain</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="item-solution">
							<div className="item-inner">
								<div className="item-cover">
									<img src={solution_2} alt=""/>
								</div>
								<div className="item-info">
									<h5>No risk</h5>
									<ul>
										<li>Keep your existing games</li>
										<li>Compliment them with new revenue streams</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="item-solution">
							<div className="item-inner">
								<div className="item-cover">
									<img src={solution_3} alt=""/>
								</div>
								<div className="item-info">
									<h5>Instant access to relevant user & developer community</h5>
									<ul>
										<li>50 Million mobile users</li>
										<li>Network of 750 developers in Asia</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="item-solution">
							<div className="item-inner">
								<div className="item-cover">
									<img src={solution_4} alt=""/>
								</div>
								<div className="item-info">
									<h5>One-stop-shop</h5>
									<ul>
										<li>Powerful SDK</li>
										<li>Comprehensive core services & end-user services</li>
										<li>Seamless NFT & crypto wallet</li>
										<li>Vibrant market place</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="item-solution">
							<div className="item-inner">
								<div className="item-cover">
									<img src={solution_5} alt=""/>
								</div>
								<div className="item-info">
									<h5>Abundant Defi Options</h5>
									<ul>
										<li>Staking for rewards</li>
										<li>Universal reward token (CRT) to back your own game currencies</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="item-solution">
							<a href="#bx-platform">
								<div className="item-inner">
									<div className="item-cover">
										<img src={solution_6} alt=""/>
									</div>
									<div className="item-info">
										<h5>Learn about our Platform</h5>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default Section;

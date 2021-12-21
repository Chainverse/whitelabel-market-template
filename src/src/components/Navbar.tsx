import React, { useEffect, useState } from "react";
import { Button, Offcanvas, Navbar, ListGroup } from "react-bootstrap";
import { NavLink, useHistory, useLocation, Redirect } from "react-router-dom";

import logo from '@assets/images/logo.png';
import i_search from '@assets/images/i_search.svg';
import i_wallet from '@assets/images/i_wallet.svg';
import i_copy from '@assets/images/i_copy.svg';
import i_token from '@assets/images/i_token.png';

const NavbarView: React.FC = () => {

	return (
		<header id="header">
			<div className="headerWrapper">
				<NavLink to="" className="navTogle"><span></span><span></span><span></span></NavLink>
				<div className="headerLeft">
					<NavLink to="" className="logo">
						<img src={logo} height="40px" alt=""/>
					</NavLink>
				</div>
				<div className="headerRight">
					<div className="headerNav">
						<form className="headerSearh">
							<div className="headerSearchInput">
								<input type="text" placeholder="Search items..." className="form-control"/>
								<button type="submit" className="searchIcon"><img src={i_search} height="20" alt=""/></button>
							</div>
						</form>
						<div className="mainNav">
							<NavLink to="/marketplace" className="navItem active" exact>Marketplace</NavLink>
							<NavLink to="/my-assets" className="navItem" exact>My assets</NavLink>
						</div>
					</div>

					{/* <NavLink to="" className="btn btn-primary d-flex align-items-center py-2" data-toggle="modal" data-target="#connectWalletModal">
						<img src={i_wallet} height="20" width="20"/>
						<span className="ml-2 d-none d-lg-block">Connect Wallet</span>
					</NavLink> */}

					<div className="dropdown">
						<NavLink className="btn btn-primary dropdown-toggle" to="#" role="button" data-toggle="dropdown">
							<img src={i_wallet} height="20" width="20" alt=""/>
						</NavLink>
						<div className="dropdown-menu dropdown-menu-right">
							<div className="walletHeader">
								<h5 className="mr-auto mb-0">My wallet</h5>
								<NavLink to="" className="copy text-secondary" title="Copy wallet address">
									<span className="mr-2">0x4f09...Aa37</span>
									<img src={i_copy} width="24" alt=""/>
								</NavLink>
							</div>
							<div className="walletBody">
								<div className="walletList">
									<div className="walletItem">
										<img src={i_token} width="24" className="tokenIcon" alt=""/>
										<span className="tokenName">STRT</span>
										<span>215.46</span>
									</div>
									<div className="walletItem">
										<img src="https://market.dev.chainverse.xyz/a42952da42dbbb04c05481a713ceed6e.svg" width="24" className="tokenIcon" alt=""/>
										<span className="tokenName">USDT</span>
										<span>215.46</span>
									</div>
									<div className="walletItem">
										<img src="https://market.dev.chainverse.xyz/488237bcbb08c092806e0e404596d001.svg" width="24" className="tokenIcon" alt=""/>
										<span className="tokenName">BNB</span>
										<span>215.46</span>
									</div>
									<div className="walletItem">
										<img src="https://market.dev.chainverse.xyz/ad2df0e6f80ce44f33d10cb1caf7329b.svg" width="24" className="tokenIcon" alt=""/>
										<span className="tokenName">BUSD</span>
										<span>215.46</span>
									</div>
								</div>
							</div>
						</div>
					  </div>
				</div>
			</div>
		</header>
	);
};

export default NavbarView;

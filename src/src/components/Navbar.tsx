import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ModalLogin from '@components/ModalLogin';

import logo from '@assets/images/logo.png';
import i_search from '@assets/images/i_search.svg';
import i_wallet from '@assets/images/i_wallet.svg';
import i_copy from '@assets/images/i_copy.svg';
import i_token from '@assets/images/i_token.png';

import USDT from '@assets/images/coin/USDT.svg';
import BNB from '@assets/images/coin/BNB.svg';
import BUSD from '@assets/images/coin/BUSD.svg';

const NavbarView: React.FC = () => {
	const [showModalLogin, setShowModalLogin] = useState < boolean > (false);
	return (
		<header id="header">
			<div className="headerWrapper">
				<NavLink to="" className="navTogle"><span></span><span></span><span></span></NavLink>
				<div className="headerLeft">
					<NavLink to="" className="logo">
						<img src={logo} height="40px" alt="" />
					</NavLink>
				</div>
				<div className="headerRight">
					<div className="headerNav">
						<form className="headerSearh">
							<div className="headerSearchInput">
								<input type="text" placeholder="Search items..." className="form-control" />
								<button type="submit" className="searchIcon"><img src={i_search} height="20" alt="" /></button>
							</div>
						</form>
						<div className="mainNav">
							<NavLink to="/marketplace" className="navItem active" exact>Marketplace</NavLink>
							<NavLink to="/my-assets" className="navItem" exact>My assets</NavLink>
						</div>
					</div>



					<div className="dropdown">
						<NavLink className="btn btn-primary dropdown-toggle ms-2" to="#" role="button" data-toggle="dropdown">
							<img src={i_wallet} height="20" width="20" alt="" />
						</NavLink>
						<div className="dropdown-menu dropdown-menu-right">
							<div className="walletHeader">
								<h5 className="me-auto mb-0">My wallet</h5>
								<NavLink to="" className="copy text-secondary" title="Copy wallet address">
									<span className="me-2">0x4f09...Aa37</span>
									<img src={i_copy} width="24" alt="" />
								</NavLink>
							</div>
							<div className="walletBody">
								<div className="walletList">
									<div className="walletItem">
										<img src={i_token} width="24" className="tokenIcon" alt="" />
										<span className="tokenName">STRT</span>
										<span>215.46</span>
									</div>
									<div className="walletItem">
										<img src={USDT} width="24" className="tokenIcon" alt="" />
										<span className="tokenName">USDT</span>
										<span>215.46</span>
									</div>
									<div className="walletItem">
										<img src={BNB} width="24" className="tokenIcon" alt="" />
										<span className="tokenName">BNB</span>
										<span>215.46</span>
									</div>
									<div className="walletItem">
										<img src={BUSD} width="24" className="tokenIcon" alt="" />
										<span className="tokenName">BUSD</span>
										<span>215.46</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button onClick={() => setShowModalLogin(!showModalLogin)} className="btn btn-primary d-flex align-items-center py-2 ms-2" data-toggle="modal" data-target="#connectWalletModal">
						<img src={i_wallet} height="20" width="20" alt="" />
						<span className="ms-2 d-none d-lg-block ms-2">Connect Wallet</span>
					</button>
				</div>
			</div>
			<ModalLogin show={showModalLogin} onHide={() => setShowModalLogin(!showModalLogin)} />
		</header>
	);
};

export default NavbarView;

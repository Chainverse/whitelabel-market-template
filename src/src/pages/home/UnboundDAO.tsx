import React from 'react';
import tokenomics from "@assets/images/tokenomics.png";
import CVT from "@assets/images/CVT.svg";
import CRT from "@assets/images/CRT.svg";
import ic_check from "@assets/images/ic_check.svg";
import ic_check_red from "@assets/images/ic_check_red.svg";

const Section: React.FC = () => {
	return (
		<div className="bx-section" id="bx-tokenomics" >
				<div className="container">
					<div className="bx-tokenomics">
						<div className="bx-header offset-md-5">
							<h2 className="bx-header-title left">UnboundDAO: A Conduit for Value Transfer</h2>
						</div>
						<div className="bx-content">
							<div className="row align-items-center ">
								<div className="col-md-5">
									<img src={tokenomics} className="img-fluid" alt="" />
								</div>
								<div className="col-md-7">
									<div className="list-tokenomics">
										<div className="item-value value-1">
											<div className="item-cover">
												<img src={CVT} alt="" />
												<span>CVT</span>
											</div>
											<div className="item-list">
												<ul>
													<li>
														<img src={ic_check} alt="" />
														<strong>Governance</strong> token
													</li>
													<li>
														<img src={ic_check} alt="" />
														Powers <strong>on-chain</strong> computation
													</li>
													<li>
														<img src={ic_check} alt="" />
														Enables <strong>access</strong> to smart contracts for core services
													</li>
													<li>
														<img src={ic_check} alt="" />
														Enables <strong>access</strong> to <strong>end-user</strong> services
													</li>
												</ul>
											</div>
										</div>
										<div className="item-value  value-2">
											<div className="item-cover">
												<img src={CRT} alt="" />
												<span>CRT</span>
											</div>
											<div className="item-list">
												<ul>
													<li>
														<img src={ic_check_red} alt="" />
														Universal reward token
													</li>
													<li>
														<img src={ic_check_red} alt="" />
														Designed for <strong>Play-to-earn</strong> Economy
													</li>
													<li>
														<img src={ic_check_red} alt="" />
														Medium of <strong>exchange</strong> between game economies
													</li>
													<li>
														<img src={ic_check_red} alt="" />
														<strong>Fungible</strong> with all in-game tokens
													</li>
													<li>
														<img src={ic_check_red} alt="" />
														<strong>Rates</strong> modulated through Automatic On-Chain Exchange System (ACE)
													</li>
													<li>
														<img src={ic_check_red} alt="" />
														<strong>Transparent pricing</strong> through <strong>DAO</strong>
													</li>
													<li>
														<img src={ic_check_red} alt="" />
														<strong>Liquidity</strong> from demand by POS Validators as earnings multiplier
													</li>
													
												</ul>
											</div>
										</div>
									</div>
								</div>	
							</div>
						</div>
					</div>
				</div>
		</div>
	);
}

export default Section;

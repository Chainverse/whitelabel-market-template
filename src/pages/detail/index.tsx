import React, { useState } from "react";
import Navbar from "@components/Navbar";
import { NavLink } from "react-router-dom";
import ModalBuy from '@components/ModalBuy';
import ModalBid from '@components/ModalBid';

import i_token from '@assets/images/i_token.png';
import i_heart from '@assets/images/i_heart.svg';
import p_1 from '@assets/images/p-1.png';
import u1 from '@assets/images/u1.png';
import u2 from '@assets/images/u2.png';

const HomeView: React.FC = () => {
	const [showModalBuy, setShowModalBuy] = useState < boolean > (false);
	const [showModalBid, setShowModalBid] = useState < boolean > (false);

	return (
		<>
			<Navbar />
			<div className="mainPage">
				<section className="section">
					<div className="container">
						<div className="row">
							<div className="col-md-6 pr-lg-5">
								<div className="Pimg">
									<img alt="" src={p_1} />
								</div>
								<div className="Pinfo">
									<div className="Pinfo_item">
										<div className="text-secondary">Contract Address</div>
										<div className="copy"><NavLink to="#" className="text-primary">0x1dDB2C0897daF18632662E71fdD2dbDC0eB3a9Ec</NavLink></div>
									</div>
									<div className="Pinfo_item">
										<div className="text-secondary">Token ID</div>
										<div>10523378</div>
									</div>
									<div className="Pinfo_item">
										<div className="text-secondary">Blockchain</div>
										<div>Binance Smart Chain Testnet</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 pl-lg-4">
								<div className="Pmeta">
									<div className="PmetaHeader">
										<div className="P_ownerGroup">
											<div className="P_owner">
												<img alt="" src={u1} className="P_ownerImage" />
												<div className="P_ownerInfo">
													<div className="small text-secondary">Creator</div>
													<div className="font-weight-medium">Akatsuki</div>
												</div>
											</div>
											<div className="P_owner">
												<img alt="" src={u2} className="P_ownerImage" />
												<div className="P_ownerInfo">
													<div className="small text-secondary">Owner by</div>
													<div className="font-weight-medium">Guy Hawkins</div>
												</div>
											</div>
										</div>
										<div className="P_likeCount">
											<button type="button" className="btn btn_like">
												<img alt="" src={i_heart} width="20" className="me-2" />
												<span>3</span>
											</button>
										</div>
									</div>
									<div className="P_name">
										<NavLink to="#">ThorGuards #4195</NavLink>
									</div>
									<div className="P_desc">Exchangeable for a limited edition Binance Elfin Ultra NFT Pack. It can be redeemed for NFTs on the Elfin Kingdom's website.</div>
									<div className="P_infoBuy">
										<div className="autionCoundown">
											<div className="countdownText">Sale ends December 19, 2021 at 12:05am (+07) </div>
											<div className="countdownInfo">
												<div>
													<div className="countNumber">01</div>
													<div className="small text-secondary">Days</div>
												</div>
												<div>
													<div className="countNumber">01</div>
													<div className="small text-secondary">Hours</div>
												</div>
												<div>
													<div className="countNumber">01</div>
													<div className="small text-secondary">Minutes</div>
												</div>
												<div>
													<div className="countNumber">01</div>
													<div className="small text-secondary">Seconds</div>
												</div>
											</div>
										</div>
										<div className="priceHolder">
											<div>Price</div>
											<div className="P_price">
												<span className="P_tokenPrice">
													<img alt="" src={i_token} />
													<span>150 STRT</span>
												</span>
												<span className="P_convertPrice">≈ $ 149.91</span>
											</div>
										</div>
										<div>
											<button onClick={() => setShowModalBuy(!showModalBuy)} className="btn btn-primary btn_buy me-2 mb-2" >Buy now</button>
											<button onClick={() => setShowModalBid(!showModalBid)} className="btn btn-primary btn_buy me-2 mb-2" >Place bid</button>
										</div>
									</div>
								</div>
								<div className="Ptab_info">
									<div className="nav nav-tabs mb-4" id="nav-tab" role="tablist">
										<a className="nav-item active" id="nav-Properties-tab" data-toggle="tab" href="#nav-Properties" role="tab" aria-controls="nav-Properties" aria-selected="true">Properties</a>
										<a className="nav-item" id="nav-History-tab" data-toggle="tab" href="#nav-History" role="tab" aria-controls="nav-History" aria-selected="false">History</a>
									</div>
									<div className="tab-content" id="nav-tabContent">
										<div className="tab-pane fade show active" id="nav-Properties" role="tabpanel" aria-labelledby="nav-Properties-tab">
											<div className="propertiesList">
												<div className="propertyItem">
													<div className="small text-secondary">Background</div>
													<div>Darkblue</div>
												</div>
												<div className="propertyItem">
													<div className="small text-secondary">Gender</div>
													<div>Darkblue</div>
												</div>
												<div className="propertyItem">
													<div className="small text-secondary">Eye color</div>
													<div>Male</div>
												</div>
												<div className="propertyItem">
													<div className="small text-secondary">Hair</div>
													<div>Songoku</div>
												</div>
												<div className="propertyItem">
													<div className="small text-secondary">Hand</div>
													<div>5 fingers</div>
												</div>
												<div className="propertyItem">
													<div className="small text-secondary">Shoes</div>
													<div>Kappa</div>
												</div>
											</div>
										</div>
										<div className="tab-pane fade" id="nav-History" role="tabpanel" aria-labelledby="nav-History-tab">
											<div className="table-responsive">
												<table className="table middle">
													<thead>
														<tr>
															<th>Event</th>
															<th>From</th>
															<th>To</th>
															<th className="text-right">Price</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<div>Transfer</div>
																<div className="time">December 13, 2021 - 2:58 PM</div>
															</td>
															<td>0x6288...65D2</td>
															<td>0x6288...A982</td>
															<td className="text-right"><img alt="" src={i_token} width="16" height="16" /> 90 CTV</td>
														</tr>
														<tr>
															<td>
																<div>Transfer</div>
																<div className="time">December 13, 2021 - 2:58 PM</div>
															</td>
															<td>0x6288...65D2</td>
															<td>0x6288...A982</td>
															<td className="text-right"><img alt="" src={i_token} width="16" height="16" /> 90 CTV</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<ModalBuy show={showModalBuy} onHide={() => setShowModalBuy(!showModalBuy)} />
			<ModalBid show={showModalBid} onHide={() => setShowModalBid(!showModalBid)} />
		</>
	);
};

export default HomeView;

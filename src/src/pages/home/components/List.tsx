import React from 'react';
import { NavLink } from 'react-router-dom';

import i_token from '@assets/images/i_token.png';
import i_filter from '@assets/images/i_filter.svg';
import i_clock from '@assets/images/i_clock.svg';
import i_times from '@assets/images/i_times.svg';
import i_price from '@assets/images/i_price.svg';
import i_heart from '@assets/images/i_heart.svg';
import i_gavel from '@assets/images/i_gavel.svg';
import p_1 from '@assets/images/p-1.png';
import p_2 from '@assets/images/p-2.png';
import p_3 from '@assets/images/p-3.png';
import p_4 from '@assets/images/p-4.png';
import p_5 from '@assets/images/p-5.png';

const SectionView: React.FC = () => {
	return (
		<React.Fragment>
			<section id="itemList" className="section">
				<div className="container">
					<div className="sectionHeader">
						<div className="sectionTitle">
							<h2><span>New</span> items</h2>
						</div>
						<div className="sectionTools">
							<div className="search">
								<input type="text" className="form-control" placeholder="Search item..."/>
							</div>
							<div className="filter ml-2">
								<NavLink className="btn btn-outline dropdown-toggle" to="#" role="button" data-toggle="dropdown">
									<img alt="" src={i_filter} height="20" width="20" className="mr-2"/><span>Filter</span>
								</NavLink>
								<div className="dropdown-menu dropdown-menu-right">
									<form className="formFilter">
										<div className="filterRow">
											<label className="filterTit">Price</label>
											<div className="listVals">
												<div className="radioCustom">
													<input type="radio"  name="customRadio"/>
													<label className="radioCustomlabel" >STRT</label>
												</div>
												<div className="radioCustom">
													<input type="radio"  name="customRadio"/>
													<label className="radioCustomlabel" >BNB</label>
												</div>
												<div className="radioCustom">
													<input type="radio"  name="customRadio"/>
													<label className="radioCustomlabel">BUSDT</label>
												</div>
												<div className="d-flex justify-content-between">
													<input type="text" className="form-control priceInput" placeholder="From"/>
													<span className="mx-2">-</span>
													<input type="text" className="form-control priceInput" placeholder="To"/>
												</div>
											</div>
										</div>
										<div className="filterRow">
											<label className="filterTit">Gender</label>
											<div className="listVals">
												<div className="checkboxCustom">
													<input type="checkbox"/> <label >Male</label>
												</div>
												<div className="checkboxCustom">
													<input type="checkbox" /> <label >Female</label>
												</div>
											</div>
										</div>
										<div className="filterRow">
											<label className="filterTit">Type</label>
											<div className="listVals">
												<div className="checkboxCustom">
													<input type="checkbox"/> <label>Human</label>
												</div>
												<div className="checkboxCustom">
													<input type="checkbox"/> <label>Alien</label>
												</div>
												<div className="checkboxCustom">
													<input type="checkbox"/> <label>Cyber</label>
												</div>
												<div className="checkboxCustom">
													<input type="checkbox"/> <label>Zombie</label>
												</div>
											</div>
										</div>										
										<div className="filterRow">
											<label className="filterTit">Background</label>
											<div className="listVals">
												<div className="checkboxCustom">
													<input type="checkbox"/> <label>Dark</label>
												</div>
												<div className="checkboxCustom">
													<input type="checkbox"/> <label>Orange</label>
												</div>
												<div className="checkboxCustom">
													<input type="checkbox"/> <label>Green</label>
												</div>
												<div className="checkboxCustom">
													<input type="checkbox"/> <label>Aquamarine</label>
												</div>
												<div className="checkboxCustom">
													<input type="checkbox"/> <label>Rainbow</label>
												</div>
											</div>
										</div>
										<button type="reset" className="btn resetFilterBtn"><img alt="" src={i_times}/> Clear filter</button>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="sectionBody">
						<div className="listP">
							<div className="itemP">
								<NavLink to="#" className="itemP_img">
									<img alt="" src={p_1}/>
								</NavLink>
								<div className="itemP_meta">
									<div  className="itemP_name"><NavLink to="#">Crypto Origami #05</NavLink></div>
									<div className="itemP_priceHolder">
										<div className="small text-secondary"><img alt="" src={i_price}/> Price</div>
										<div className="text-right">
											<div className="font-weight-bold"><img alt="" src={i_token} width="16" height="16"/> 150 STRT</div>
											<div className="small text-secondary">≈ $ 149.91</div>
										</div>
									</div>
									<hr className="w-100 my-0"/>
									<div className="d-flex justify-content-between">
										<NavLink to="#" className="buy_link">Buy now</NavLink>
										<div className="ml-auto">
											<img alt="" src={i_heart}/><span className="small text-secondary ml-2">3</span>
										</div>
									</div>
								</div>
							</div>
							<div className="itemP">
								<NavLink to="#" className="itemP_img">
									<img alt="" src={p_2}/>
								</NavLink>
								<div className="itemP_meta">
									<div  className="itemP_name"><NavLink to="#">Crypto Origami #05</NavLink></div>
									<div className="itemP_priceHolder">
										<div className="small text-secondary"><img alt="" src={i_gavel}/> Price</div>
										<div className="text-right">
											<div className="font-weight-bold"><img alt="" src={i_token} width="16" height="16"/> 150 STRT</div>
											<div className="small text-secondary">≈ $ 149.91</div>
										</div>
									</div>
									<hr className="w-100 my-0"/>
									<div className="d-flex justify-content-between">
										<NavLink to="#" className="buy_link">Buy now</NavLink>
										<div className="countdown">
											<img alt="" src={i_clock}/><span className="small text-secondary"> 12:56:37</span>
										</div>
										<div className="ml-auto countLove">
											<img alt="" src={i_heart}/><span className="small text-secondary ml-2">3</span>
										</div>
									</div>
								</div>
							</div>
							<div className="itemP">
								<NavLink to="#" className="itemP_img">
									<img alt="" src={p_1}/>
								</NavLink>
								<div className="itemP_meta">
									<div  className="itemP_name"><NavLink to="#">Crypto Origami #05</NavLink></div>
									<div className="itemP_priceHolder">
										<div className="small text-secondary"><img alt="" src={i_price}/> Price</div>
										<div className="text-right">
											<div className="font-weight-bold"><img alt="" src={i_token} width="16" height="16"/> 150 STRT</div>
											<div className="small text-secondary">≈ $ 149.91</div>
										</div>
									</div>
									<hr className="w-100 my-0"/>
									<div className="d-flex justify-content-between">
										<NavLink to="#" className="buy_link">Buy now</NavLink>
										<div className="ml-auto">
											<img alt="" src={i_heart}/><span className="small text-secondary ml-2">3</span>
										</div>
									</div>
								</div>
							</div>
							<div className="itemP">
								<NavLink to="#" className="itemP_img">
									<img alt="" src={p_2}/>
								</NavLink>
								<div className="itemP_meta">
									<div  className="itemP_name"><NavLink to="#">Crypto Origami #05</NavLink></div>
									<div className="itemP_priceHolder">
										<div className="small text-secondary"><img alt="" src={i_gavel}/> Price</div>
										<div className="text-right">
											<div className="font-weight-bold"><img alt="" src={i_token} width="16" height="16"/> 150 STRT</div>
											<div className="small text-secondary">≈ $ 149.91</div>
										</div>
									</div>
									<hr className="w-100 my-0"/>
									<div className="d-flex justify-content-between">
										<NavLink to="#" className="buy_link">Buy now</NavLink>
										<div className="countdown">
											<img alt="" src={i_clock}/><span className="small text-secondary"> 12:56:37</span>
										</div>
										<div className="ml-auto countLove">
											<img alt="" src={i_heart}/><span className="small text-secondary ml-2">3</span>
										</div>
									</div>
								</div>
							</div>
							<div className="itemP">
								<NavLink to="#" className="itemP_img">
									<img alt="" src={p_1}/>
								</NavLink>
								<div className="itemP_meta">
									<div  className="itemP_name"><NavLink to="#">Crypto Origami #05</NavLink></div>
									<div className="itemP_priceHolder">
										<div className="small text-secondary"><img alt="" src={i_price}/> Price</div>
										<div className="text-right">
											<div className="font-weight-bold"><img alt="" src={i_token} width="16" height="16"/> 150 STRT</div>
											<div className="small text-secondary">≈ $ 149.91</div>
										</div>
									</div>
									<hr className="w-100 my-0"/>
									<div className="d-flex justify-content-between">
										<NavLink to="#" className="buy_link">Buy now</NavLink>
										<div className="ml-auto">
											<img alt="" src={i_heart}/><span className="small text-secondary ml-2">3</span>
										</div>
									</div>
								</div>
							</div>
							<div className="itemP">
								<NavLink to="#" className="itemP_img">
									<img alt="" src={p_3}/>
								</NavLink>
								<div className="itemP_meta">
									<div  className="itemP_name"><NavLink to="#">Crypto Origami #05</NavLink></div>
									<div className="itemP_priceHolder">
										<div className="small text-secondary"><img alt="" src={i_gavel}/> Price</div>
										<div className="text-right">
											<div className="font-weight-bold"><img alt="" src={i_token} width="16" height="16"/> 150 STRT</div>
											<div className="small text-secondary">≈ $ 149.91</div>
										</div>
									</div>
									<hr className="w-100 my-0"/>
									<div className="d-flex justify-content-between">
										<NavLink to="#" className="buy_link">Buy now</NavLink>
										<div className="countdown">
											<img alt="" src={i_clock}/><span className="small text-secondary"> 12:56:37</span>
										</div>
										<div className="ml-auto countLove">
											<img alt="" src={i_heart}/><span className="small text-secondary ml-2">3</span>
										</div>
									</div>
								</div>
							</div>
							<div className="itemP">
								<NavLink to="#" className="itemP_img">
									<img alt="" src={p_5}/>
								</NavLink>
								<div className="itemP_meta">
									<div  className="itemP_name"><NavLink to="#">Crypto Origami #05</NavLink></div>
									<div className="itemP_priceHolder">
										<div className="small text-secondary"><img alt="" src={i_price}/> Price</div>
										<div className="text-right">
											<div className="font-weight-bold"><img alt="" src={i_token} width="16" height="16"/> 150 STRT</div>
											<div className="small text-secondary">≈ $ 149.91</div>
										</div>
									</div>
									<hr className="w-100 my-0"/>
									<div className="d-flex justify-content-between">
										<NavLink to="#" className="buy_link">Buy now</NavLink>
										<div className="ml-auto">
											<img alt="" src={i_heart}/><span className="small text-secondary ml-2">3</span>
										</div>
									</div>
								</div>
							</div>
							<div className="itemP">
								<NavLink to="#" className="itemP_img">
									<img alt="" src={p_4}/>
								</NavLink>
								<div className="itemP_meta">
									<div  className="itemP_name"><NavLink to="#">Crypto Origami #05</NavLink></div>
									<div className="itemP_priceHolder">
										<div className="small text-secondary"><img alt="" src={i_gavel}/> Price</div>
										<div className="text-right">
											<div className="font-weight-bold"><img alt="" src={i_token} width="16" height="16"/> 150 STRT</div>
											<div className="small text-secondary">≈ $ 149.91</div>
										</div>
									</div>
									<hr className="w-100 my-0"/>
									<div className="d-flex justify-content-between">
										<NavLink to="#" className="buy_link">Buy now</NavLink>
										<div className="countdown">
											<img alt="" src={i_clock}/><span className="small text-secondary"> 12:56:37</span>
										</div>
										<div className="ml-auto countLove">
											<img alt="" src={i_heart}/><span className="small text-secondary ml-2">3</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="loading">
							<img alt="" src={i_token} width="16" height="16"/> LOADING
						</div>
					</div>
				</div>

			</section>
		</React.Fragment>
	);
}

export default SectionView;

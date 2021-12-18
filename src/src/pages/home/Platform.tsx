import React, { useState, useEffect } from "react";
import platform from "@assets/images/platform.png";
import item_1 from "@assets/images/item_1.svg";
import item_2 from "@assets/images/item_2.svg";
import item_3 from "@assets/images/item_3.svg";
import item_4 from "@assets/images/item_4.svg";
import item_5 from "@assets/images/item_5.svg";

const Section: React.FC = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
	  function handleResize() {
		setWidth(window.innerWidth);
	  }
	  window.addEventListener("resize", handleResize);
	  return () => window.removeEventListener("resize", handleResize);
	}, [width]);
	return (
		<div className="bx-section section-platform" id="bx-platform">
			<div className="container">
				<div className="bx-platform">
					<div className="bx-header">
						<h2 className="bx-header-title">Platform</h2>
					</div>
					<div className="bx-content">
						<img src={platform} className="img-fluid" alt="" />
					</div>
				</div>
				<div className="bx-sdk">
					<div className="bx-header">
						<h2 className="bx-header-title">
							Our full suite of SDK + APIs make blockchain simple and user
							friendly
						</h2>
					</div>
					<div className="bx-content">
						{width > 480 &&
							<div className="list-full">
								<div className="item-list flip-card item-1 group-1">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>Mobile-friendly SDK </h5>
											{width <= 480 && (
												<p>
													Powerful developer libraries and APIs that seamlessly
													integrate with Ethereum, BSC, and ChainVerse
												</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>
												Powerful developer libraries and APIs that seamlessly
												integrate with Ethereum, BSC, and ChainVerse
											</p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-2 group-2">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>Gaming Services</h5>
											{width <= 480 && (
												<p>Load items & update item states</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>Load items & update item states</p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-3 group-2">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>NFT Services</h5>
											{width <= 480 && (
												<p>Create assets & manage lifecycle</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>Create assets & manage lifecycle</p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-4 group-3">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>NFT Builder for End users </h5>
											{width <= 480 && (
												<p>
													Increase the size of the creative talent pool by tapping
													gaming communities
												</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>
												Increase the size of the creative talent pool by tapping
												gaming communities
											</p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-5 group-3">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>Market Place Services </h5>
											{width <= 480 && (
												<p>Process buy, sell, and trade orders in game</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>Process buy, sell, and trade orders in game</p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-6 group-2">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>Payment Services </h5>
											{width <= 480 && (
												<p>
													Partnership with fully licensed fiat-on-ramp wallet
													provider lets users pay with CC, top-up cards, fiat.
												</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>
												Partnership with fully licensed fiat-on-ramp wallet
												provider lets users pay with CC, top-up cards, fiat.
											</p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-7 group-2">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>Pool Manager</h5>
											{width <= 480 && (
												<p>
													Create and manage Game Pools and Guilds. Fund projects
													and NFT minting events
												</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>
												Create and manage Game Pools and Guilds. Fund projects and
												NFT minting events
											</p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-8 group-3">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>NFT Explorer </h5>
											{width <= 480 && (
												<p>Explore, browse, search for assets </p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>Explore, browse, search for assets </p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-9 group-3">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>E-wallet</h5>
											{width <= 480 && (
												<p>
													Manage all game assets from one platform for convenience
													and uniform experience
												</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>
												Manage all game assets from one platform for convenience
												and uniform experience
											</p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-10 group-2">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>Atlas Oracle Services</h5>
											{width <= 480 && (
												<p>
													Facilitate interactions between on-chain and off-chain
													processes
												</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>
												Facilitate interactions between on-chain and off-chain
												processes
											</p>
										</div>
									</div>
								</div>
							</div>
						}
						{width <= 480 &&
							<div className="list-full">
								<div className="item-list flip-card item-1 group-1">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>Mobile-friendly SDK </h5>
											{width <= 480 && (
												<p>
													Powerful developer libraries and APIs that seamlessly
													integrate with Ethereum, BSC, and ChainVerse
												</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>
												Powerful developer libraries and APIs that seamlessly
												integrate with Ethereum, BSC, and ChainVerse
											</p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-2 group-2">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>Gaming Services</h5>
											{width <= 480 && (
												<p>Load items & update item states</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>Load items & update item states</p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-3 group-2">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>NFT Services</h5>
											{width <= 480 && (
												<p>Create assets & manage lifecycle</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>Create assets & manage lifecycle</p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-6 group-2">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>Payment Services </h5>
											{width <= 480 && (
												<p>
													Partnership with fully licensed fiat-on-ramp wallet
													provider lets users pay with CC, top-up cards, fiat.
												</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>
												Partnership with fully licensed fiat-on-ramp wallet
												provider lets users pay with CC, top-up cards, fiat.
											</p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-7 group-2">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>Pool Manager</h5>
											{width <= 480 && (
												<p>
													Create and manage Game Pools and Guilds. Fund projects
													and NFT minting events
												</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>
												Create and manage Game Pools and Guilds. Fund projects and
												NFT minting events
											</p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-10 group-2">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>Atlas Oracle Services</h5>
											{width <= 480 && (
												<p>
													Facilitate interactions between on-chain and off-chain
													processes
												</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>
												Facilitate interactions between on-chain and off-chain
												processes
											</p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-4 group-3">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>NFT Builder for End users </h5>
											{width <= 480 && (
												<p>
													Increase the size of the creative talent pool by tapping
													gaming communities
												</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>
												Increase the size of the creative talent pool by tapping
												gaming communities
											</p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-5 group-3">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>Market Place Services </h5>
											{width <= 480 && (
												<p>Process buy, sell, and trade orders in game</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>Process buy, sell, and trade orders in game</p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-8 group-3">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>NFT Explorer </h5>
											{width <= 480 && (
												<p>Explore, browse, search for assets </p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>Explore, browse, search for assets </p>
										</div>
									</div>
								</div>
								<div className="item-list flip-card item-9 group-3">
									<div className="flip-card-inner">
										<div className="flip-card-front card-item-content">
											<h5>E-wallet</h5>
											{width <= 480 && (
												<p>
													Manage all game assets from one platform for convenience
													and uniform experience
												</p>
											)}
										</div>
										<div className="flip-card-back card-item-content">
											<p>
												Manage all game assets from one platform for convenience
												and uniform experience
											</p>
										</div>
									</div>
								</div>
							</div>
						}
					</div>
				</div>
				<div className="bx-design">
					<div className="row align-items-center ">
						<div className="col-md-5">
							<div className="bx-header">
								<h2 className="bx-header-title left">
									Design your own economies
								</h2>
							</div>
						</div>
						<div className="col-md-7">
							<div className="list-design">
								<div className="item-design">
									<div className="item-inner  item-1">
										<img src={item_1} alt="" />
										<h5>Game pool</h5>
										<p>
											Share pool incomes with your gamers and promoters, and
											protect your games from item spamming
										</p>
									</div>
								</div>
								<div className="item-design">
									<div className="item-inner  item-2">
										<img src={item_2} alt="" />
										<h5>Staking</h5>
										<p>Stake CVT for rewards</p>
									</div>
									<div className="item-inner  item-3">
										<img src={item_3} alt="" />
										<h5>Guild</h5>
										<p>
											Organize or let your gamers organize guilds to crowd-fund
											for your games before they’re launched
										</p>
									</div>
								</div>
								<div className="item-design">
									<div className="item-inner  item-4">
										<img src={item_4} alt="" />
										<h5>Play to Earn</h5>
										<p>
											Reward your gamers with CRT token to increase their
											engagement
										</p>
									</div>
									<div className="item-inner  item-5">
										<img src={item_5} alt="" />
										<h5>Recurring royalties</h5>
										<p>
											Bake in recurring payments in NFTs for any creators and
											owners
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section;

import React from "react";
import Navbar from "@components/Navbar";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Listing from "./components/List";

const HomeView: React.FC = () => {
	return (
		<>
			<Navbar />
			<div className="mainPage">
				<Banner />
				<Carousel />
				<Listing />
			</div>
		</>
	);
};

export default HomeView;

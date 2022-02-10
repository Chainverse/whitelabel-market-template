import React from 'react';
import { NavLink } from 'react-router-dom';

import banner from '@assets/images/bannerTop.jpg';

const SectionView: React.FC = () => {
	return (
		<React.Fragment>
			<section id="topBanner">
				<NavLink to="#">
					<img className="topBanner" src={banner} alt='' />
				</NavLink>
			</section>
		</React.Fragment>
	);
}

export default SectionView;

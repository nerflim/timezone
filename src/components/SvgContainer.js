import React from 'react';
import Road from './svg/Road';
import Building from './svg/Building';
import Sun from './svg/Sun';
import Clouds from './svg/Clouds';
import TreeA from './svg/TreeA';
import TreeB from './svg/TreeB';
import TreeC from './svg/TreeC';
import TreeD from './svg/TreeD';

const SvgContainer = () => {
	return (
		<div className='svg-container'>
			<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 350 600' xmlSpace='preserve'>
				<g id='background'>
					<linearGradient id='bg-day' gradientUnits='userSpaceOnUse' x1='175' y1='0' x2='175' y2='600'>
						<stop offset='0' stopColor='#FFC9CA' />
						<stop offset='0.28' stopColor='#DED7EA' />
						<stop offset='0.415' stopColor='#CDDFFB' />
					</linearGradient>
					<rect width='350' height='600' fill="url('#bg-day')" />
				</g>

				<Building />
				<Sun />
				<Clouds />
				<Road />
				<TreeA />
				<TreeB />
				<TreeC />
				<TreeD />
			</svg>
		</div>
	);
};

export default SvgContainer;

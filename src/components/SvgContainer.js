import React from 'react';
import Road from './svg/Road';
import Building from './svg/Building';
import Sun from './svg/Sun';
import Clouds from './svg/Clouds';
import TreeA from './svg/TreeA';
import TreeB from './svg/TreeB';
import TreeC from './svg/TreeC';
import TreeD from './svg/TreeD';
import PersonA from './svg/persons/PersonA';
import PersonB from './svg/persons/PersonB';
import PersonC from './svg/persons/PersonC';
import PersonD from './svg/persons/PersonD';
import CarA from './svg/cars/CarA';
import CarB from './svg/cars/CarB';
import Time from './svg/Time';
import PersonE from './svg/persons/PersonE';

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
				<PersonC />
				<PersonD />
				<PersonE />
				<CarB />
				<CarA />
				<PersonA />
				<PersonB />
				<Time />
			</svg>
		</div>
	);
};

export default SvgContainer;

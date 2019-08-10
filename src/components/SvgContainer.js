import React, { useEffect, useState } from 'react';

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
import CarC from './svg/cars/CarC';
import CarD from './svg/cars/CarD';
import Background from './svg/Background';

const SvgContainer = () => {
	const [time, setTime] = useState(new Date());
	const [morning, setMorning] = useState(true);
	const [afternoon, setAfternoon] = useState(false);
	const [night, setNight] = useState(false);

	const toggle = type => {
		if (type === 'morning') {
			setMorning(true);
			setAfternoon(false);
			setNight(false);
		} else if (type === 'afternoon') {
			setMorning(false);
			setAfternoon(true);
			setNight(false);
		} else {
			setMorning(false);
			setAfternoon(false);
			setNight(true);
		}
	};

	useEffect(() => {
		setInterval(() => {
			setTime(new Date());
		}, 10000);
	}, []);
	return (
		<div className='svg-container'>
			<button onClick={() => toggle('morning')}>morning</button>
			<button onClick={() => toggle('afternoon')}>afternoon</button>
			<button onClick={() => toggle('evening')}>evening</button>
			<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 350 600' xmlSpace='preserve'>
				<Background time={time} morning={morning} afternoon={afternoon} night={night} />
				<Building />
				<Sun />
				<Clouds />
				<Road />
				<TreeA />
				<TreeB />
				<TreeC />
				<TreeD />
				<PersonE />
				<PersonC />
				<PersonD />

				<CarB />
				<CarD />
				<CarA />
				<CarC />
				<PersonA />
				<PersonB />
				<Time time={time} />
			</svg>
		</div>
	);
};

export default SvgContainer;

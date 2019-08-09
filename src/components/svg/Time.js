import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { TweenMax } from 'gsap';

const Time = () => {
	const [time, setTime] = useState(new Date());
	useEffect(() => {
		TweenMax.from('#time', 0, {
			x: 50
		});
		setInterval(() => {
			setTime(new Date());
		});
	}, []);
	return (
		<g id='time'>
			<text id='time' fill='#393762' fontWeight='bold' fontSize='37.2097px' x='338' y='220' textAnchor='end'>
				{moment(time).format('hh:mm A')}
			</text>
			<text id='date' fill='#393762' fontSize='16px' x='336' y='248' textAnchor='end'>
				{moment(time).format('MMMM DD, YYYY')}
			</text>
			<rect x='316.2' y='226.6' width='19.1' height='2.1' fill='#393762' />
		</g>
	);
};

export default Time;

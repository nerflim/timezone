import React, { useEffect } from 'react';
import moment from 'moment';
import { TweenMax } from 'gsap';

const Time = () => {
	useEffect(() => {
		TweenMax.from('#time', 0, {
			x: 50
		});
	}, []);
	return (
		<g id='time'>
			<text id='time' transform='matrix(1 0 0 1 196.0918 219.1401)' fill='#393762' fontWeight='bold' fontSize='37.2097px'>
				{moment().format('hh:mm A')}
			</text>
			<text transform='matrix(1 0 0 1 231.0199 248.3901)' fill='#393762' fontSize='16px'>
				August 8, 2019
			</text>
			<rect x='316.2' y='226.6' width='19.1' height='2.1' fill='#393762' />
		</g>
	);
};

export default Time;

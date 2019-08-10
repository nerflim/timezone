import React, { useState, useEffect } from 'react';
import moment from 'moment';
import TweenMax from 'gsap';

const Background = props => {
	const [amPm] = useState(moment(props.time).format('A'));
	const [morning] = useState(
		amPm === 'AM' && parseInt(moment(props.time).format('h'), 10) >= 6 && parseInt(moment(props.time).format('h'), 10) <= 11
	);
	const [afternoon] = useState(
		amPm === 'PM' && parseInt(moment(props.time).format('h'), 10) >= 12 && parseInt(moment(props.time).format('h'), 10) <= 6
	);
	const [even, setEven] = useState(parseInt(moment(props.time).format('m'), 10) % 2 === 0);

	useEffect(() => {
		setEven(parseInt(moment(props.time).format('m'), 10) % 2 === 0);
	}, [props.time]);

	return (
		<g id='background'>
			<linearGradient id='bg-morning' gradientUnits='userSpaceOnUse' x1='175' y1='0' x2='175' y2='600'>
				<stop offset='0' stopColor='#FFC9CA' />
				<stop offset='0.28' stopColor='#DED7EA' />
				<stop offset='0.415' stopColor='#CDDFFB' />
			</linearGradient>
			<linearGradient id='bg-afternoon' gradientUnits='userSpaceOnUse' x1='175' y1='0' x2='175' y2='600'>
				<stop offset='0' stopColor='#FFC95A' />
				<stop offset='0.1605' stopColor='#EDD17B' />
				<stop offset='0.415' stopColor='#CDDFB6' />
			</linearGradient>
			<linearGradient id='bg-night' gradientUnits='userSpaceOnUse' x1='175' y1='0' x2='175' y2='600'>
				<stop offset='0' stopColor='#5C47FF' />
				<stop offset='0.2033' stopColor='#7D4DE2' />
				<stop offset='0.635' stopColor='#CD5B9C' />
			</linearGradient>

			{props.morning ? <rect id='rect-morning' width='350' height='600' fill="url('#bg-morning')" /> : ''}

			{props.afternoon ? <rect id='rect-afternoon' width='350' height='600' fill="url('#bg-afternoon')" /> : ''}

			{props.night ? <rect id='rect-night' width='350' height='600' fill="url('#bg-night')" /> : ''}
		</g>
	);
};

export default Background;

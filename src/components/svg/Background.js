import React, { useState, useEffect } from 'react';
import TweenMax from 'gsap';

const Background = props => {
	const [current, setCurrent] = useState(props.current);

	useEffect(() => {
		TweenMax.fromTo('#rect-overlay', 1, { opacity: 1 }, { opacity: 0 });

		setTimeout(() => {
			setCurrent(props.current);
		}, 1000);
	}, [props]);

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

			<rect
				width='350'
				height='600'
				fill={props.current === 'morning' ? "url('#bg-morning')" : props.current === 'afternoon' ? "url('#bg-afternoon')" : "url('#bg-night')"}
			/>

			{current !== props.current ? (
				<rect
					id='rect-overlay'
					width='350'
					height='600'
					fill={current === 'morning' ? "url('#bg-morning')" : current === 'afternoon' ? "url('#bg-afternoon')" : "url('#bg-night')"}
				/>
			) : null}
		</g>
	);
};

export default Background;

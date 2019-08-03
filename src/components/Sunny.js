import React, { useState, useEffect, useRef } from 'react';
import { TweenMax, Power0 } from 'gsap';
import moment from 'moment';

const Sunny = () => {
	const [time, setTime] = useState(new Date());

	// refs
	const sun = useRef(null);
	const sunRay1 = useRef(null);
	const sunRay2 = useRef(null);

	const minute = useRef(null);
	const hour = useRef(null);

	useEffect(() => {
		TweenMax.to(sun.current, 1, {
			x: sun.current.attributes.r.value - sun.current.attributes.r.value * 0.8,
			y: sun.current.attributes.r.value - sun.current.attributes.r.value * 0.8,
			scaleX: 0.8,
			scaleY: 0.8,
			yoyoEase: true,
			repeat: -1
		});
		TweenMax.to(sunRay1.current, 1, {
			x: sunRay1.current.attributes.r.value - sunRay1.current.attributes.r.value * 0.8,
			y: sunRay1.current.attributes.r.value - sunRay1.current.attributes.r.value * 0.8,
			scaleX: 0.8,
			scaleY: 0.8,
			yoyoEase: true,
			repeat: -1
		});
		TweenMax.to(sunRay2.current, 1, {
			x: sunRay2.current.attributes.r.value - sunRay2.current.attributes.r.value * 0.8,
			y: sunRay2.current.attributes.r.value - sunRay2.current.attributes.r.value * 0.8,
			scaleX: 0.8,
			scaleY: 0.8,
			yoyoEase: true,
			repeat: -1
		});

		TweenMax.to(minute.current, 5, {
			rotation: 360,
			transformOrigin: 'bottom',
			ease: Power0.easeNone,
			repeat: -1
		});

		TweenMax.to(hour.current, 60, {
			rotation: 360,
			transformOrigin: 'bottom left',
			ease: Power0.easeNone,
			repeat: -1
		});

		setInterval(() => {
			setTime(new Date());
		}, 1000);
	}, []);

	return (
		<div className='weather-sunny'>
			<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox={`0 0 350 600`}>
				<circle className='sun' cx='0' cy='0' r='80' fill='#ffd23f' ref={sun} />
				<circle cx='0' cy='0' r='100' fill='#ffd23f' opacity='0.1' ref={sunRay1} />
				<circle cx='0' cy='0' r='120' fill='#ffd23f' opacity='0.1' ref={sunRay2} />

				<g>
					<linearGradient id='land' gradientUnits='userSpaceOnUse' x1='175' y1='591.853' x2='175' y2='397.3178'>
						<stop offset='0' stopColor='#3AB795' />
						<stop offset='1' stopColor='#A0E8AF' />
					</linearGradient>
					<rect y='444.4' width='350' height='155.6' fill="url('#land')" />
				</g>

				<g id='clock'>
					<circle cx='175' cy='278.4' r='89.1' fill='none' stroke='#FFFFFF' strokeWidth='10' strokeMiterlimit='10' />
					<circle cx='175' cy='278.4' r='89.1' opacity='0.1' fill='#FFFFFF' />
					<circle cx='175' cy='278.4' r='6.5' fill='#FFFFFF' />
					<line
						x1='175'
						y1='278.4'
						x2='175'
						y2='225.1'
						opacity='0.37'
						fill='none'
						stroke='#FFFFFF'
						strokeWidth='7'
						strokeLinecap='round'
						strokeMiterlimit='10'
						ref={minute}
					/>
					<line
						x1='174.8'
						y1='278.2'
						x2='214.3'
						y2='278.2'
						opacity='0.37'
						fill='none'
						stroke='#FFFFFF'
						strokeWidth='7'
						strokeLinecap='round'
						strokeMiterlimit='10'
						ref={hour}
					/>

					{/* transform='matrix(1 0 0 1 100.9463 417.6328)' */}
					<text x='50%' y='415' style={{ fill: '#ffffff', fontSize: '35px' }} dominantBaseline='middle' textAnchor='middle'>
						{moment(time).format('hh:mm:ss A')}
					</text>
					<text transform='matrix(1 0 0 1 165.7974 212.8438)' style={{ fill: '#ffffff', fontSize: '19px' }}>
						12
					</text>
					<text transform='matrix(1 0 0 1 95.791 284.8613)' style={{ fill: '#ffffff', fontSize: '19px' }}>
						9
					</text>
					<text transform='matrix(1 0 0 1 241.5493 287.8613)' style={{ fill: '#ffffff', fontSize: '19px' }}>
						3
					</text>
					<text transform='matrix(1 0 0 1 168.9683 355.5693)' style={{ fill: '#ffffff', fontSize: '19px' }}>
						6
					</text>
				</g>
			</svg>
		</div>
	);
};

export default Sunny;

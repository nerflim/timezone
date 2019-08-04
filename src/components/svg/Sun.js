import React, { useEffect } from 'react';
import { TweenMax } from 'gsap';

const Sun = () => {
	useEffect(() => {
		TweenMax.to(['.sunRay1', '.sunRay2'], 1, {
			transformOrigin: '50% 50%',
			scaleX: 1.1,
			scaleY: 1.1,
			repeat: -1,
			yoyoEase: true
		});
	}, []);

	return (
		<g id='sun'>
			<circle opacity='0.1' fill='#FAFFB9' cx='293.5' cy='82' r='48.8' className='sunRay1' />
			<circle opacity='0.2' fill='#FAFFB9' cx='293.5' cy='82' r='40.5' className='sunRay2' />
			<circle fill='#FAFFB9' cx='293.5' cy='82' r='32.8' />
		</g>
	);
};

export default Sun;

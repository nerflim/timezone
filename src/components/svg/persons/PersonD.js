import React, { useEffect } from 'react';
import { TweenMax, Power0 } from 'gsap';

const PersonD = () => {
	useEffect(() => {
		TweenMax.to('#pd-arm-right', 0.8, {
			rotation: 40,
			transformOrigin: 'top middle',
			y: 1,
			x: 2,
			repeat: -1,
			yoyoEase: true
		});
		TweenMax.to('#pd-leg-right', 0.8, {
			rotation: 45,
			transformOrigin: 'top left',
			y: -5,
			x: 2,
			scaleY: 1.1,
			repeat: -1,
			yoyoEase: true
		});
		TweenMax.to('#pd-leg-left', 0.8, {
			rotation: -45,
			transformOrigin: 'top right',
			y: -5,
			x: 0,
			scaleY: 1.1,
			repeat: -1,
			yoyoEase: true
		});
		TweenMax.fromTo(
			'#person-d',
			20,
			{
				x: -70
			},
			{
				x: 350,
				ease: Power0.easeNone,
				repeat: -1,
				delay: 3
			}
		);
	}, []);
	return (
		<g id='person-d'>
			<g id='pd-leg-left'>
				<polygon className='st45' points='37.8,450.1 35.2,450.1 33.3,448.6 35.7,444.7 37,445.5 35.4,448.4 35.9,449.5' />
				<path className='st45' d='M52.5,416.3l-6.2,14.2l-1.4,3.3l-0.3,0c-1.4,0.2-2.7-0.7-3-2l-0.2-0.7l2.1-14.8H52.5z' />
				<path className='st45' d='M44.8,433.8l-0.2-1.8c-0.1-1.2-1.4-1.8-2.4-1.2l-0.9,0.3l-6.7,15.4l1.4,0.9L44.8,433.8z' />
			</g>
			<g id='pd-leg-right'>
				<g>
					<path className='st45' d='M62,445l1,3.1c0,0,3.2,0.2,3.3,0.4l-4.6,1.3l-1.2-4.4L62,445z' />
				</g>
				<path className='st45' d='M60,430.9l-0.2,0.4c-0.7,1.4-2.5,2-3.9,1.1l-0.4-0.3l-5.7-9.3l-4-6.5h9.5L60,430.9z' />
				<path className='st45' d='M60,430.9l2.8,16.4l-1.6,0.3l-5.7-15.5l0.4-0.8c0.6-1.2,2.1-1.6,3.2-1L60,430.9z' />
			</g>
			<g id='pd-body'>
				<path
					className='st45'
					d='M52.3,395.8c2.4-0.9,4.2-2.9,4-5.5c-0.2-2.3-1.5-4.6-3.7-5.6c-0.8-0.4-1.6-0.6-2.4-0.6
				c-3.6-0.1-5.4,4-5.8,7c-0.2,1.6,1.1,2.3,2.2,3.2C48.3,395.7,50.2,396.6,52.3,395.8z'
				/>
				<path
					className='st47'
					d='M51.1,395.6l1.2-2.6c0,0,1,0.3,1.4-0.1c0.2-0.2,0.3-1,0.4-2c0-0.1,0-0.3,0-0.4c0-0.1,0.5,0.2,0.5,0.1
					c0-0.3-0.5-1.1-0.5-1.4c0-1.3-0.2-2.6-0.7-3.1c-1.1-1.1-5-1.3-5.6,0.6c-0.6,1.9-0.1,4.1,1.5,5.6l-1.1,2.7L51.1,395.6z'
				/>
				<path
					className='st45'
					d='M54.8,386.9c-2,2.1-3.4,5.1-6.2,6c-0.3-1.1-1.8-3.5-1.8-4.6c0-1.1,0.5-2.2,1.3-2.9c0.7-0.5,1.5-0.7,2.3-0.7
				C52.2,384.6,54,385.4,54.8,386.9z'
				/>
				<path
					className='st49'
					d='M48.1,392.8c0,0,2.4,0.8,3.7,2.2c1.2,1.4,3.2,5.5,3.2,5.9s-1.4,5.4-1.4,5.4l3,11.5c0,0-9.4,1.5-14.1,0
					l2.5-9.1c0,0-0.6-3.7-0.7-4.3c-0.4-1.7,0.3-4.3,0.6-6.1c0.3-1.8,1.7-3.8,2.2-4.2C47.5,393.6,48.1,392.8,48.1,392.8z'
				/>
				<path
					className='st47'
					d='M52.8,404.7l0.6,2.4c0,0,5.3-2,5.7-2.1c0,0,0.9-0.7,1.1-0.9c0.2-0.1,0.8-1.6,0.8-1.8s-1.1-0.2-1.1-0.2
						s0-0.7-0.1-0.9c0-0.1-0.3-0.7-0.4-0.3l-0.3,1.1l-0.4,0.4c-0.2,0.3-0.4,1.4-0.4,1.4L52.8,404.7z'
				/>
				<polygon className='st46' points='59.6,403.5 60.3,400.9 60.9,398.7 61.7,399 60.3,403.6 					' />
				<path className='st49' d='M52.4,404.6c0,0,0.6-1.8,1.9-1.1c1.2,0.7,2.2-0.2,2.2-0.2l2,0.3l0.7,1.3l-6.2,2.6L52.4,404.6z' />
				<path
					className='st47'
					d='M61.1,402.3c0.1-0.3-0.2-1.2-0.3-1.1c-0.1,0.1-0.2,0.6-0.2,0.6l0.1,0.3c0,0-0.2-0.1-0.2,0
						c0,0.1-0.1,0.4-0.1,0.4l0,0.6L61.1,402.3z'
				/>
				<path
					className='st49'
					d='M48.9,393.1c-1.1-0.8-5.1-0.9-5.5-0.6c-0.5,0.3,0.6,1.3,0.5,1.9c-0.1,0.6-2.4,1.5-1.6,2.8
					c0.8,1.4,3.1,3,3.1,3L48.9,393.1z'
				/>
				<path
					className='st55'
					d='M44.7,399C44.7,399,44.6,399,44.7,399c-0.1,0-0.1-0.1-0.1-0.1c0.4-1.9,1.4-3.6,2.9-4.9c0,0,0.1,0,0.2,0
					c0,0,0,0.1,0,0.2c-1.4,1.2-2.4,2.9-2.8,4.8C44.8,399,44.7,399,44.7,399z'
				/>
			</g>
			<g id='pd-arm-right'>
				<polygon className='st46' points='40.9,412 57.2,409.1 58.6,418.1 42.1,420.6' />
				<path
					className='st47'
					d='M54.7,416.7c-0.4-0.1-0.6-1-0.7-1.5c-0.5-0.1-1.2-0.8-1.7-0.9c0.8,2.8,0.9,4.2,1.1,4.6
					c0.4,0.7,0.6,1.1,1.1,0.7c0.5-0.4,0.8,0.4,1.1,0c0.3-0.4,0.9,0.5,1-0.1c0.1-0.6-0.8-1.4-0.8-1.4S56.1,417,54.7,416.7z'
				/>
				<path
					className='st49'
					d='M46.6,398.5c-0.5,1.7,5.8,18.2,5.8,18.2L55,416c0,0-1-3.8-0.9-5.1c0.2-1.4,0.1-1.9-1-3.1
				c-1.1-1.2-0.5-5.8-1.3-7.6C51.2,398.4,46.9,397.3,46.6,398.5z'
				/>
				<path
					className='st55'
					d='M49.3,408.4c-0.1,0-0.1,0-0.1-0.1c-1-2.8-1.7-5.1-2.2-6.7c0-0.1,0-0.1,0.1-0.2c0.1,0,0.1,0,0.2,0.1
					c0.5,1.6,1.2,3.9,2.1,6.7C49.4,408.3,49.4,408.4,49.3,408.4C49.3,408.4,49.3,408.4,49.3,408.4z'
				/>
				<path
					className='st55'
					d='M54.2,410c-0.1,0-0.1-0.1-0.1-0.1c0-0.7-0.3-1.2-1-1.9c-0.6-0.7-0.7-2.4-0.8-4.2c-0.1-1.3-0.1-2.7-0.5-3.5
					c-0.2-0.6-0.8-1.1-1.7-1.5c-0.1,0-0.1-0.1-0.1-0.2c0-0.1,0.1-0.1,0.2-0.1c0.9,0.4,1.6,1,1.9,1.6c0.3,0.8,0.4,2.1,0.5,3.5
					c0.1,1.7,0.2,3.4,0.8,4c0.8,0.8,1,1.4,1.1,2.1C54.3,409.9,54.3,410,54.2,410C54.2,410,54.2,410,54.2,410z'
				/>
			</g>
		</g>
	);
};

export default PersonD;

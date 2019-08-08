import React, { useEffect } from 'react';
import { TweenMax, Power0 } from 'gsap';

const PersonC = () => {
	useEffect(() => {
		TweenMax.to('#pc-arm-left', 0.8, {
			rotation: 50,
			transformOrigin: 'top left',
			y: 1,
			x: 3,
			repeat: -1,
			yoyoEase: true
		});
		TweenMax.to('#pc-arm-right', 0.8, {
			rotation: -50,
			transformOrigin: 'top right',
			y: 1,
			x: 3,
			repeat: -1,
			yoyoEase: true
		});
		TweenMax.to('#pc-leg-left', 0.8, {
			rotation: -40,
			transformOrigin: 'top middle',
			y: 6,
			x: -1,
			repeat: -1,
			yoyoEase: true
		});
		TweenMax.to('#pc-leg-a', 0.8, {
			rotation: -7,
			transformOrigin: 'top middle',
			y: 0,
			x: 0,
			scaleY: 0.9,
			repeat: -1,
			yoyoEase: true
		});
		TweenMax.to('#pc-leg-right', 0.8, {
			rotation: 15,
			transformOrigin: 'top middle',
			y: 0,
			x: 0,
			repeat: -1,
			yoyoEase: true
		});
		TweenMax.to('#pc-leg-b', 0.8, {
			rotation: 20,
			transformOrigin: 'top right',
			y: 4,
			x: -2,
			scaleY: 1.5,
			scaleX: 0.8,
			repeat: -1,
			yoyoEase: true
		});
		TweenMax.fromTo(
			'#person-c',
			17,
			{
				x: 50
			},
			{
				x: -350,
				ease: Power0.ease,
				repeat: -1
			}
		);
	}, []);
	return (
		<g id='person-c'>
			<g id='pc-arm-right'>
				<path
					className='st47'
					d='M304,410.5c0.4,0.2,1.1-0.3,1.6-0.7c0.5,0.2,1.5,0.2,2,0.4c-2.5,1.7-3.5,2.8-3.9,2.9
						c-0.8,0.3-1.2,0.5-1.3-0.2s-0.9-0.2-0.9-0.8c0-0.5-1-0.2-0.7-0.8c0.3-0.5,1.5-0.6,1.5-0.6S302.6,409.7,304,410.5z'
				/>
				<polygon className='st45' points='304.7,409.8 306.6,411.6 310.9,407.9 309.7,402.6' />
			</g>
			<g id='pc-leg-right'>
				<g id='pc-leg-b'>
					<path className='st46' d='M323.3,443.1l1.1,0.9c0,0-0.2,3,0,3.2l2.3-3.8l-2.3-1.7L323.3,443.1z' />
					<path className='st48' d='M325.2,442l-8.4-11.6l0,0c-1.5-0.8-3.3-0.1-3.8,1.5l-0.7,2.1l11.1,9.7L325.2,442z' />
				</g>

				<path className='st48' d='M316.8,430.5l1.5-20l-7.6,1.1l-0.5,1.8l2.2,20.8h0.4c1.9,0,3.6-1.3,4-3.2L316.8,430.5z' />
			</g>
			<g id='pc-leg-left'>
				<g id='pc-leg-a'>
					<path className='st46' d='M302.9,448.2l-0.5,1.4c0,0-2.5,1.2-2.6,1.4h4.5l0.3-2.8H302.9z' />
					<path
						className='st48'
						d='M311.4,427.3l-1,3.5l-5.5,18.1h-2.7c0,0,2.4-14,3.4-20.1c0.3-1.5,0.4-2.5,0.5-2.8l0.9-0.4
			c1.5-0.7,3.3-0.1,4.2,1.3L311.4,427.3z'
					/>
				</g>
				<path
					className='st48'
					d='M311.4,427.3l-0.2,0.6c-0.5,1.5-2.1,2.3-3.6,1.7l-0.1,0c-1.1-0.5-1.8-1.7-1.6-2.9c0.1-0.4,0.1-0.6,0.1-0.7
			c0.1-1,4.3-12.9,4.3-12.9l-0.7-2.3c2.6-1.3,5.6-1.6,8.6-1.9c0.6,1,1.1,2.4,1.3,4.2C320.1,417,311.4,427.3,311.4,427.3z'
				/>
			</g>

			<g id='pc-body'>
				<path
					className='st47'
					d='M310.5,395.1c0,0,1.4-3.7,0.6-3.9c-0.5-0.1-1.4,1-2,0.7c-0.2-0.1-0.6-1.3-0.9-2c-0.1-0.2-0.5,0.3-0.6,0.1
						c-0.1-0.3,0.3-1.7,0.2-1.9c-2.5-3.6,3.8-7.2,5.6-4.2c1.1,1.8,1.2,4.2,0,6.2l1.9,2.5L310.5,395.1z'
				/>
				<path
					className='st58'
					d='M309.5,396.9c0-1.2,0.2-2.3,0.2-3.5c1.1-1.9,3.7-3.1,5.8-3.5c0.4,0.8,0.8,1.5,1.1,2.3
					C314.8,394,311.7,395.7,309.5,396.9z'
				/>
				<path
					className='st45'
					d='M316.6,392.1c0,0-0.9-0.7-3.1,0.4c-0.6,0.3-4.9,4.9-5,5.9c-0.1,1,1.2,4.3,1.2,4.3l-1.4,12.1l12.8-3.5
					l-2.8-6.9C318.3,404.4,318.1,398.4,316.6,392.1z'
				/>
				<path
					className='st57'
					d='M309.3,408.6C309.3,408.6,309.3,408.6,309.3,408.6c-0.1,0-0.1-0.1-0.1-0.1c0.3-1.7,0.6-3.4,0.8-5
					c0-0.1,0.1-0.1,0.1-0.1c0.1,0,0.1,0.1,0.1,0.1c-0.2,1.7-0.5,3.4-0.8,5.1C309.4,408.5,309.3,408.6,309.3,408.6z'
				/>
			</g>
			<g id='pc-arm-left'>
				<path
					className='st47'
					d='M322.7,413.7c0.3-0.3-0.1-1.2-0.4-1.7c0.3-0.4,0.5-1.4,0.8-1.9c1.1,2.8,1.9,4.1,2,4.4
						c0.1,0.8,0.2,1.3-0.5,1.2c-0.6-0.1-0.4,0.9-0.9,0.7c-0.5-0.1-0.4,0.9-0.9,0.6c-0.5-0.4-0.2-1.6-0.2-1.6
						S321.6,414.9,322.7,413.7z'
				/>
				<path
					className='st45'
					d='M316.6,392.1c1.5,1.1,7.9,20.1,7.9,20.1l-2.6,1.1c0,0-1.5-3.7-2.5-4.8c-1-1-1.3-1.5-1.2-3.1
					c0.2-1.7-4.4-6.6-4.9-8.6C312.7,394.9,315.6,391.4,316.6,392.1z'
				/>
				<path
					className='st57'
					d='M319.4,408.7C319.3,408.7,319.3,408.7,319.4,408.7c-1.1-1.1-1.4-1.5-1.3-3.3c0.1-0.9-1.3-2.9-2.6-4.7
						c-1.1-1.5-2.1-3-2.3-3.9c-0.3-1.1,0.4-2.6,1.2-3.6c0-0.1,0.1-0.1,0.2,0c0.1,0,0.1,0.1,0,0.2c-0.7,0.9-1.4,2.3-1.1,3.4
						c0.2,0.9,1.3,2.3,2.3,3.8c1.3,1.9,2.7,3.9,2.6,4.8c-0.2,1.6,0.1,2,1.1,3C319.5,408.6,319.5,408.6,319.4,408.7
						C319.4,408.7,319.4,408.7,319.4,408.7z'
				/>
			</g>
			<g id='pc-hair'>
				<path
					className='st49'
					d='M318.6,391c-0.5-0.2-0.9-0.4-1.2-0.7c-0.8-0.7-0.9-2.2-1.1-3.2c-0.2-1.1-0.5-2.3-1.2-3.3
				c-1.6-2.1-4.8-1.6-7-1c-0.8,0.2-1.5,0.5-2,1.2c-1,1.3-0.2,3.3,1.5,2.9c0.5-0.1,1.1-0.7,1.6-0.6c0.3,0.1,0.5,0.3,0.5,0.5
				c0,0.2,0,0.5,0.1,0.7c0.2,0.2,0.6,0,1,0.1c0.2,0.1,0.3,0.3,0.3,0.5c0,0.2,0,0.4-0.1,0.6c0.2,0,0.3,0,0.5,0
				c-0.2,0,0.8-2.5,1.2-0.9c0.1,0.3,0,0.7-0.1,1s-0.2,0.7-0.1,1c0.1,0.5,0.6,0.8,1.1,1c0.5,0.2,1,0.3,1.5,0.6
				c1.1,0.7,1.3,2.1,1.7,3.3c0.3,1.2,0.8,2.4,1.4,3.5c0.3,0.5,0.7,1,1.3,1c0.4,0,0.7-0.2,1-0.5c1-0.8,2.1-1.6,2.7-2.7
				c0.6-1.1,0.7-2.6-0.2-3.6C321.9,391.3,320,391.4,318.6,391z'
				/>
			</g>
		</g>
	);
};

export default PersonC;

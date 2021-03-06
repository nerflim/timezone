import React, { useEffect } from 'react';
import { TweenMax, Power0 } from 'gsap';

const PersonE = () => {
	useEffect(() => {
		TweenMax.to('#pe-girl-arm-right', 0.8, {
			rotation: 25,
			transformOrigin: 'top middle',
			y: 0,
			x: 1,
			repeat: -1,
			yoyoEase: true
		});
		TweenMax.to('#pe-girl-leg-right', 0.8, {
			rotation: 25,
			transformOrigin: 'top middle',
			y: 0,
			x: 1,
			repeat: -1,
			yoyoEase: true
		});
		TweenMax.to('#pe-girl-leg-right-a', 0.8, {
			rotation: -10,
			transformOrigin: 'top middle',
			y: 0,
			x: 0,
			scaleY: 1.4,
			repeat: -1,
			yoyoEase: true
		});
		TweenMax.to('#pe-girl-leg-right-b', 0.8, {
			rotation: 40,
			transformOrigin: 'top middle',
			y: 9,
			x: 5,
			scaleY: 0.7,
			repeat: -1,
			yoyoEase: true
		});

		TweenMax.to('#pe-girl-leg-left', 0.8, {
			rotation: -20,
			transformOrigin: 'top middle',
			y: -0,
			x: -2,
			repeat: -1,
			yoyoEase: true
		});

		TweenMax.to('#pe-girl-leg-left-a', 0.8, {
			rotation: -35,
			transformOrigin: 'top right',
			y: -1,
			x: -3.5,
			scaleX: 0.8,
			scaleY: 1.3,
			repeat: -1,
			yoyoEase: true
		});

		// guy leg
		TweenMax.to('#pe-guy-leg-right', 0.8, {
			rotation: 40,
			transformOrigin: 'top left',
			y: -3,
			x: 0,
			repeat: -1,
			yoyoEase: true
		});

		TweenMax.to('#pe-guy-leg-left', 0.8, {
			rotation: -40,
			transformOrigin: 'top right',
			y: -3,
			x: 0,
			repeat: -1,
			yoyoEase: true
		});

		TweenMax.fromTo(
			'#person-e',
			20,
			{
				x: -350
			},
			{
				x: 200,
				ease: Power0.easeNone,
				repeat: -1,
				delay: 7,
				repeatDelay: 5
			}
		);
	}, []);
	return (
		<g id='person-e'>
			<g id='pe-girl-leg-left'>
				<g id='pe-girl-leg-left-a'>
					<path className='pe-48' d='M153.7,443.2l-1.1,0.9c0,0,0.2,3.1,0,3.3l-2.4-3.9l2.4-1.7L153.7,443.2z' />
					<circle className='pe-46' cx='162.7' cy='431.8' r='2.7' />
					<path className='pe-46' d='M152.6,444.1l12.5-10.4l-1.1-2.5c-0.3-0.6-0.9-1.1-1.6-1.1l-1.8,0l-8.9,12.3L152.6,444.1z' />
				</g>
				<polygon className='pe-46' points='165.1,433.7 166.6,421.7 162.6,417.7 159.8,423.5 161,433.7' />

				<polygon className='pe-50' points='159.8,423.5 158.8,407.3 165.8,407.4 167,421.6 		' />
			</g>
			<g id='pe-girl-leg-right'>
				<g id='pe-girl-leg-right-b'>
					<path className='pe-48' d='M175,450L175,450c0,0,3.2,1.2,3.2,1.5h-4.7l-0.3-3L175,450z' />
					<path className='pe-46' d='M171.6,425.2L175,450l-1.7-0.2l-7.2-23.2l1-1.2c0.6-0.8,1.7-1.1,2.6-0.8L171.6,425.2z' />
					<circle className='pe-46' cx='168.9' cy='426' r='2.8' />
				</g>
				<g id='pe-girl-leg-right-a'>
					<path className='pe-46' d='M171.6,425.2l-1.5-4.8l-4.5-2.8l-2.5,5.1l3,3.8l1.8,1.2c0.9,0.6,2.2,0.3,2.7-0.7L171.6,425.2z' />
					<path
						className='pe-50'
						d='M170.1,420.5l-7,2.3l0,0l-3.8-5.8c-1.2-2.1-2-4-1.8-5.4c0.2-1.9,0.8-3.4,1.4-4.4l7,0.2l0.4,1.1l1,3l2.4,7.4
			L170.1,420.5z'
					/>
				</g>
			</g>

			<g id='pe-guy-leg-left'>
				<path className='pe-48' d='M182,446.2l-1.7,3.1c0,0,2.2,2.7,2.1,2.9l-4.4-2.7l2.6-4.2L182,446.2z' />
				<path
					className='pe-46'
					d='M189.6,429.7c-1.1-0.2-1.4-0.2-2.5-0.5l-8.1,18.5l1.5,1l9.7-14.8l1.5-3.6
				C190.9,430.2,190.3,429.9,189.6,429.7z'
				/>
				<polygon className='pe-45' points='191.9,431 199.4,411.4 189.4,411.4 186.3,429.8' />
			</g>

			<g id='pe-guy-leg-right'>
				<path className='pe-48' d='M208.8,446.1l1.1,3.4c0,0,3.5,0.2,3.6,0.4l-5,1.4l-1.3-4.7L208.8,446.1z' />
				<path className='pe-46' d='M203.8,428.4c-1.7,0.6-2.1,1.3-3.8,1.8l0.3,1.2l7.5,17.5l1.8-0.3L203.8,428.4z' />
				<polygon className='pe-45' points='205,428.5 200.4,411.4 189.9,411.4 199.2,430.7 		' />
			</g>

			<g id='pe-bodies'>
				<path
					className='pe-45'
					d='M157.3,385.3c-1.1,3.4-1.1,7.2,0.4,10.5c1.5,3.2,4.5,5.8,7.9,6.6c2,0.5,4.2,0.3,6.1-0.6
				c1.9-0.9,3.4-2.6,4-4.6c0.6-2,0.1-4.3-1.3-5.8c-1.1-1.1-2.6-1.8-3.5-3c-1.6-2.2-0.9-5.4-2.5-7.6c-1.5-2-4.5-2.3-6.7-1.2
				C159.5,380.7,158.1,382.9,157.3,385.3z'
				/>
				<path
					className='pe-46'
					d='M165.7,392.3c0,0-0.4-3.4,0.2-4c0.4-0.4,1.8,0.2,2.1-0.4c0.1-0.2-0.1-1.5-0.2-2.3c0-0.2,0.6,0,0.6-0.2
						c0-0.3-1.2-1.4-1.1-1.7c0.6-4.6-7.1-4.7-7.3-1.1c-0.1,2.2,0.9,4.5,3.1,5.8l-1.2,2.4L165.7,392.3z'
				/>
				<path
					className='pe-46'
					d='M180.5,412.8c-0.2,0-0.8-0.3-0.8-0.3s-1.3,0.8-1.3,0.8c-0.1,0-0.9-1.8-0.9-1.8s-1.5-0.4-3.3-0.9l0.8-2.5
					c1.8,0.9,3.6,1.8,3.8,1.8c0.4,0.1,2.6,2,2.8,2.4C181.8,412.6,180.7,412.8,180.5,412.8z'
				/>
				<path
					className='pe-47'
					d='M167.6,399.3l3.4,7.2c0,0,3.3-0.7,4.4,0.8c1.1,1.5,2.4,2.1,2.4,2.1l-0.3,2c0,0-8.3-0.7-9.6-2.1
					c-1.3-1.4-1.2-8.8-1.2-8.8L167.6,399.3z'
				/>
				<polygon className='pe-48' points='165.7,392.4 166.6,390.8 163.1,388.4 162,390.2 				' />
				<path
					className='pe-47'
					d='M159.4,392.1c0,0,2.2-3,4.5-2c0.6,0.3,5.1,6.2,5.2,7.2c0.1,1-1.8,4.5-1.8,4.5l2,11.7l-13.4-3.7l3-7.2
					C158.8,402.6,157.9,398.7,159.4,392.1z'
				/>
				<path
					className='pe-46'
					d='M198,390.6l0.8-2.9c0,0,1.1,0.3,1.6-0.2c0.2-0.2,0.4-1,0.5-2.4c0-0.1,0.5,0.1,0.5,0c0-0.3-1-1.6-0.9-2.1
						c0.3-1.9,0.1-2.5-0.4-3c-1.3-1.2-5.6-1.4-6.2,0.7c-0.6,2.1-0.4,3.2,0.7,6.2l-0.7,3L198,390.6z'
				/>
				<path
					className='pe-50'
					d='M193.7,387.5c0,0,2.6,0.8,4,2.4c1.3,1.5,3.5,5.9,3.5,6.4c0,0.5-0.7,5.9-0.7,5.9l2.4,14.4
					c0,0-10.2,1.6-15.3,0l2.7-11.9c0,0-0.4-4.2-0.8-4.7s0.3-4.7,0.7-6.6c0.3-1.9,1.9-4.1,2.4-4.6
					C193.1,388.4,193.7,387.5,193.7,387.5z'
				/>
				<path
					className='pe-50'
					d='M194.6,387.8c-1.2-0.8-5.5-1-6-0.6c-0.5,0.3,0.7,1.4,0.6,2.1c-0.1,0.7-2.6,1.6-1.8,3.1
					c0.8,1.5,3.3,3.3,3.3,3.3L194.6,387.8z'
				/>
				<path
					className='pe-45'
					d='M200.9,377.3c0,0.3-0.1,0.5-0.3,0.7c0.1-0.5-0.3-0.9-0.8-0.9c-0.5,0-0.8,0.3-1.1,0.7
					c0.1-0.2,0.5-0.2,0.6,0.1c0.1,0.2,0,0.5-0.2,0.6c-0.2,0.1-0.4,0.2-0.7,0.2c-0.6,0-1.1-0.2-1.6-0.3c-0.5-0.1-1.1-0.3-1.6-0.3
					c-0.6,0-1.1,0.2-1.5,0.5c-0.4,0.4-0.5,1.1-0.3,1.6c-1.4,0.6-0.4,3,0,4.1c0.4,1.1,1.2,2.6,1.2,2.6l1.4-1.4c0,0-1.1-1.3-0.6-1.8
					c0.5-0.6,1,0.3,1,0.3s0.2,2.7,0.5,2.9c0.4,0.2,2.6,1.7,3.5,1.4c0.9-0.3,0.4-3.1,0.4-3.1l-1.4-0.2c-1.3-0.1-2.2-1.2-2.2-2.5l0,0
					c0,0,1.5,0.5,1.8-0.8c1-0.2,2.3-0.6,2.7-1.6C202.1,379.1,201.8,377.9,200.9,377.3z'
				/>
				<path
					className='pe-50'
					d='M198.6,378.6c0,0-2.4,5.4-5,6.6c0,0-2-3.4-2-4.9c0-1.5,1.1-2.5,2.9-2.6
					C196.3,377.5,198.6,378.6,198.6,378.6z'
				/>
				<path
					className='pe-46'
					d='M182,411.2c-0.2-0.4,0.3-1.2,0.6-1.7c-0.3-0.5-0.3-1.6-0.5-2.1c-1.6,2.7-2.7,3.9-2.8,4.2
						c-0.3,0.8-0.4,1.3,0.3,1.3c0.7,0,0.3,1,0.9,0.9c0.6-0.1,0.3,1,0.8,0.7c0.6-0.3,0.5-1.6,0.5-1.6S182.9,412.6,182,411.2z'
				/>
				<path
					className='pe-50'
					d='M191.8,389.8c-1.7,0.9-11.5,19.5-11.5,19.5l2.5,1.6c0,0,2.2-3.6,3.4-4.5c1.2-0.9,1.6-1.3,1.7-3.1
					c0.1-1.8,5.6-6.1,6.5-8.1C195.4,393.3,193,389.2,191.8,389.8z'
				/>
				<path
					className='pe-51'
					d='M194.2,383.7C194.2,383.7,194.2,383.6,194.2,383.7c-0.1-0.1-0.1-0.2-0.1-0.2c1.1-1.2,2-2.5,2.7-4
					c0-0.1,0.1-0.1,0.2-0.1c0.1,0,0.1,0.1,0.1,0.2C196.3,381.1,195.4,382.4,194.2,383.7C194.3,383.6,194.3,383.7,194.2,383.7z'
				/>
				<path
					className='pe-51'
					d='M189.5,400.1c-0.1,0-0.1,0-0.1-0.1c-0.7-3.7-0.2-8.7,3.2-11.7c0.1,0,0.1,0,0.2,0c0,0.1,0,0.1,0,0.2
					c-3.4,2.9-3.8,7.8-3.1,11.4C189.7,400.1,189.6,400.1,189.5,400.1C189.5,400.1,189.5,400.1,189.5,400.1z'
				/>
				<path
					className='pe-50'
					d='M202.2,400.2h-1.5c0,0-3.6-8.4-4.9-9.4c-1.3-1-1.6,8.8,0.5,11.8c2.1,3,2.6,3,6.5,1.4
				C206.8,402.4,202.2,400.2,202.2,400.2z'
				/>
				<path
					className='pe-46'
					d='M214,396.9c0.2-0.4,0.1-1.5-0.1-1.4s-0.3,0.8-0.3,0.8l-0.1,0.3c0,0-0.2-0.1-0.3,0c0,0.1-0.1,0.5-0.1,0.5
					l0,0.8L214,396.9z'
				/>
				<polygon className='pe-48' points='212.2,398.4 213.1,395.1 213.8,392.5 214.8,392.8 213,398.5 				' />
				<path
					className='pe-46'
					d='M202.8,400.3l0.8,3c0,0,7.6-3,8-3.1c0,0,1.2-0.9,1.4-1.1c0.2-0.2,1-2,1-2.2c0.1-0.2-1.4-0.3-1.4-0.3
					s0-0.9-0.1-1.2c0-0.2-0.4-0.8-0.5-0.4l-0.3,1.4l-0.5,0.4c-0.2,0.3-0.5,1.7-0.5,1.7L202.8,400.3z'
				/>
				<path className='pe-50' d='M202.2,400.2c0,0,0.8-2.3,2.3-1.3c1.5,0.9,1.7-0.2,1.7-0.2l4.1-1.1l1.3,2.6l-8.7,3.8L202.2,400.2z' />
				<path
					className='pe-51'
					d='M198.8,405.1c-0.5,0-1.1-0.2-1.6-0.6c-0.6-0.4-1-1-1.4-1.6c-1.2-1.7-2.2-3.5-3.1-5.4
				c-0.6-1.2-1.1-2.5-1.2-4c0-1.3,0.3-2.4,1-3c0.5-0.4,1.1-0.6,1.9-0.5c0.1,0,0.1,0.1,0.1,0.1c0,0.1-0.1,0.1-0.1,0.1
				c-0.7-0.1-1.2,0-1.7,0.4c-0.6,0.5-0.9,1.6-0.9,2.8c0,1.4,0.6,2.7,1.1,3.9c0.9,1.9,1.9,3.7,3.1,5.3c0.4,0.6,0.8,1.1,1.4,1.5
				c0.6,0.4,1.3,0.6,1.9,0.5c0.1,0,0.1,0,0.2,0.1c0,0.1,0,0.1-0.1,0.2C199.1,405.1,199,405.1,198.8,405.1z'
				/>
				<path
					className='pe-51'
					d='M199.8,399.5C199.8,399.5,199.8,399.5,199.8,399.5c-0.1,0-0.1-0.1-0.1-0.1c0.1-1.1,0.1-2.3-0.7-3
				c-0.1-0.1-0.3-0.2-0.5-0.4c-0.2-0.1-0.3-0.2-0.5-0.3c-0.5-0.4-0.8-1-1-1.6c-0.3-0.7-0.6-1.3-1.2-1.6c-0.1,0-0.1-0.1,0-0.2
				c0-0.1,0.1-0.1,0.2,0c0.7,0.4,1,1.1,1.3,1.7c0.3,0.5,0.5,1.1,1,1.5c0.1,0.1,0.3,0.2,0.4,0.3c0.2,0.1,0.4,0.2,0.5,0.4
				c0.9,0.8,0.8,2.1,0.8,3.3C199.9,399.5,199.8,399.5,199.8,399.5z'
				/>
				<path
					className='pe-49'
					d='M168.4,408.8c-0.1,0-0.1,0-0.1-0.1l-1.1-6.9c0,0,0,0,0-0.1l0.5-1.1c0-0.1,0.1-0.1,0.2-0.1
				c0.1,0,0.1,0.1,0.1,0.2l-0.5,1.1l1.1,6.9C168.6,408.7,168.5,408.8,168.4,408.8C168.5,408.8,168.4,408.8,168.4,408.8z'
				/>
				<path className='pe-45' d='M163.1,388.4c3.7-2.2,5.3-5.8,5.3-5.8l-1.7-2.5c0,0-6.1-1.8-7.7,2.5C157.5,387,163.1,388.4,163.1,388.4z' />
			</g>

			<g id='pe-girl-arm-right'>
				<path className='pe-48' d='M168.1,406.4l-12.5-2.7l-2.3,9.1l12.8,3.1C166.8,412.8,167.1,409.5,168.1,406.4z' />
				<path
					className='pe-46'
					d='M160.1,413.5c-0.3-0.3,0-1.2,0.3-1.8c-0.4-0.4-0.6-1.5-0.9-1.9c-1,3-1.8,4.3-1.9,4.7
					c-0.1,0.9-0.1,1.3,0.5,1.2c0.7-0.1,0.5,0.9,1,0.7c0.5-0.2,0.5,1,1,0.5c0.5-0.4,0.2-1.7,0.2-1.7S161.2,414.7,160.1,413.5z'
				/>
				<path
					className='pe-47'
					d='M159.4,392.1c-1.2,1.5-1.6,20.6-1.6,20.6l3,0.4c0,0,0.5-4.2,1.2-5.5c0.7-1.3,0.9-1.8,0.3-3.5
				c-0.6-1.6,1.8-6,1.8-8.2C164.1,393.8,160.2,391.1,159.4,392.1z'
				/>
				<path
					className='pe-49'
					d='M162.3,403.6C162.3,403.6,162.3,403.6,162.3,403.6c-0.1,0-0.1-0.1-0.1-0.1l0.7-6.9c0.1-0.7,0.1-1.3,0-2
				c-0.2-0.7-0.6-1.3-1.1-1.5c-0.1,0-0.1-0.1-0.1-0.2c0-0.1,0.1-0.1,0.2-0.1c0.6,0.2,1.1,0.9,1.3,1.7c0.2,0.7,0.1,1.4,0,2.1
				l-0.7,6.9C162.5,403.5,162.4,403.6,162.3,403.6z'
				/>
			</g>
		</g>
	);
};

export default PersonE;

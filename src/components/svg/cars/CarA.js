import React, { useEffect } from 'react';
import { TweenMax, Power0 } from 'gsap';

const CarA = () => {
	useEffect(() => {
		TweenMax.staggerTo(['#ca-tire-front', '#ca-tire-back'], 2, {
			rotation: 360,
			transformOrigin: '50% 50%',
			repeat: -1,
			ease: Power0.easeNone
		});
		TweenMax.fromTo(
			'#car1',
			5,
			{
				x: -350
			},
			{
				x: 350,
				ease: Power0.easeNone,
				repeat: -1,
				delay: 5,
				repeatDelay: 10
			}
		);
	}, []);
	return (
		<g id='car1'>
			<g id='ca-car'>
				<path className='st80' d='M169.1,555.3c1.4-0.1,2.8-0.2,4.2-0.2l-5.9-19.1L146,527l-19.7,0.7l-86.1,0.4l-24.3,3.8l-4.1,23.4H169.1z' />
				<path className='st80' d='M107.5,493.7l-4.2,1l-2,1.3c0,0,11.6,2.3,23.4,19.3l16.8-2C141.6,513.3,131.1,501.2,107.5,493.7z' />
				<path className='st81' d='M16.5,507.6l-1-0.6c-1.8-0.1-8.1,14.5-5.4,16.6C10.1,523.7,18.7,515.1,16.5,507.6z' />
				<path
					className='st82'
					d='M21.3,497.5c1.1-2-4.8-2.4-3.7-3.9c0,0,55.7-9,89.9,0l-4.2,1c0,0,14.8,5.6,22,19.5l16.5-1.8
			c14.4,3.2,30,5.8,34.8,21.6l-0.2,13.5l1.5,1.5l-0.4,5.1l-1.8,0.5c0,0-3.9,1.2-5.9,1.2c0,0,1-20.4-17.8-20.2
			C134,535,134.1,554,134.1,554l-87.4,0c0,0,1.7-19.3-18.9-18.4c-17.3,0.6-14.9,20.6-14.9,20.6l-2.6-0.7c0,0-2.6-15.9-3.1-20.8
			c0,0,1.8-3.3,1.8-6.4C9.1,528.2,13.3,505.9,21.3,497.5z'
				/>
				<path
					className='st81'
					d='M178.4,543.5l-1,10.5l-1.8,0.5c0,0-3.9,1.2-5.9,1.2c0,0,1-20.4-17.8-20.2C134,535,134.1,554,134.1,554
			l-87.4,0c0,0,1.7-19.3-18.9-18.4c-17.3,0.6-14.9,20.6-14.9,20.6l-4.3-1.1c0,0-0.9-5.9-1.8-11.6c1.1-0.3,3.8-0.5,4-0.6
			c2.9-9.3,10.6-14.1,18.7-14.6c14.4-0.9,20.8,13.9,22.3,22.1c25.6-0.1,51.2-0.3,76.7-0.4c5-28.6,33.7-26.7,44.5-7.1
			C173.1,543,176.8,543.3,178.4,543.5z'
				/>
				<path
					className='st80'
					d='M34.4,497.2c-5.5,0.5-6.9,12.6-7.8,17.9h44.3l2.2-20.9C65.9,494.2,40.9,494.7,34.4,497.2L34.4,497.2z
			 M120.4,515c-2.6-4.6-12.6-20-34.3-20.8c-3.8-0.1-7.6-0.2-11.2-0.2L73.4,515H120.4z'
				/>
				<path className='st81' d='M111.8,509.6c0,0-2.2,4,0.7,7.3C112.5,516.9,122.8,512.9,111.8,509.6z' />
				<path className='st73' d='M174.1,531.6c-2.4-6.3-6.2-8.8-11.5-11.5c-5.1-0.5-5.2,3.2-3.2,6.7C161.5,530.3,170.7,537.3,174.1,531.6z' />
				<path className='st80' d='M74,520.8l0-0.6c0-0.6,0.4-1.1,0.8-1.1l9.7-0.1c0.5,0,0.8,0.5,0.8,1.1l0,0.6L74,520.8z' />
				<path className='st80' d='M54,521l0-0.6c0-0.6,0.4-1.1,0.8-1.1l9.7-0.1c0.5,0,0.8,0.5,0.8,1.1l0,0.6L54,521z' />
			</g>
			<g id='ca-tire-back'>
				<path
					className='st80'
					d='M20,561.4c5.4,5.3,14,5.3,19.4-0.1c5.3-5.4,5.3-14-0.1-19.4c-5.4-5.3-14-5.3-19.4,0.1
			C14.6,547.4,14.6,556.1,20,561.4L20,561.4z M36.7,558.7L36.7,558.7c-3.9,3.9-10.2,3.9-14.1,0.1c-3.9-3.9-3.9-10.2-0.1-14.1
			c3.9-3.9,10.2-3.9,14.1-0.1C40.5,548.5,40.6,554.8,36.7,558.7z'
				/>

				<ellipse transform='matrix(1 -4.937178e-03 4.937178e-03 1 -2.7233 0.1528)' className='st73' cx='29.6' cy='551.7' rx='11.3' ry='11.3' />
				<ellipse transform='matrix(1 -4.952687e-03 4.952687e-03 1 -2.7319 0.1533)' className='st80' cx='29.6' cy='551.7' rx='10' ry='10' />

				<ellipse transform='matrix(0.7036 -0.7106 0.7106 0.7036 -383.5648 184.302)' className='st80' cx='29.1' cy='551.9' rx='3.5' ry='3.5' />
				<path
					className='st73'
					d='M28.5,562.6l-0.6-7.5l-5.7,4.9l-1-1l4.9-5.8l-7.5-0.6l0-1.4l7.5-0.6l-4.9-5.7l1-1l5.8,4.9l0.6-7.5l1.4,0
			l0.6,7.5l5.7-4.9l1,1l-4.9,5.8l7.5,0.6l0,1.4l-7.5,0.6l4.9,5.7l-1,1l-5.8-4.9l-0.6,7.5L28.5,562.6L28.5,562.6z M28.5,553.5l1.3,0
			l0.9-1l0-1.3l-1-0.9l-1.3,0l-0.9,1l0,1.3L28.5,553.5z'
				/>
			</g>
			<g id='ca-tire-front'>
				<path
					className='st80'
					d='M141.9,561.4c5.4,5.3,14,5.3,19.4-0.1c5.3-5.4,5.3-14-0.1-19.4c-5.4-5.3-14-5.3-19.4,0.1
			C136.5,547.4,136.5,556.1,141.9,561.4L141.9,561.4z M158.6,558.7L158.6,558.7c-3.9,3.9-10.2,3.9-14.1,0.1
			c-3.9-3.9-3.9-10.2-0.1-14.1c3.9-3.9,10.2-3.9,14.1-0.1C162.5,548.5,162.5,554.8,158.6,558.7z'
				/>

				<ellipse transform='matrix(1 -4.940105e-03 4.940105e-03 1 -2.7235 0.7553)' className='st73' cx='151.5' cy='551.7' rx='11.3' ry='11.3' />

				<ellipse transform='matrix(1 -4.956009e-03 4.956009e-03 1 -2.7322 0.7578)' className='st80' cx='151.5' cy='551.7' rx='10' ry='10' />

				<ellipse transform='matrix(0.7036 -0.7106 0.7106 0.7036 -347.4236 270.9667)' className='st80' cx='151.1' cy='551.9' rx='3.5' ry='3.5' />
				<path
					className='st73'
					d='M150.4,562.6l-0.6-7.5l-5.7,4.9l-1-1l4.9-5.8l-7.5-0.6l0-1.4l7.5-0.6l-4.9-5.7l1-1l5.8,4.9l0.6-7.5l1.4,0
			l0.6,7.5l5.7-4.9l1,1l-4.9,5.8l7.5,0.6l0,1.4l-7.5,0.6l4.9,5.7l-1,1l-5.8-4.9l-0.6,7.5L150.4,562.6L150.4,562.6z M150.4,553.5
			l1.3,0l0.9-1l0-1.3l-1-0.9l-1.3,0l-0.9,1l0,1.3L150.4,553.5z'
				/>
			</g>
		</g>
	);
};

export default CarA;

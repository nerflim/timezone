import React, { useEffect } from 'react';
import { TweenMax, Power0 } from 'gsap';

const CarD = () => {
	useEffect(() => {
		TweenMax.staggerTo(['#cd-tire-front', '#cd-tire-back'], 2, {
			rotation: -360,
			transformOrigin: '50% 50%',
			repeat: -1,
			ease: Power0.easeNone
		});
		TweenMax.fromTo(
			'#car4',
			5,
			{
				x: 350
			},
			{
				x: -350,
				ease: Power0.easeNone,
				repeat: -1,
				delay: 10,
				repeatDelay: 10
			}
		);
	}, []);
	return (
		<g id='car4'>
			<g>
				<rect x='204.2' y='432' className='car-4-55' width='30.7' height='45.1' />
				<rect x='162.5' y='469.2' className='car-4-56' width='169.5' height='28.5' />
				<path
					className='car-4-57'
					d='M338.2,477.1H201.4v20.6h94.1c0-0.5-0.1-1-0.1-1.5c0-8.5,6.9-15.4,15.4-15.4c8.5,0,15.4,6.9,15.4,15.4
			c0,0.5,0,1-0.1,1.5h12V477.1z'
				/>
				<path
					className='car-4-58'
					d='M201.4,490v7.7h94.1c0-0.5-0.1-1-0.1-1.5c0-2.2,0.5-4.3,1.3-6.2H201.4L201.4,490z M325,490
			c0.8,1.9,1.3,4,1.3,6.2c0,0.5,0,1-0.1,1.5h12V490H325z'
				/>
				<path
					className='car-4-59'
					d='M194.2,497.7l11.4,0v-20.6h-1.4V432c-3.4,0-10.5-0.1-13.8,0.6c-3.9,0.8-23.3,27.9-24.5,28.4
			c-1.2,0.5-12.5,5.7-17.7,9.6v27l15.4,0c0-0.5-0.1-0.9-0.1-1.4c0-8.5,6.9-15.4,15.4-15.4s15.4,6.9,15.4,15.4
			C194.3,496.7,194.3,497.2,194.2,497.7z'
				/>
				<path
					className='car-4-60'
					d='M165.5,461.1c-2.3,1-12.5,5.8-17.3,9.4c1.1,0.2,3.6,0.4,3.6,0.4s14.4-6.6,14.9-6.9
			C167,463.9,166.2,462.5,165.5,461.1z'
				/>
				<path className='car-4-61' d='M202.7,462.2l0.1,27h-6.7c-5.2-12.1-17.1-12.7-26.9-10.5l0.1-16.5H202.7z' />
				<path className='car-4-56' d='M185.7,436.6c-6.5,7.1-16.9,21.2-19.3,23.9c0.8,0,1.9,0.1,1.9,0.1l18.9-24H185.7z' />
				<path className='car-4-56' d='M202.7,462.2h-33.5c0,0,18.7-25.6,20.8-25.6h12.6V462.2z' />
				<path className='car-4-56' d='M177.8,462.2h-8.5c0,0,1.9-2.9,4.5-6.8C175.2,457.7,176.8,460.5,177.8,462.2z' />
				<path
					className='car-4-62'
					d='M150.2,483.6c-0.2,0.1-0.4,0.1-0.6,0.1c0,0-0.7,0-1.4,0c-1,0-1-10.7,0-10.7c0.5,0,1.5,0,2.2,0
			C150.9,473,150.9,483.3,150.2,483.6z'
				/>
				<path className='car-4-63' d='M150.2,483.6c-0.6,0-0.6-10.6,0.1-10.6c0.4,0,0.9,0,0.9,0C154.5,473.2,154.1,483.6,150.2,483.6z' />
				<path className='car-4-63' d='M175.1,454.2l-1.8,0.1c-1.6,0.1-1.5,9.3,1,9l1.6-0.1L175.1,454.2z' />

				<rect
					x='174'
					y='454.2'
					transform='matrix(0.9965 -8.312728e-02 8.312728e-02 0.9965 -37.5315 16.1151)'
					className='car-4-64'
					width='1.4'
					height='9.1'
				/>
				<path
					className='car-4-65'
					d='M158.4,485.5h-12c-1.7,0-3.2,1.4-3.2,3.2v5.7c0,1.7,1.4,3.2,3.2,3.2h12c1.7,0,3.2-1.4,3.2-3.2v-5.7
			C161.6,487,160.2,485.5,158.4,485.5z'
				/>
				<path className='car-4-65' d='M340,485.5h-8.7v12.2h8.7c1.9,0,3.5-1.6,3.5-3.5V489C343.4,487.1,341.9,485.5,340,485.5z' />
				<path
					className='car-4-63'
					d='M159.6,474.3h-1.9c-0.3,0-0.6,0.3-0.6,0.6v3.6c0,0.3,0.3,0.6,0.6,0.6h1.9c0.3,0,0.6-0.3,0.6-0.6v-3.6
			C160.2,474.6,159.9,474.3,159.6,474.3z'
				/>
				<rect x='336.2' y='478.5' className='car-4-63' width='2.8' height='6.2' />
				<rect x='204.8' y='420' className='car-4-56' width='133.4' height='57.1' />
				<rect x='207.6' y='422.7' className='car-4-64' width='127.9' height='51.6' />
			</g>
			<g id='cd-tire-front'>
				<path
					className='car-4-56'
					d='M175.4,503c3.7,2,8.3,0.5,10.3-3.2c2-3.7,0.5-8.3-3.2-10.3c-3.7-2-8.3-0.5-10.3,3.2
			C170.2,496.4,171.6,501,175.4,503L175.4,503z M184.8,485c6.2,3.2,8.6,10.9,5.4,17.1c-3.2,6.2-10.9,8.6-17.1,5.3
			c-6.2-3.2-8.6-10.9-5.3-17.1C170.9,484.2,178.6,481.8,184.8,485z'
				/>

				<ellipse transform='matrix(0.4634 -0.8862 0.8862 0.4634 -343.7143 424.7985)' className='car-4-62' cx='178.9' cy='496.2' rx='8.9' ry='8.9' />

				<ellipse transform='matrix(0.4634 -0.8861 0.8861 0.4634 -343.7144 424.7983)' className='car-4-56' cx='178.9' cy='496.2' rx='3.1' ry='3.1' />

				<ellipse transform='matrix(0.4634 -0.8861 0.8861 0.4634 -337.6133 424.4024)' className='car-4-56' cx='181.6' cy='491' rx='1.6' ry='1.6' />

				<ellipse transform='matrix(0.4634 -0.8862 0.8862 0.4634 -343.3215 430.9022)' className='car-4-56' cx='184.1' cy='498.9' rx='1.6' ry='1.6' />

				<ellipse transform='matrix(0.4634 -0.8861 0.8861 0.4634 -349.8141 425.1847)' className='car-4-56' cx='176.2' cy='501.4' rx='1.6' ry='1.6' />

				<ellipse transform='matrix(0.4634 -0.8861 0.8861 0.4634 -344.1085 418.6974)' className='car-4-56' cx='173.7' cy='493.5' rx='1.6' ry='1.6' />
			</g>
			<g id='cd-tire-back'>
				<path
					className='car-4-56'
					d='M314.1,503.1c3.8-1.8,5.4-6.3,3.6-10.1c-1.8-3.8-6.3-5.4-10.1-3.6c-3.8,1.8-5.4,6.3-3.6,10.1
			C305.8,503.3,310.3,504.9,314.1,503.1L314.1,503.1z M305.5,484.8c6.3-3,13.9-0.3,16.8,6c3,6.3,0.3,13.9-6,16.8
			c-6.3,3-13.9,0.3-16.8-6C296.4,495.3,299.1,487.7,305.5,484.8z'
				/>

				<ellipse transform='matrix(0.9042 -0.427 0.427 0.9042 -182.1305 180.2746)' className='car-4-62' cx='310.9' cy='496.2' rx='8.9' ry='8.9' />

				<ellipse transform='matrix(0.9042 -0.427 0.427 0.9042 -182.1325 180.2778)' className='car-4-56' cx='310.9' cy='496.2' rx='3.1' ry='3.1' />

				<ellipse transform='matrix(0.9042 -0.4271 0.4271 0.9042 -180.1003 178.6906)' className='car-4-56' cx='308.3' cy='490.9' rx='1.6' ry='1.6' />

				<ellipse transform='matrix(0.9042 -0.4271 0.4271 0.9042 -180.5454 182.3182)' className='car-4-56' cx='316.2' cy='493.7' rx='1.6' ry='1.6' />

				<ellipse transform='matrix(0.9042 -0.4271 0.4271 0.9042 -184.1682 181.871)' className='car-4-56' cx='313.4' cy='501.5' rx='1.6' ry='1.6' />

				<ellipse transform='matrix(0.9042 -0.427 0.427 0.9042 -183.7197 178.2377)' className='car-4-56' cx='305.5' cy='498.7' rx='1.6' ry='1.6' />
			</g>
		</g>
	);
};

export default CarD;

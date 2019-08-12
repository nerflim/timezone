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

			{props.current === 'night' ? (
				<g id='stars'>
					<circle className='stars-4' cx='215.2' cy='45.5' r='0.9' />
					<circle className='stars-5' cx='187.4' cy='77.6' r='0.9' />
					<circle className='stars-5' cx='234.2' cy='104.8' r='0.9' />
					<circle className='stars-5' cx='220.8' cy='71.3' r='0.9' />
					<circle className='stars-5' cx='205.8' cy='56.3' r='0.9' />
					<circle className='stars-5' cx='242.8' cy='56.3' r='0.9' />
					<circle className='stars-4' cx='245.4' cy='73.1' r='0.9' />
					<circle className='stars-4' cx='274.8' cy='31.3' r='0.9' />
					<circle className='stars-5' cx='342.9' cy='7.3' r='0.9' />
					<circle className='stars-4' cx='228.8' cy='26.3' r='0.9' />
					<circle className='stars-5' cx='251.8' cy='44.3' r='0.9' />
					<circle className='stars-5' cx='229.2' cy='6.4' r='0.9' />
					<circle className='stars-5' cx='219.8' cy='17.2' r='0.9' />
					<circle className='stars-5' cx='256.8' cy='17.2' r='0.9' />
					<circle className='stars-5' cx='265.8' cy='5.2' r='0.9' />
					<circle className='stars-5' cx='281.4' cy='59.4' r='0.9' />
					<circle className='stars-5' cx='292.4' cy='27.2' r='0.9' />
					<circle className='stars-5' cx='301.4' cy='15.2' r='0.9' />
					<circle className='stars-4' cx='331' cy='30.3' r='0.9' />
					<circle className='stars-5' cx='253.7' cy='91.5' r='0.9' />
					<circle className='stars-5' cx='130.1' cy='31.6' r='0.9' />
					<circle className='stars-5' cx='163.6' cy='25.3' r='0.9' />
					<circle className='stars-5' cx='148.6' cy='10.3' r='0.9' />
					<circle className='stars-4' cx='185.6' cy='10.3' r='0.9' />
					<circle className='stars-5' cx='188.1' cy='27.1' r='0.9' />
					<circle className='stars-5' cx='196.4' cy='45.5' r='0.9' />
					<circle className='stars-4' cx='165.8' cy='75.6' r='0.9' />
					<circle className='stars-5' cx='138.1' cy='107.7' r='0.9' />
					<circle className='stars-5' cx='171.5' cy='101.3' r='0.9' />
					<circle className='stars-5' cx='156.5' cy='86.3' r='0.9' />
					<circle className='stars-4' cx='170.5' cy='47.3' r='0.9' />
					<circle className='stars-5' cx='80.8' cy='61.7' r='0.9' />
					<circle className='stars-5' cx='114.2' cy='55.3' r='0.9' />
					<circle className='stars-5' cx='99.2' cy='40.3' r='0.9' />
					<circle className='stars-5' cx='136.2' cy='40.3' r='0.9' />
					<circle className='stars-5' cx='138.8' cy='57.2' r='0.9' />
					<circle className='stars-5' cx='147' cy='75.6' r='0.9' />
					<circle className='stars-4' cx='80.7' cy='23.8' r='0.9' />
					<circle className='stars-4' cx='114.2' cy='17.4' r='0.9' />
					<circle className='stars-5' cx='99.2' cy='2.4' r='0.9' />
					<circle className='stars-5' cx='116.4' cy='67.8' r='0.9' />
					<circle className='stars-4' cx='88.7' cy='99.8' r='0.9' />
					<circle className='stars-5' cx='122.1' cy='93.5' r='0.9' />
					<circle className='stars-5' cx='107.1' cy='78.5' r='0.9' />
					<circle className='stars-4' cx='121.1' cy='39.4' r='0.9' />
					<circle className='stars-5' cx='64.8' cy='47.5' r='0.9' />
					<circle className='stars-5' cx='86.8' cy='32.5' r='0.9' />
					<circle className='stars-5' cx='89.4' cy='49.3' r='0.9' />
					<circle className='stars-5' cx='97.6' cy='67.8' r='0.9' />
					<circle className='stars-5' cx='38.6' cy='71.3' r='0.9' />
					<circle className='stars-5' cx='72' cy='65' r='0.9' />
					<circle className='stars-5' cx='57' cy='50' r='0.9' />
					<circle className='stars-5' cx='38.5' cy='33.4' r='0.9' />
					<circle className='stars-5' cx='71.9' cy='27' r='0.9' />
					<circle className='stars-4' cx='56.9' cy='12' r='0.9' />
					<circle className='stars-5' cx='74.2' cy='77.4' r='0.9' />
					<circle className='stars-5' cx='46.5' cy='109.5' r='0.9' />
					<circle className='stars-5' cx='79.9' cy='103.1' r='0.9' />
					<circle className='stars-4' cx='64.9' cy='88.1' r='0.9' />
					<circle className='stars-5' cx='78.9' cy='49' r='0.9' />
					<circle className='stars-5' cx='22.6' cy='57.1' r='0.9' />
					<circle className='stars-4' cx='44.6' cy='42.1' r='0.9' />
					<circle className='stars-5' cx='47.2' cy='59' r='0.9' />
					<circle className='stars-5' cx='55.4' cy='77.4' r='0.9' />
					<circle className='stars-5' cx='30.7' cy='58.6' r='0.9' />
					<circle className='stars-5' cx='15.7' cy='43.6' r='0.9' />
					<circle className='stars-4' cx='30.6' cy='20.7' r='0.9' />
					<circle className='stars-5' cx='15.6' cy='5.7' r='0.9' />
					<circle className='stars-5' cx='32.9' cy='71' r='0.9' />
					<circle className='stars-4' cx='5.2' cy='103.1' r='0.9' />
					<circle className='stars-5' cx='38.6' cy='96.8' r='0.9' />
					<circle className='stars-5' cx='23.6' cy='81.8' r='0.9' />
					<circle className='stars-5' cx='37.6' cy='42.7' r='0.9' />
					<circle className='stars-5' cx='3.3' cy='35.8' r='0.9' />
					<circle className='stars-5' cx='5.9' cy='52.6' r='0.9' />
					<circle className='stars-5' cx='14.1' cy='71' r='0.9' />
					<circle className='stars-5' cx='287.1' cy='85.2' r='0.9' />
					<circle className='stars-5' cx='272.1' cy='70.2' r='0.9' />
					<circle className='stars-5' cx='309.1' cy='70.2' r='0.9' />
					<circle className='stars-4' cx='311.7' cy='87' r='0.9' />
					<circle className='stars-5' cx='341.1' cy='45.2' r='0.9' />
					<circle className='stars-5' cx='295.1' cy='40.2' r='0.9' />
					<circle className='stars-5' cx='315.3' cy='30.7' r='0.9' />
					<circle className='stars-5' cx='318.1' cy='58.2' r='0.9' />
					<circle className='stars-5' cx='217.1' cy='132.8' r='0.9' />
					<circle className='stars-5' cx='189.3' cy='164.9' r='0.9' />
					<circle className='stars-5' cx='236.1' cy='192' r='0.9' />
					<circle className='stars-5' cx='222.7' cy='158.5' r='0.9' />
					<circle className='stars-5' cx='207.7' cy='143.5' r='0.9' />
					<circle className='stars-5' cx='244.7' cy='143.5' r='0.9' />
					<circle className='stars-4' cx='247.3' cy='160.4' r='0.9' />
					<circle className='stars-4' cx='276.7' cy='118.5' r='0.9' />
					<circle className='stars-5' cx='344.8' cy='94.6' r='0.9' />
					<circle className='stars-4' cx='230.7' cy='113.5' r='0.9' />
					<circle className='stars-5' cx='253.7' cy='131.5' r='0.9' />
					<circle className='stars-5' cx='231.1' cy='93.7' r='0.9' />
					<circle className='stars-5' cx='221.7' cy='104.5' r='0.9' />
					<circle className='stars-5' cx='258.7' cy='104.5' r='0.9' />
					<circle className='stars-5' cx='267.7' cy='92.5' r='0.9' />
					<circle className='stars-5' cx='283.3' cy='146.7' r='0.9' />
					<circle className='stars-5' cx='294.3' cy='114.5' r='0.9' />
					<circle className='stars-5' cx='303.3' cy='102.5' r='0.9' />
					<circle className='stars-4' cx='332.9' cy='117.6' r='0.9' />
					<circle className='stars-5' cx='255.6' cy='178.8' r='0.9' />
					<circle className='stars-5' cx='132' cy='118.9' r='0.9' />
					<circle className='stars-5' cx='165.5' cy='112.5' r='0.9' />
					<circle className='stars-4' cx='150.5' cy='97.5' r='0.9' />
					<circle className='stars-4' cx='187.5' cy='97.5' r='0.9' />
					<circle className='stars-5' cx='190' cy='114.4' r='0.9' />
					<circle className='stars-5' cx='198.3' cy='132.8' r='0.9' />
					<circle className='stars-5' cx='167.7' cy='162.9' r='0.9' />
					<circle className='stars-5' cx='140' cy='195' r='0.9' />
					<circle className='stars-5' cx='173.4' cy='188.6' r='0.9' />
					<circle className='stars-5' cx='158.4' cy='173.6' r='0.9' />
					<circle className='stars-4' cx='172.4' cy='134.5' r='0.9' />
					<circle className='stars-5' cx='82.7' cy='149' r='0.9' />
					<circle className='stars-5' cx='116.1' cy='142.6' r='0.9' />
					<circle className='stars-5' cx='101.1' cy='127.6' r='0.9' />
					<circle className='stars-4' cx='138.1' cy='127.6' r='0.9' />
					<circle className='stars-5' cx='140.7' cy='144.5' r='0.9' />
					<circle className='stars-5' cx='148.9' cy='162.9' r='0.9' />
					<circle className='stars-5' cx='82.6' cy='111' r='0.9' />
					<circle className='stars-5' cx='116.1' cy='104.7' r='0.9' />
					<circle className='stars-5' cx='118.3' cy='155' r='0.9' />
					<circle className='stars-5' cx='90.6' cy='187.1' r='0.9' />
					<circle className='stars-5' cx='124' cy='180.8' r='0.9' />
					<circle className='stars-5' cx='109' cy='165.8' r='0.9' />
					<circle className='stars-5' cx='123' cy='126.7' r='0.9' />
					<circle className='stars-5' cx='66.7' cy='134.8' r='0.9' />
					<circle className='stars-5' cx='88.7' cy='119.8' r='0.9' />
					<circle className='stars-5' cx='91.3' cy='136.6' r='0.9' />
					<circle className='stars-4' cx='99.5' cy='155' r='0.9' />
					<circle className='stars-5' cx='40.5' cy='158.6' r='0.9' />
					<circle className='stars-5' cx='73.9' cy='152.2' r='0.9' />
					<circle className='stars-5' cx='58.9' cy='137.2' r='0.9' />
					<circle className='stars-4' cx='40.4' cy='120.7' r='0.9' />
					<circle className='stars-5' cx='73.8' cy='114.3' r='0.9' />
					<circle className='stars-5' cx='58.8' cy='99.3' r='0.9' />
					<circle className='stars-5' cx='76.1' cy='164.7' r='0.9' />
					<circle className='stars-5' cx='48.3' cy='196.8' r='0.9' />
					<circle className='stars-5' cx='81.8' cy='190.4' r='0.9' />
					<circle className='stars-5' cx='66.8' cy='175.4' r='0.9' />
					<circle className='stars-5' cx='80.8' cy='136.3' r='0.9' />
					<circle className='stars-5' cx='24.5' cy='144.4' r='0.9' />
					<circle className='stars-5' cx='46.5' cy='129.4' r='0.9' />
					<circle className='stars-5' cx='49.1' cy='146.3' r='0.9' />
					<circle className='stars-5' cx='57.3' cy='164.7' r='0.9' />
					<circle className='stars-4' cx='32.6' cy='145.9' r='0.9' />
					<circle className='stars-5' cx='17.6' cy='130.9' r='0.9' />
					<circle className='stars-5' cx='32.5' cy='108' r='0.9' />
					<circle className='stars-5' cx='17.5' cy='93' r='0.9' />
					<circle className='stars-5' cx='34.8' cy='158.3' r='0.9' />
					<circle className='stars-5' cx='7' cy='190.4' r='0.9' />
					<circle className='stars-5' cx='40.5' cy='184.1' r='0.9' />
					<circle className='stars-5' cx='25.5' cy='169.1' r='0.9' />
					<circle className='stars-5' cx='39.5' cy='130' r='0.9' />
					<circle className='stars-5' cx='5.2' cy='123.1' r='0.9' />
					<circle className='stars-5' cx='7.8' cy='139.9' r='0.9' />
					<circle className='stars-5' cx='16' cy='158.3' r='0.9' />
					<circle className='stars-5' cx='289' cy='172.5' r='0.9' />
					<circle className='stars-5' cx='274' cy='157.5' r='0.9' />
					<circle className='stars-5' cx='311' cy='157.5' r='0.9' />
					<circle className='stars-4' cx='313.6' cy='174.3' r='0.9' />
					<circle className='stars-5' cx='343' cy='132.5' r='0.9' />
					<circle className='stars-5' cx='297' cy='127.5' r='0.9' />
					<circle className='stars-5' cx='317.1' cy='118' r='0.9' />
					<circle className='stars-5' cx='320' cy='145.5' r='0.9' />
				</g>
			) : null}
		</g>
	);
};

export default Background;

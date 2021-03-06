import React, { useEffect, useState } from 'react';

const Road = props => {
	const [fill, setFill] = useState(props.current === 'morning' ? '#FFC9CA' : props.current === 'afternoon' ? '#FFBE70' : '#FF9FDA');

	useEffect(() => {
		setFill(props.current === 'morning' ? '#FFC9CA' : props.current === 'afternoon' ? '#FFBE70' : '#FF9FDA');
	}, [props]);
	return (
		<g id='road'>
			<rect y='444' fill='#FFE6E7' width='350' height='156' />
			<rect y='444' fill={fill} width='350' height='11' />
			<rect y='589' fill={fill} width='350' height='11' />
			<line fill='none' stroke={fill} strokeWidth='5' strokeMiterlimit='10' x1='0' y1='467' x2='350' y2='467' />
			<line stroke={fill} strokeWidth='3' strokeMiterlimit='10' strokeDasharray='11.6552,11.6552' x1='17.7' y1='522' x2='338.2' y2='522' />
			<line fill='none' stroke={fill} strokeWidth='5' strokeMiterlimit='10' x1='0' y1='577' x2='350' y2='577' />
		</g>
	);
};

export default Road;

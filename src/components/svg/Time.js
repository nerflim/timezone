import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Time = props => {
	const [fill, setFill] = useState(props.current === 'morning' ? '#5894C6' : props.current === 'afternoon' ? '#2C8C6C' : '#ffffff');

	useEffect(() => {
		setFill(props.current === 'morning' ? '#5894C6' : props.current === 'afternoon' ? '#2C8C6C' : '#ffffff');
	}, [props]);
	return (
		<g id='time'>
			<text id='time' fill={fill} fontWeight='bold' fontSize='37.2097px' x='338' y='220' textAnchor='end'>
				{moment(props.time).format('hh:mm A')}
			</text>
			<text id='date' fill={fill} fontSize='16px' x='336' y='248' textAnchor='end'>
				{moment(props.time).format('MMMM DD, YYYY')}
			</text>
			<rect x='316.2' y='226.6' width='19.1' height='2.1' fill={fill} />
		</g>
	);
};

export default Time;

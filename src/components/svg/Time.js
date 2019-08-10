import React from 'react';
import moment from 'moment';

const Time = props => {
	return (
		<g id='time'>
			<text id='time' fill='#393762' fontWeight='bold' fontSize='37.2097px' x='338' y='220' textAnchor='end'>
				{moment(props.time).format('hh:mm A')}
			</text>
			<text id='date' fill='#393762' fontSize='16px' x='336' y='248' textAnchor='end'>
				{moment(props.time).format('MMMM DD, YYYY')}
			</text>
			<rect x='316.2' y='226.6' width='19.1' height='2.1' fill='#393762' />
		</g>
	);
};

export default Time;

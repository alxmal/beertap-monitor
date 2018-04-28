import React from 'react';

const BeerStyle = props => {
	const style = props.beerstyle.toLowerCase();
	let tagColor = '';

	switch (style) {
		case 'stout':
		case 'milk stout':
			tagColor = '#9587D9';
			break;
		case 'ipa':
		case 'double ipa':
		case 'black ipa':
		case 'vermont ipa':
			tagColor = '#FFC400';
			break;
		case 'apa':
		case 'pale ale':
			tagColor = '#B5F26F';
			break;
		case 'porter':
		case 'coconut porter':
			tagColor = '#DE350B';
			break;
		default:
			tagColor = 'white';
	}

	return style.length > 0 ? (
		<span
			className="card__style"
			style={{ borderColor: tagColor, color: tagColor }}
		>
			{props.beerstyle}
		</span>
	) : null;
};

export default BeerStyle;

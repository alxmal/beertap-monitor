import React from 'react';
import './beer-card.styl';

function Beercard(props) {
	return (
		<div className="beer-card">
			<div className="tap-number">{props.tapNumber}</div>
			<div className="card__prod">
				<p className="prod__brewery">{props.tap.brewery}</p>
				<p className="prod__name">
					{props.tap.name}
					<span className="card__style">{props.tap.style}</span>
				</p>
			</div>
			<div className="card__stats">
				<p className="stats__og">{props.tap.og}</p>
				<p className="stats__abv">{props.tap.abv + '%'}</p>
				<p className="stats__ibu">{props.tap.ibu}</p>
				<p className="stats__price">{props.tap.price + 'Р'}</p>
			</div>
		</div>
	);
}

export default Beercard;

import React from 'react';
import BeerStyle from './BeerStyle';
import './beer-card.styl';

function Beercard(props) {
	return (
		<div className="beer-card">
			<div className="tap-number">{props.tapNumber}</div>
			<div className="card__prod">
				<p className="prod__brewery">
					{props.tap.brewery}
					<BeerStyle beerstyle={props.tap.style} />
				</p>
				<p className="prod__name">{props.tap.name}</p>
			</div>
			<div className="card__stats">
				<span className="stats__og">{props.tap.og}</span>
				<span className="stats__abv">{props.tap.abv + '%'}</span>
				<span className="stats__ibu">{props.tap.ibu}</span>
				<span className="stats__price">{props.tap.price + '₽'}</span>
			</div>
		</div>
	);
}

export default Beercard;

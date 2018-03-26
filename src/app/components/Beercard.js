import React from 'react';
import './beer-card.styl';

function Beercard(props) {
	return (
		<div className="beer-card">
			<div className="prod">
				<p className="brewery">{props.data.brewery}</p>
				<p className="name">{props.tapNum + ' / ' + props.data.name}</p>
			</div>
			<p className="sort">{props.data.sort}</p>
			<div className="stats">
				<p className="abv">{props.data.abv + "%"}</p>
				<p className="price">{props.data.price + "₽"}</p>
			</div>

		</div>
	);
}

export default Beercard;
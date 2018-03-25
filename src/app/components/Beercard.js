import React, { Component } from 'react';
import './beer-card.styl';

class Beercard extends Component {
	render() {
		console.log(this.props);
		return (
			<div className="beer-card">
				<div className="prod">
					<p className="brewery">{this.props.data.brewery}</p>
					<h1 className="name">{this.props.data.name}</h1>
				</div>
				<p className="sort">{this.props.data.sort}</p>
				<div className="stats">
					<p className="abv">{this.props.data.abv + "%"}</p>
					<p className="price">{this.props.data.price + "₽"}</p>
				</div>

			</div>
		);
	};
}

export default Beercard;
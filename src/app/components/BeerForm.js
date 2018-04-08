import React, { Component } from 'react';

class BeerForm extends Component {
	handleChange = e => {
		const updatedTap = {
			...this.props.tap,
			[e.currentTarget.name]: e.currentTarget.value
		};
		this.props.updateTap(this.props.index, updatedTap);
	};

	render() {
		return (
			<form className="beer-form">
				<h3>Кран {this.props.tapNumber}</h3>
				<div className="product">
					<div className="brewery">
						<p>Пивоварня</p>
						<input
							name="brewery"
							type="text"
							placeholder={this.props.tap.brewery}
							onChange={this.handleChange}
						/>
					</div>
					<div className="name">
						<p>Название</p>
						<input
							name="name"
							type="text"
							placeholder={this.props.tap.name}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="price-tag">
					<div className="style">
						<p>Стиль</p>
						<input
							name="style"
							type="text"
							placeholder={this.props.tap.style}
							onChange={this.handleChange}
						/>
					</div>
					<div className="price">
						<p>Цена</p>
						<input
							name="price"
							type="text"
							placeholder={this.props.tap.price}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="stats">
					<div className="og">
						<p>OG</p>
						<input
							name="og"
							type="text"
							placeholder={this.props.tap.og}
							onChange={this.handleChange}
						/>
					</div>
					<div className="abv">
						<p>ABV</p>
						<input
							name="abv"
							type="text"
							placeholder={this.props.tap.abv}
							onChange={this.handleChange}
						/>
					</div>
					<div className="ibu">
						<p>IBU</p>
						<input
							name="ibu"
							type="text"
							placeholder={this.props.tap.ibu}
							onChange={this.handleChange}
						/>
					</div>
				</div>
			</form>
		);
	}
}

export default BeerForm;

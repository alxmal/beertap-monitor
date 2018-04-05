import React, { Component } from "react";
import BeerForm from "./BeerForm";
import "../components/inventory.styl";

class Inventory extends Component {
	render() {
		const taps = this.props.taps;
		return (
			<div className="inventory">
				<h2>Установка</h2>
				{Object.keys(taps).map((key, i) => (
					<BeerForm
						key={key}
						index={key}
						tapNumber={i + 1}
						tap={taps[key]}
						updateTap={this.props.updateTap}
					/>
				))}
				<footer>
					<button onClick={this.props.toggleInventory}>Сохранить</button>
				</footer>
			</div>
		);
	}
}

export default Inventory;

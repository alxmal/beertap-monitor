import React, { Component } from "react";
import BeerForm from "./BeerForm";
import CloseIcon from "../assets/icons/close.svg";
import "../components/inventory.styl";

class Inventory extends Component {
	render() {
		const taps = this.props.taps;
		return (
			<div className="inventory">
				<header>
					<h2>Настройка кранов</h2>
					<CloseIcon onClick={this.props.toggleInventory} className="close-icon" width="32" height="32"/>
				</header>
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

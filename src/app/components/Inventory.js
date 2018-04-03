import React, { Component } from "react";
import BeerForm from "./BeerForm";

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
                <button onClick={this.props.toggleInventory}>Сохранить</button>
            </div>
        );
    }
}

export default Inventory;

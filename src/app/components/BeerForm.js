import React, { Component } from "react";

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
                <div className="names">
                    <input
                        name="brewery"
                        type="text"
                        placeholder="Пивоварня"
                        onChange={this.handleChange}
                    />
                    <input
                        name="name"
                        type="text"
                        placeholder="Название"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="price-tag">
                    <input
                        name="sort"
                        type="text"
                        placeholder="Сорт"
                        onChange={this.handleChange}
                    />
                    <input
                        name="price"
                        type="text"
                        placeholder="Цена"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="stats">
                    <input
                        name="og"
                        type="text"
                        placeholder="OG"
                        onChange={this.handleChange}
                    />
                    <input
                        name="abv"
                        type="text"
                        placeholder="ABV"
                        onChange={this.handleChange}
                    />
                    <input
                        name="ibu"
                        type="text"
                        placeholder="IBU"
                        onChange={this.handleChange}
                    />
                </div>
            </form>
        );
    }
}

export default BeerForm;

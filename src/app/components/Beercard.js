import React from "react";
import "./beer-card.styl";

function Beercard(props) {
    return (
        <div className="beer-card">
            <div className="prod">
                <p className="brewery">{props.tap.brewery}</p>
                <p className="name">
                    {props.tapNumber + " / " + props.tap.name}
                </p>
            </div>
            <p className="sort">{props.tap.sort}</p>
            <div className="stats">
                <p className="abv">{props.tap.abv + "%"}</p>
                <p className="price">{props.tap.price + "₽"}</p>
            </div>
        </div>
    );
}

export default Beercard;

import React, { Component } from "react";
import { render } from "react-dom";
import Transition from "react-transition-group/Transition";
import BeerCard from "./components/BeerCard";
import Inventory from "./components/Inventory";
import tapsDataInit from "./tapsDataInit";
import "./index.styl";

const duration = 100;

const defaultStyle = {
    position: "absolute",
    right: 0,
    width: "40%",
    height: "100%",
    overflow: "scroll",
    willChange: "opacity, transform",
    transition: ".2s ease-in-out",
    transitionProperty: "opacity, transform",
    opacity: 0
};

const transitionStyles = {
    entering: {
        opacity: 0,
        transform: "translateX(2%)"
    },
    entered: {
        opacity: 1,
        transform: "translateX(0)"
    },
    exiting: {
        opacity: 0,
        transform: "translateX(2%)"
    }
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInventory: false,
            taps: { ...tapsDataInit }
        };
    }

    toggleInventory = () => {
        this.setState({
            showInventory: !this.state.showInventory
        });
    };

    updateTap = (key, updatedTap) => {
        const taps = { ...this.state.taps };
        taps[key] = updatedTap;
        this.setState({ taps: taps });
    };

    render() {
        const { taps } = this.state;
        const isShown = this.state.showInventory;
        return (
            <div className="container">
                {Object.keys(taps).map((key, i) => (
                    <BeerCard
                        key={key}
                        index={key}
                        tapNumber={i + 1}
                        tap={taps[key]}
                    />
                ))}
                <button className="btn" onClick={this.toggleInventory}>
                    🍺
                </button>
                <Transition
                    in={this.state.showInventory}
                    timeout={duration}
                    unmountOnExit
                >
                    {state => (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >
                            <Inventory
                                taps={this.state.taps}
                                toggleInventory={this.toggleInventory}
                                updateTap={this.updateTap}
                            />
                        </div>
                    )}
                </Transition>
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));

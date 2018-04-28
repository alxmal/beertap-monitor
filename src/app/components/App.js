import React, { Component } from 'react';
import { render } from 'react-dom';
import Transition from 'react-transition-group/Transition';
import BeerCard from './BeerCard';
import Inventory from './Inventory';
import TapIcon from '../assets/icons/tap.svg';
import tapsDataInit from '../tapsDataInit';

const tapsData = JSON.parse(localStorage.getItem('tapsList')) || tapsDataInit;
const duration = 100;

const defaultStyle = {
	position: 'absolute',
	right: '0',
	width: '40%',
	height: '100%',
	overflowY: 'scroll',
	overflowX: 'hidden',
	willChange: 'opacity, transform',
	transition: '.3s ease',
	transitionProperty: 'opacity, transform',
	opacity: 0,
	boxShadow: '-4px 0 16px -2px rgba(0, 0, 0, 0, .5)'
};

const transitionStyles = {
	entering: {
		opacity: 0,
		transform: 'translateX(-2%)'
	},
	entered: {
		opacity: 1,
		transform: 'translateX(0)'
	},
	exiting: {
		opacity: 0,
		transform: 'translateX(-2%)'
	}
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showInventory: false,
			taps: { ...tapsData }
		};
	}

	onKeyDownHandler = e => {
		if (e.ctrlKey && e.which === 77) {
			this.setState({
				showInventory: !this.state.showInventory
			});
		}
	};

	fullScreenToggle = e => {
		if (e.ctrlKey && e.which === 70) {
			if (
				(document.fullScreenElement &&
					document.fullScreenElement !== null) ||
				(!document.mozFullScreen && !document.webkitIsFullScreen)
			) {
				if (document.documentElement.requestFullScreen) {
					document.documentElement.requestFullScreen();
				} else if (document.documentElement.mozRequestFullScreen) {
					document.documentElement.mozRequestFullScreen();
				} else if (document.documentElement.webkitRequestFullScreen) {
					document.documentElement.webkitRequestFullScreen(
						Element.ALLOW_KEYBOARD_INPUT
					);
				}
			} else {
				if (document.cancelFullScreen) {
					document.cancelFullScreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				}
			}
		}
	};

	toggleInventory = () => {
		this.setState({
			showInventory: !this.state.showInventory
		});
	};

	updateTap = (key, updatedTap) => {
		const taps = { ...this.state.taps };
		taps[key] = updatedTap;
		this.setState({ taps: taps });
		localStorage.setItem('tapsList', JSON.stringify(taps));
	};

	componentWillMount() {
		document.addEventListener('keydown', this.onKeyDownHandler);
		document.addEventListener('keydown', this.fullScreenToggle);
	}

	componentDidMount() {
		this.props.reset();
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onKeyDownHandler);
		document.removeEventListener('keydown', this.fullScreenToggle);
	}

	render() {
		const { taps } = this.state;
		const isShown = this.state.showInventory;
		return (
			<div className="display">
				{Object.keys(taps).map((key, i) => (
					<BeerCard
						key={key}
						index={key}
						tapNumber={i + 1}
						tap={taps[key]}
					/>
				))}
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

export default App;

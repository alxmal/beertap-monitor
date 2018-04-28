import React, { Component } from 'react';
import { render } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import App from './components/App';
import SplashScreen from './components/SplashScreen';
import './index.styl';

class LoadingControl extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			showApp: false
		};
	}

	handleLoading = () => {
		this.loadTimerID = setInterval(() => {
			this.setState({
				isLoading: false,
				showApp: true
			});
		}, 2000);
	};

	resetTimer = () => {
		clearInterval(this.loadTimerID);
	};

	componentDidMount() {
		this.handleLoading();
	}

	render() {
		const { isLoading, showApp } = this.state;
		return (
			<CSSTransition
				in={showApp}
				timeout={2000}
				classNames="screen"
				unmountOnExit
			>
				{state => (
					<div>
						{isLoading ? (
							<SplashScreen />
						) : (
							<App reset={this.resetTimer} />
						)}
					</div>
				)}
			</CSSTransition>
		);
	}
}

render(<LoadingControl />, document.getElementById('root'));

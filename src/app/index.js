import React, { Component } from 'react';
import { render } from 'react-dom';
// import data from './data.json';
import './index.styl';
import Beercard from './components/Beercard';

// let tapsdata = {};

// fetch('./app/data.json')
// 	.then(response => response.json())
// 	.then(function(data) {
// 		Object.assign(tapsdata, data)
// 	})

// console.log(tapsdata);

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tapsdata: [],
		};
	}

	componentDidMount() {
		fetch('./app/data.json')
			.then(response => response.json())
			.then(data => this.setState({tapsdata: data}));
	}

	render() {
		const { tapsdata } = this.state;

		return (
			<div className="container">
				{Object.keys(tapsdata).map(tap => <Beercard key={tap} data={tapsdata[tap]}/>)}
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));
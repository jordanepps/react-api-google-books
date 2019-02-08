import React, { Component } from 'react';
import './App.css';

import MainContainer from './MainContainer/MainContainer';

import Header from './Header/Header';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<MainContainer />
			</div>
		);
	}
}

import React, { Component } from 'react';
import './MainContainer.css';

import FormContainer from '../FormContainer/FormContainer';

export default class MainContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInputs: {
				q: '',
				printType: 'all',
				filter: 'none'
			},
			data: {}
		};
	}

	createUrl() {
		const endPoint = 'https://www.googleapis.com/books/v1/volumes';
		const key = 'key=AIzaSyCFSW5dPZJMqvFKnN1KLbemN2oz2Miy50s';
		const params = Object.keys(this.state.userInputs)
			.map(key => `${key}=${this.state.userInputs[key]}`)
			.filter(param => param !== 'filter=none');
		params.push(key);
		const paramString = params.join('&');
		return `${endPoint}?${paramString}`;
	}

	getData() {
		fetch(this.createUrl())
			.then(res => res.json())
			.then(data => this.setState({ data }));
	}
	setUserInput(input) {
		const state = Object.assign({}, this.state);
		state.userInputs.q = input.split(' ').join('+');
		this.setState(state);
	}
	setFilter(key, value) {
		const userInputs = Object.assign({}, this.state.userInputs);
		userInputs[key] = value;
		this.setState({ userInputs });
	}
	render() {
		return (
			<main>
				<FormContainer
					submitHandler={e => this.getData(e)}
					inputHandler={input => this.setUserInput(input)}
					changeHandler={(key, value) => {
						this.setFilter(key, value);
					}}
				/>
			</main>
		);
	}
}

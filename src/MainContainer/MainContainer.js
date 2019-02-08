import React, { Component } from 'react';
import './MainContainer.css';

import FormContainer from '../FormContainer/FormContainer';

export default class MainContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: '',
			printType: 'all',
			filter: ''
		};
	}

	getData() {
		const endPoint = 'https://www.googleapis.com/books/v1/volumes';
		const input = `q=${this.state.userInput}`;
		const print = `printType=${this.state.printType}`;
		const filter = `filter=${this.state.filter}`;
		const key = 'key=AIzaSyCFSW5dPZJMqvFKnN1KLbemN2oz2Miy50s';
		const url = `${endPoint}?${input}&${print}&${filter}&${key}`;
		console.log(url);
		fetch(url)
			.then(res => res.json())
			.then(data => console.log(data));
	}
	setUserInput(input) {
		const userInput = input.split(' ').join('+');
		this.setState({ userInput });
	}
	setFilter(selected) {
		this.setState(selected);
	}
	render() {
		return (
			<main>
				<FormContainer
					submitHandler={e => this.getData(e)}
					inputHandler={input => this.setUserInput(input)}
					changeHandler={selected => {
						this.setFilter(selected);
					}}
				/>
			</main>
		);
	}
}

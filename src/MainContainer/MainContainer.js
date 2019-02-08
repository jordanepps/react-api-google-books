import React, { Component } from 'react';
import './MainContainer.css';

import FormContainer from '../FormContainer/FormContainer';

export default class MainContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: '',
			printType: 'all',
			filter: 'none'
		};
	}
	getData() {
		console.log('connected');
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

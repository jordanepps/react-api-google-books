import React, { Component } from 'react';
import './MainContainer.css';

import FormContainer from '../FormContainer/FormContainer';

export default class MainContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: ''
		};
	}
	getData() {
		console.log('connected');
	}
	setUserInput(userInput) {
		this.setState({ userInput });
	}
	render() {
		return (
			<main>
				<FormContainer
					submitHandler={e => this.getData(e)}
					inputHandler={input => this.setUserInput(input)}
				/>
			</main>
		);
	}
}

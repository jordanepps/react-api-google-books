import React, { Component } from 'react';
import './FormContainer.css';

import Search from '../Search/Search';
import Filters from '../Filters/Filters';

export default class FormContainer extends Component {
	formHandler(e) {
		e.preventDefault();
		this.props.submitHandler();
	}
	getUserInput(userInput) {
		this.props.inputHandler(userInput);
	}
	changeSelection(e) {
		this.props.changeHandler(e.target.name, e.target.value);
	}
	render() {
		return (
			<form onSubmit={e => this.formHandler(e)}>
				<Search inputHandler={input => this.getUserInput(input)} />
				<Filters changeHandler={e => this.changeSelection(e)} />
			</form>
		);
	}
}

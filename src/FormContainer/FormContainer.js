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
		const type = e.target.name;
		const value = e.target.value;
		const selected = { [type]: value };
		this.props.changeHandler(selected);
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

import React, { Component } from 'react';
import './FormContainer.css';

export default class FormContainer extends Component {
	formHandler(e) {
		e.preventDefault();
		this.props.submitHandler();
	}
	getUserInput(e) {
		const userInput = e.target.value;
		this.props.inputHandler(userInput);
	}
	render() {
		return (
			<div>
				<form onSubmit={e => this.formHandler(e)}>
					<div>
						<label htmlFor="search">Search:</label>
						<input
							type="text"
							id="search"
							name="search"
							onChange={e => this.getUserInput(e)}
						/>
						<input type="submit" value="Search" />
					</div>
				</form>
			</div>
		);
	}
}

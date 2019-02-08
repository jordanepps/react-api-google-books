import React, { Component } from 'react';
import './FormContainer.css';

import Search from '../Search/Search';

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
			<div>
				<form onSubmit={e => this.formHandler(e)}>
					<Search inputHandler={input => this.getUserInput(input)} />
					<div>
						<label htmlFor="printType">Print Type: </label>
						<select
							id="printType"
							name="printType"
							onChange={e => this.changeSelection(e)}
						>
							<option value="all">All</option>
							<option value="books">Books</option>
							<option value="magazines">Magazines</option>
						</select>
						<label htmlFor="filter">Book Type: </label>
						<select
							id="filter"
							name="filter"
							onChange={e => this.changeSelection(e)}
						>
							<option value="none">No Filter</option>
							<option value="partial">Partial</option>
							<option value="full">Full</option>
							<option value="free-ebooks">Free eBooks</option>
							<option value="paid-ebooks">Paid eBooks</option>
							<option value="ebooks">eBooks</option>
						</select>
					</div>
				</form>
			</div>
		);
	}
}

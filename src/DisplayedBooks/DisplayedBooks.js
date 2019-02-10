import React, { Component } from 'react';
import './DisplayedBooks.css';

import BookItem from '../BookItem/BookItem';

export default class DisplayedBooks extends Component {
	render() {
		return (
			<div>
				{this.props.books.map(book => (
					<BookItem
						key={book.id}
						title={book.volumeInfo.title}
						image={book.volumeInfo.imageLinks.thumbnail}
						authors={book.volumeInfo.authors}
						description={book.volumeInfo.description}
					/>
				))}
			</div>
		);
	}
}
DisplayedBooks.defaultProps = { books: [] };

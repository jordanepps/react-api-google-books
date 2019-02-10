import React from 'react';
import './BookItem.css';

export default function BookItem(props) {
	return (
		<div className="book-item">
			<h2>{props.title}</h2>
			<div>
				<img src={props.image} alt={`Book cover for ${props.title}`} />
				<p>
					{props.authors.length === 1 ? 'Author: ' : 'Authors: '}
					{props.authors.join(', ')}
				</p>
				<p>{props.description}</p>
			</div>
		</div>
	);
}

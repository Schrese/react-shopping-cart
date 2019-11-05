import React from 'react';
import { dispatch } from 'rxjs/internal/observable/pairs';

const Item = props => {
	function handleDelete() {
		console.log(props.id)
		
	}
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick = {handleDelete}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;

import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//contexts
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

function App(props) {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<div className="App">
			<ProductContext.Provider value = {{products, addItem}}>
				<CartContext.Provider value = {{cart}} >
					<Navigation cart={cart} />

					{/* Routes */}
					<Route 
						exact
						path = '/' 
						component = {Products} />
					{/* <Route
						exact
						path="/"
						render={() => (
							<Products
								products={products}
								addItem={addItem}
							/>
						)}
					/> */}

					<Route 
						path = '/cart'
						component = {ShoppingCart} /> 

					{/* <Route
						path="/cart"
						render={() => <ShoppingCart cart={cart} />}
					/> */}
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;

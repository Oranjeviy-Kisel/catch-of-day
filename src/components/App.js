import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
	render(){
		return (
			<div class="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" age={ 500 } />
					<Header tagline="Hahaha" />
				</div>
				
				<Inventory />
				<Order />
			</div>
		)
	}
}

export default App;
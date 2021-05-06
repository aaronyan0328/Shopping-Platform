// import React, { useState, useEffect } from "react";
// import axios from 'axios';

// function Orders(){
// 	const url = 'https://1vt4n5tmbb.execute-api.us-east-1.amazonaws.com/dev/users/orders'
// 	const [orders, setOrders] = useState(null)
// 	useEffect(() => {
// 		axios.get(url).then(response => {
// 			setOrders(response.data)
// 	})},[url])
// 	if (orders){
// 		return (
// 			<div>
// 				<h1>{orders.id}</h1>
// 				<h1>{orders.status}</h1>
// 				<h1>{orders.total}</h1>
// 				<h1>{orders.name}</h1>
// 				<h1>{orders.version}</h1>
// 			</div>
// 		)
// 	}
// 	return (
// 		<div>
// 		</div>
// 	)
// }
// export default Orders;
import React from 'react';
// eslint-disable-next-line
import firebase from "firebase";
class Orders extends React.Component {
	state = {
		orders: null
	  }
	async componentDidMount() {
		// const idToken = await firebase.auth().currentuser?.getIdToken()
		const response = await fetch('https://1vt4n5tmbb.execute-api.us-east-1.amazonaws.com/dev/users/orders')
		// if (response.status === 401) {
		// 	return console.log('unauthorized')
		//   }
		const orders = await response.json()
		// save it to your components state so you can use it during render
		this.setState({orders:orders})
		console.log(orders)
	}
	
	
	render() {
		return (
			<div>
			<div className="title">My Orders</div>
				<h1>{JSON.stringify(this.state.orders)}</h1>
			</div>
		  )
	  }
	// render() {
	// 	return (
	// 		  <div>
	// 		<div className="title">My Orders</div>
	// 			  { 
	// 				Object.keys(this.state.orders).map((id,status,total,name,version) => {
	// 			  return (
	// 					<div>
	// 						<h4>Order ID: {this.state.orders[id]}</h4>
	// 						<h4>Order status: {this.state.orders[status]}</h4>
	// 						<h4>Order status: {this.state.orders[status]}</h4>
	// 						<h4>Order status: {this.state.orders[status]}</h4>
	// 						<h4>Order status: {this.state.orders[status]}</h4>
	// 					</div>
	// 					  )
	// 		  })
	// 			  }
	// 		  </div>
	// 	  )
	//   }
}
export default Orders;
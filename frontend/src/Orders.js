import React, { useState, useEffect } from "react";
import axios from 'axios';

function Orders(){
	const url = 'https://1vt4n5tmbb.execute-api.us-east-1.amazonaws.com/dev/users/orders'
	const [orders, setOrders] = useState(null)
	useEffect(() => {
		axios.get(url).then(response => {
			setOrders(response.data)
	})},[url])
	if (orders){
		return (
			<div>
				<h1>{orders.id}</h1>
				<h1>{orders.status}</h1>
				<h1>{orders.total}</h1>
				<h1>{orders.name}</h1>
				<h1>{orders.version}</h1>
			</div>
		)
	}
	return (
		<div>
		</div>
	)
}
export default Orders;
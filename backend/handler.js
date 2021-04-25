'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        username: 'cy477',
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
// module.exports.postOrders = async (event) => {
//   return {
//     statusCode: 200,
//     expected_body: 
// {
//  name: 'iphone',
//  version: 11}
// }

// expected_response:
// {
//   id: 'order-id',
//   status: 'in-progress',
//   total: '$50',
//   name: 'iphone', 
//   version: 11 }
// }
//   };

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };
module.exports.getOrders = async (event) => {
  // const projectId = 'firebase-project-id'
  if (event.httpMethod === 'GET' && event.path === '/users/orders'){
    // check the header named Authorization
    // const token = event.headers['Authorization']
    // // If no token is provided, or it is "", return a 401
    // if (!token) {
    //   return {
    //     statusCode: 401
    //   }
    // }
    // try {
    //   // validate the token from the request
    //   const decoded = await firebaseTokenVerifier.validate(token, projectId)
    // } catch (err) {
    //   // the token was invalid, 
    //   console.error(err)
    //   return {
    //     statusCode: 401
    //   }
    // }

    return {
      statusCode: 200,
      headers:{
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": '*',
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify(
        {
          id: '001',
          status: 'in-progress',
          total: '$50',
          name: 'iphone', 
          version: '11'
        },
        null,
        2
      ),
    };
  }
};
// const checkUser = async (event) => {
//   const token = event.headers['Authorization']
//     if (!token) {
//       throw new Error('Missing token')
//     }
//     const decodedUser = await firebaseTokenVerifier.validate(token, projectId)
//     return decodedUser
// }

// module.exports.postOrders = async (event) => {
// 	if (event.path === '/users/postOrders' && event.httpMethod === 'POST') {
//     // check if the user is authenticated
// 	let user;
//     try {
//       user = await checkUser(event)
//     } catch (err) {
//       return {
//         statusCode: 401,
//         headers,
//         body: JSON.stringify({message: err.message})
//       }
//     }

//     // check that the request contains a body
//     if (!event.body) {
//       return {
//         statusCode: 400,
//         headers,
//         body: JSON.stringify({message: 'Missing body'})
//       }
//     }

//     // parse the request body as JSON
//     const requestBody = JSON.parse(event.body);

//     // TODO write that data to your dynamodb table
// 		const checkUser = async (event) => {
//   const token = event.headers['Authorization']
//     if (!token) {
//       throw new Error('Missing token')
//     }
//     const decodedUser = await firebaseTokenVerifier.validate(token, projectId)
//     return decodedUser
// }

// module.exports.hello = async (event) => {
// 	...

// 	if (event.path === '/chatroom' && event.httpMethod === 'POST') {
//     // check if the user is authenticated
// 	let user;
//     try {
//       user = await checkUser(event)
//     } catch (err) {
//       return {
//         statusCode: 401,
//         headers,
//         body: JSON.stringify({message: err.message})
//       }
//     }

//     // check that the request contains a body
//     if (!event.body) {
//       return {
//         statusCode: 400,
//         headers,
//         body: JSON.stringify({message: 'Missing body'})
//       }
//     }

//     // parse the request body as JSON
//     const requestBody = JSON.parse(event.body);

//     // TODO write that data to your dynamodb table
// 		const AWS = require("aws-sdk");
//     const { v4: uuidv4 } = require("uuid");
//     const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });
//     const getRestaurants = (zipCode) => {  
//       return docClient.query({TableName: "cs5356-restaurants",KeyConditionExpression: "zipCode = :zipCode",ExpressionAttributeValues: {":zipCode": zipCode,},}).promise().then((results) => results.Items);
//     };
//     const addRestaurant = (restaurant) => {
//       return docClient.put({TableName: "cs5356-restaurants",Item: {zipCode: restaurant.zipCode,restaurantId: restaurant.name,menu: restaurant.menu,},}).promise();
//     };
//     const placeOrder = (userKey, orderDetails) => {
//       return docClient.put({TableName: "cs5356-orders",Item: {userKey: userKey,orderId: uuidv4(),total: orderDetails.total,items: orderDetails.items},}).promise();
//     };
//     const getOrders = (userKey) => {
//       return docClient.query({TableName: "cs5356-orders",KeyConditionExpression: "user_key = :user_key",ExpressionAttributeValues: {":user_key": userKey,},}).promise().then((results) => results.Items);
//     };
    
// 	// send back a successful response
// 	return {
// 	  statusCode: 201,
//       headers
// 	}
//   }
// }
// 	// send back a successful response
// 	return {
// 	  statusCode: 201,
//       headers
// 	}
//   }
// }

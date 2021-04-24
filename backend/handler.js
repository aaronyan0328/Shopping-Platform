'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        username: 'da335',
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.getOrders = async (event) => {
  if (event.httpMethod === 'GET' && event.path === '/users/orders'){
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

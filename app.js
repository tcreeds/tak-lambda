var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const dynamo = new AWS.DynamoDB({region: 'us-east-1', apiVersion: '2012-08-10'})

module.exports.handler = (request, context, callback) => {
  const requestParams = {
    Key: { 'username': {S: request.username}},
    TableName: 'tak'
  }
  dynamo.getItem(requestParams).promise().then((data) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    };

    callback(null, response);
  })
};

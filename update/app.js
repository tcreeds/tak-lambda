var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const dynamo = new AWS.DynamoDB.DocumentClient()

module.exports.handler = (request, context, callback) => {
  let body = JSON.parse(request.body)
  const requestParams = {
    Key: { 'username': body.username },
    UpdateExpression: "set tasks = :t, viewList = :v",
    ExpressionAttributeValues: {
      ":t": body.tasks,
      ":v": body.views
    },
    ReturnValues: "UPDATED_NEW",
    TableName: 'tak'
  }
  dynamo.update(requestParams).promise().then((data) => {
    const response = generateResponse(data)
    callback(null, response)
  }).catch(res => {
    console.log(res)
    callback(null, res.message)
  })
  
};

function generateResponse(data){
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  };

  return response;
}
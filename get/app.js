var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const dynamo = new AWS.DynamoDB({region: 'us-east-1', apiVersion: '2012-08-10'})

module.exports.handler = (request, context, callback) => {
  console.log(request)
  const requestParams = {
    Key: { 'username': {S: request.queryStringParameters.username}},
    TableName: 'tak'
  }
  dynamo.getItem(requestParams).promise().then((data) => {
    const readable = toReadableJson(data)
    const response = generateResponse(readable)
    callback(null, response)
  })
  
};

function toReadableJson(data){
  let tasks = data.Item.tasks.L.map(task => {
    return {
      id: task.M.id.S,
      name: task.M.name.S,
      state: task.M.state.S,
      tags: task.M.tags.L.map(tag => {
        return {
          type: tag.M.type.S,
          value: tag.M.value.S
        }
      })
    }
  })
  let views = data.Item.views.L.map(view => {
    return {
      filter: view.M.filter.S,
      name: view.M.name.S
    }
  })
  return {
    tasks: tasks,
    views: views,
    username: data.Item.username.S
  }
}

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
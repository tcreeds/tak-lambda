var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const dynamo = new AWS.DynamoDB({region: 'us-east-1', apiVersion: '2012-08-10'})

module.exports.handler = (request, context, callback) => {
  const requestParams = {
    Key: { 'username': {S: request.username}},
    TableName: 'tak'
  }
  //dynamo.getItem(requestParams).promise().then(callback(null, processData(data))
  console.log(toReadableJson(JSON.parse('{"Item":{"tasks":{"L":[{"M":{"name":{"S":"Make eye appointment"},"id":{"S":"ad9e4132-d7aa-7426-a6a1-1715a938f413"},"state":{"S":"completed"},"tags":{"L":[]}}},{"M":{"name":{"S":"Ask landlord about cat"},"id":{"S":"30d86c82-8425-4237-b5a8-85210426e9d4"},"state":{"S":"completed"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"apartment"}}}]}}},{"M":{"name":{"S":"add calendar/times"},"id":{"S":"9387236a-591e-f87e-9c03-d582e02beb1b"},"state":{"S":"open"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"development"}}},{"M":{"type":{"S":"project"},"value":{"S":"tak"}}}]}}},{"M":{"name":{"S":"add localstorage"},"id":{"S":"ccddcddb-716e-5319-7be2-6bfce6ee9133"},"state":{"S":"open"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"development"}}},{"M":{"type":{"S":"project"},"value":{"S":"tak"}}}]}}},{"M":{"name":{"S":"tag color codes"},"id":{"S":"d11915e9-b716-c214-caff-8e397347a939"},"state":{"S":"open"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"development"}}},{"M":{"type":{"S":"project"},"value":{"S":"tak"}}}]}}},{"M":{"name":{"S":"suggest tags"},"id":{"S":"6ce421f1-4f06-5587-a051-402956ecb70c"},"state":{"S":"open"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"development"}}},{"M":{"type":{"S":"project"},"value":{"S":"tak"}}}]}}},{"M":{"name":{"S":"custom views"},"id":{"S":"d9f1e37b-4056-c622-6198-8a11faa6e45e"},"state":{"S":"completed"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"development"}}},{"M":{"type":{"S":"project"},"value":{"S":"tak"}}}]}}},{"M":{"name":{"S":"Insurance for eye exam/contacts"},"id":{"S":"273d59f2-20df-a1c1-413e-498613cf115b"},"state":{"S":"open"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"adulting"}}}]}}},{"M":{"name":{"S":"Order glasses"},"id":{"S":"8ec75dcc-7e75-77e3-da9c-b28b3035b928"},"state":{"S":"open"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"adulting"}}}]}}},{"M":{"name":{"S":"Shampoo and conditioner"},"id":{"S":"f3925a89-378b-728a-9ff6-bd50f1b206c9"},"state":{"S":"completed"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"shopping"}}}]}}},{"M":{"name":{"S":"Contact stuff "},"id":{"S":"c1732237-926c-c00b-051f-a09e0fbe2f06"},"state":{"S":"completed"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"shopping"}}}]}}},{"M":{"name":{"S":"Allergy meds"},"id":{"S":"fdb60881-363c-d5e7-bb64-d339c90882f8"},"state":{"S":"completed"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"shopping"}}}]}}},{"M":{"name":{"S":"Get Emily birthday presents"},"id":{"S":"08db76b3-7c8c-5318-e8bf-afc0068eae72"},"state":{"S":"open"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"shopping"}}}]}}},{"M":{"name":{"S":"Clean up finances"},"id":{"S":"c8798cd5-0006-2ffa-aaa1-e80017ff9c26"},"state":{"S":"completed"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"adulting"}}}]}}},{"M":{"name":{"S":"Write Emily a love letter"},"id":{"S":"dfe7c3af-8088-de14-7b38-82a994e82e1c"},"state":{"S":"open"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"adulting"}}}]}}},{"M":{"name":{"S":"Get a bike lock"},"id":{"S":"869efacb-8e4f-a38b-668c-122a3ac65c31"},"state":{"S":"completed"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"shopping"}}}]}}},{"M":{"name":{"S":"pay ticket"},"id":{"S":"ecdaae1d-19c6-2a72-7518-57104d78b78e"},"state":{"S":"completed"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"adulting"}}}]}}},{"M":{"name":{"S":"Stop paying for gas at Eliot "},"id":{"S":"376654e2-bfc6-ea21-c463-9dffee854bf3"},"state":{"S":"open"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"adulting"}}}]}}},{"M":{"name":{"S":"Get mail keys"},"id":{"S":"742996b9-e9b8-26ed-fbe4-bcfc6b0d69e2"},"state":{"S":"open"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"adulting"}}}]}}},{"M":{"name":{"S":"father\'s day gift"},"id":{"S":"c2982984-29d4-1382-3fea-69c02eba893e"},"state":{"S":"open"},"tags":{"L":[{"M":{"type":{"S":"context"},"value":{"S":"shopping"}}},{"M":{"type":{"S":"context"},"value":{"S":"adulting"}}}]}}},{"M":{"name":{"S":"Look at adoption"},"id":{"S":"c58a17b2-023b-a3e3-a3c8-d3ec2bd0cbd7"},"state":{"S":"open"},"tags":{"L":[]}}},{"M":{"name":{"S":"Look at pet insurance "},"id":{"S":"1e17ee30-5fe0-e027-c3cb-e26261661241"},"state":{"S":"open"},"tags":{"L":[]}}}]},"views":{"L":[{"M":{"filter":{"S":"adulting"},"name":{"S":"adulting"}}},{"M":{"filter":{"S":"shopping"},"name":{"S":"shopping"}}}]},"username":{"S":"tcreeds"},"password":{"S":"$2a$10$IpHasQ3eokHAM.hTl7rPW.PMHPrA4Bp9prZ5zqUg8qFVgFgJgqlCm"}}}')))
  
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
    return view
  })
  return {
    tasks: tasks
  }
}

function processData(data){
  console.dir(toReadableJson(data), {depth:10})
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  };

  callback(null, response);
}
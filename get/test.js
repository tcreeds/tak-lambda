let { handler } = require('./app.js')

let testData = { 
    queryStringParameters: {
        username: 'bonkers' 
    }
}

handler(testData, {}, (sumtin, res) => {
    console.log(res)
})
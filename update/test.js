let { handler } = require('./app.js')

handler({ username: 'bonkers' }, {}, (sumtin, res) => {
    console.log(res)
})
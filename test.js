let { handler } = require('./app.js')

handler({ username: 'tcreeds' }, {}, (sumtin, res) => {
    console.log(res)
})
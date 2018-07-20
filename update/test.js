let { handler } = require('./app.js')

let testData = {
    body: JSON.stringify({
        username: 'bonkers',
        tasks: [
            {
                id: "askdjfbajhskbdf",
                name: "test",
                state: "completed",
                tags: []
            }
        ],
        views: []
    })
}

handler(estData, {}, (sumtin, res) => {
    console.log(res)
})
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    express=res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

function test () {
    return ("Hello World!")
}
module.exports = test;
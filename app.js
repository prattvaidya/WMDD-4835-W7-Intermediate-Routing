const express = require('express')
const app = express()
const {indexRouter} = require(__dirname + '/routes/index.js')

// Intermediate routing
// Create a basic API for numbers and letters
// GET 'api/numbers/random-integer'
// GET 'api/letters/random-letter'

app.use('/api', indexRouter)

const server = app.listen(8080, () => {
    console.log('listening')
})
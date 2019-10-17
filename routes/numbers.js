// routes/numbers.js will contain all routes that are related to serving number data
const express = require('express')
const router = express.Router()

// GET '/api/numbers/random-integer'
router.get('/random-integer', (req, res) => {
    res.send('' + Math.round(Math.random()*10))
})

// GET '/api/numbers/random-float'
router.get('/random-float', (req, res) => {
    res.send('' + Math.random()*10)
})

exports.numberRouter = router
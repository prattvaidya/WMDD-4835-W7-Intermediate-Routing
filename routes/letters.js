// routes/letters.js will contain all routes that are related to serving letter data
const express = require('express')
const router = express.Router()

// GET '/api/letters/random'
router.get('/random', (req, res) => {
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    res.send(letters[Math.round(Math.random()*(letters.length-1))])
})

// GET '/api/letters/random-vowel'
router.get('/random-vowel', (req, res) => {
    let letters = 'aeiou'
    //res.send('' + Math.round(Math.random()*(letters.length-1)))
    res.send(letters[Math.round(Math.random()*(letters.length-1))])
})

exports.letterRouter = router
const {numberRouter} = require('./numbers.js')
const {letterRouter} = require('./letters.js')

const express = require('express')
const router = express.Router()

// Here, we're combining the various routers
router.use('/numbers', numberRouter)
router.use('/letters', letterRouter)

exports.indexRouter = router;
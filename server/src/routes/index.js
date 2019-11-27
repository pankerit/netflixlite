const router = require('express').Router()
const apiController = require('../controller')


router.get('/get-home', apiController.getHome)

module.exports = router
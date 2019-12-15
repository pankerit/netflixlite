const router = require('express').Router()
const apiController = require('../controller')


router.get('/get-home', apiController.getHome)
router.get('/search', apiController.search)

module.exports = router
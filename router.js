const Router = require('express')
const PostController = require('./PostController')
const router = new Router()

router.post('/payment', PostController.create)


module.exports = router
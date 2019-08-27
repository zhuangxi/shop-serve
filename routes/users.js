const router = require('koa-router')()
const user = require('../controller/userController')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/:id', user.getUserById)

module.exports = router

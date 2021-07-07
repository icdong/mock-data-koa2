/*
 * @Description: demo
 * @Author: Daito Chai
 * @Date: 2021-07-07 23:21:21
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-07-08 00:03:56
 */
const router = require('koa-router')()

// router.prefix('/users')

router.get('/getData', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

module.exports = router

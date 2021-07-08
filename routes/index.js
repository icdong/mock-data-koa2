/*
 * @Description: 注册路由
 * @Author: Daito Chai
 * @Date: 2021-07-08 08:43:07
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-07-08 08:53:13
 */
const router = require('koa-router')()
const demo = require('./demo')

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

router.get('/getDemo', demo.demo)

module.exports = router

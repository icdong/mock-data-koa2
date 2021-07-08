/*
 * @Description: 路由demo
 * @Author: Daito Chai
 * @Date: 2021-07-07 23:21:21
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-07-08 09:18:26
 */
const router = require('koa-router')()
const demoData = require('../data/demo')

router.get('/getDemo', async ctx => {
    ctx.body = demoData.data
})

module.exports = router
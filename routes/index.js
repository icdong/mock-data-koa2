/*
 * @Description: 主路由
 * @Author: Daito Chai
 * @Date: 2021-07-08 08:43:07
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-07-10 10:39:45
 */
const router = require('koa-router')()

const DEMO = require('../controllers/demo')
const UPLOAD = require('../controllers/upload')

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

router.get('/getDemo', DEMO.getDemoData)

// 上传资料图片
router.post('/upload', UPLOAD.upload, UPLOAD.uploadFun)

module.exports = router
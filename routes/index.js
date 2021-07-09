/*
 * @Description: 主路由
 * @Author: Daito Chai
 * @Date: 2021-07-08 08:43:07
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-07-09 08:42:35
 */
const router = require('koa-router')()

const upload = require('./upload')

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

// 上传资料图片
router.post('/upload', upload.single('file'), async ctx => {
    ctx.body = {
        file: ctx.req.file,
        code: 1000,
        desc: 'success'
    }
})

module.exports = router
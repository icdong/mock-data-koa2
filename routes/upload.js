/*
 * @Description: 上传图片接口demo
 * @Author: Daito Chai
 * @Date: 2021-07-08 23:01:10
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-07-08 23:05:24
 */
const multer = require('koa-multer')
const router = require('koa-router')()

let storage = multer.diskStorage({
    //文件保存路径 这个路由是以项目文件夹 也就是和入口文件（如app.js同一个层级的）
    destination: function (req, file, cb) {
        cb(null, 'images/')
    },
    //修改文件名称
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

router.post('/upload', multer({ storage }).single('file'), async ctx => {
    console.log(ctx.req.file)

    ctx.body = {
        file: ctx.req.file,
        code: 1000,
        desc: 'success'
    }
})

module.exports = router
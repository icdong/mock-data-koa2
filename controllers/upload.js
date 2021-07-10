/*
 * @Description: 上传图片验证（成功会保存到本地 images 文件夹）
 * @Author: Daito Chai
 * @Date: 2021-07-08 23:01:10
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-07-10 10:38:43
 */
const multer = require('koa-multer')

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

let upload = multer({ storage }).single('file')

const uploadFun = ctx => {
    ctx.body = {
        file: ctx.req.file,
        code: 1000,
        desc: 'success'
    }
}

module.exports = {
    upload, uploadFun
}
/*
 * @Description: demo
 * @Author: Daito Chai
 * @Date: 2021-07-07 23:21:21
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-07-08 08:52:23
 */
const demo = require('../data/demo')

const demo = async ctx => {
    ctx.body = demo.DATA
}
module.exports = {
    demo
}

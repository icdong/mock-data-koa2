/*
 * @Description: 模拟获取数据库数据
 * @Author: Daito Chai
 * @Date: 2021-07-09 23:38:24
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-07-09 23:50:38
 */
const data = require('../dataBase/demo')

const getDemoData = ctx => {
    ctx.body = data
}

module.exports = {
    getDemoData,
}
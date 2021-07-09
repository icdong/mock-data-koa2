/*
 * @Description: 
 * @Author: Daito Chai
 * @Date: 2021-07-08 08:43:07
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-07-09 23:48:40
 */
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const upload = require('./routes/upload')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
    extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

// 注册routes
app.use(index.routes(), index.allowedMethods())
app.use(upload.routes(), upload.allowedMethods())

module.exports = app

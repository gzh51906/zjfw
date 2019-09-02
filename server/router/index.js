const express = require('express');
const Router = express.Router();

//引用路由
const goodsRouter = require('./goods');
const userRouter = require('./user');

//利用中间件bodyparse格式化请求参数
Router.use(express.json(), express.urlencoded({
    extended: false
}))

Router.use('/goods', goodsRouter);
Router.use('/user', userRouter);


module.exports = Router;
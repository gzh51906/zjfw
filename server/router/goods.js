const express = require('express');
const Router = express.Router();

// 链接数据库
//引记来
// const mysql = require('../db/mysql');
const mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'h51905', //数据库名字
    multipleStatements: true, //s是否可以使用多个连接池
});
// pool.query('select * from student', function (error, rows) {
//     // console.log(rows);
// });

// 链接数据库
//商品的          增
Router.post('/',(req, res) => {
    // res.send('增加商品');
    let {
        price,
        num
    } = req.body;
    // 数据库操作    bug 解决操作 把数据库主键取消就可以
              //insert into list1(gid,price,num,title,regular,type) values('51','100', '100', '地方','得到','www我');
    pool.query(`insert into list1 (price,num) values('${price}','${num}')`, function (error, rows) {
        // 数据库操作
        console.log(`insert into list1 (price,num) values('${price}','${num}')`);
        console.log('增加商品');
        res.send(rows);
    });
});

//这里使用了原型链   删
Router.route('/:gid')
    .delete((req, res) => {
        res.send('删除商品');
        let {
            gid
        } = req.params;
        // 数据库操作
        pool.query(`delete from list1 where gid=${gid}`, function (error, rows) {
            // 数据库操作   
            console.log('删除商品');
            res.send(rows);
        });
    })
    //商品的     改
    .patch((req, res) => {
        let {
            gid
        } = req.params; //获取id
        //获取商品参数
        let {
            price
        } = req.body; //postman里面  字符串最好加上引号
        pool.query(`update list1 set price = ${price} where gid=${gid}`, function (error, rows) {
            console.log('修改商品');
            // console.log(`update  list1 set price = ${price} where gid=${gid}`);
            res.send(rows); //返回前端
        });
    })
    //商品的     查
    .get((req, res) => {
        // res.send('查找商品');   把·i改为gid由于我个人是使用的gid 不是id
        let {
            gid
        } = req.params;
        pool.query(`select * from list1 where gid=${gid}`, function (error, rows) {
            res.send(rows); //返回前端
        });



    });

//商品的增删改查

module.exports = Router;
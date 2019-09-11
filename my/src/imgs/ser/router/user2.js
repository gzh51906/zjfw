const express = require('express');

const Router = express.Router();

const {insert,remove,find} = require('../db/mongo');
const {formatData,token} = require('../utils')

//后台用户注册
Router.post('/reg',async (req,res)=>{
    let {username,password,gender,profession,address} = req.body;
    let data
    try{
        insert('user2',{username,password,gender,profession,address});//{username,password,age,gender}
        res.send(formatData())
    }catch(err){
        res.send(formatData({code:0}))
    }
})

// 验证用户名是否存在
Router.get('/check',async (req,res)=>{
    let {username} = req.query;
    let data
    try{
        data = await find('user2',{username});
        data = data[0];
        if(data){
            res.send(formatData({code:0}))
        }else{
            res.send(formatData())
        }
    }catch(err){
        res.send(formatData({code:0}))
    }
})

Router.post('/login',async (req,res)=>{
    let {username,password} = req.body;
    let data
    try{
        data = await find('user2',{username,password});
        
        data = data[0]

        // 生成token，并返回前端
        let authorization = token.create(username);
        if(data){
            res.send(formatData({data:{_id:data._id,username:data.username,authorization}}))
        }else{
            res.send(formatData({code:0}))
        }
    }catch(err){
        res.send(formatData({code:0}))
    }
})

// 删
Router.delete('/:id',(req,res)=>{
    let {id} = req.params;
    let data
    try{
        remove('user2',{_id:id})
        res.send(formatData())
    }catch(err){
        res.send(formatData({code:0}))
    }
})


// 查（获取所有用户）：get /user2 后台管理用户名单
Router.get('/',async (req,res)=>{
    let {skip,limit,sort} = req.query;
    let data = await find('user2',{},{skip,limit,sort});
    res.send(formatData({data}))
})
Router.get('/:id',async (req,res)=>{
    let {id} = req.params;
    let data = await find('user2',{_id:id});
    res.send(formatData({data}))
})

module.exports = Router;
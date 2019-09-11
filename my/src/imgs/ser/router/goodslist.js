const express = require('express');

const router = express.Router();
const {insert,find} = require('../db/mongo');

const {formatData} = require("../utils");
//向网页爬取数据并插入到数据表。
// 爬虫
const request = require('request');
const cheerio = require('cheerio');
//获取内置模块
const path = require('path');
const fs = require('fs');
router.get('/spider',(req,res)=>{
   
    // 页面1
    // request(' http://search.zhaojiafang.com/?act=search&op=index&cate_id=1815', (error, response, body) => {
    //页面2
    request(' http://search.zhaojiafang.com/?act=search&op=index&cate_id=1815&page=2&per-page=48', (error, response, body) => {
        let $ = cheerio.load(body);
       //console.log(body);
        let goodslist = [];
        // $('#h-content .se-content-4-ul li').each((i, e)=>{
           $('.sl-gl-ul .sl-gl-li').each((i, e)=>{
            let $ele = $(e)
            let title = $ele.find('.sl-goodsinfo .sl-glname a').text();
            let subname =$ele.find('.sl-gl-store .sl-stname a').text();
            let imgurl = $ele.find('.gl-img a img').attr('src');
            let price = $ele.find('.sl-gl-div1 .c1').text();
            let surf = $ele.find('.sl-gl-store .fz12').text();            
          
            //网页中图片url去掉参数
            let url = imgurl.split("?")[0];
           // console.log(url);
             //获取文件名  获取带有拓展名（后缀名）的文件
            // let filename = path.basename(url);
            //爬取图片
            //request方法返回一个stream
            //下载
           // request(imgurl).pipe(fs.createWriteStream('./img2/'+filename));
            let goods = {
                title,
                subname,
                // imgurl:filename,
                imgurl:url,
                surf,
                price
            }
            try{
                // insert('goods',{title,subname, imgurl:'imgs/'+filename,surf,price,qty:20,id:i+48});
                insert('goodsitem',{title,subname, imgurl:url,surf,price,qty:20});
               // res.send(formatData())
            }catch(err){
                res.send(formatData({code:0}))
            }
            // console.log(goodslist);
            goodslist.push(goods)
            
         })    
        res.send(goodslist)
    });

})

//从数据表中增删改查

//查 查询所有数据
router.get("/getData",async(req,res)=>{
    let {skip,limit,sort} = req.query;
    let data = await find('goodsitem',{},{skip,limit,sort});
    res.send(formatData({data}))
})

// 通过id查询数据
// router.get("/getItem/:subname",async(req,res)=>{
//     let {subname} = req.params;
//       console.log(subname,"subname");
//     // let data = await find('goods',{_id:id});

//       let data = await find('goods',{subname:subname});
//       console.log(data);
//       res.send(formatData({data}));
// })

router.get("/getItem/:id",async(req,res)=>{
    let {id} = req.params;
      console.log(id,"id");
    // let data = await find('goods',{_id:id});
      let data = await find('goodsitem',{_id:id});
      console.log(data);
      res.send(formatData({data}));
})


//增
router.post("/addData",async(req,res)=>{
    let {title,subname, imgurl,surf,price} = req.body;
    let data
    try{
        insert('goodsitem',{title,subname, imgurl,surf,price,qty:20});//{username,password,age,gender}
        res.send(formatData())
    }catch(err){
        res.send(formatData({code:0}))
    }
})

//
module.exports = router;
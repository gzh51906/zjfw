<template>
    <div class="detail">
        <div class="header">
          <i class="el-icon-arrow-left" @click="back"></i> 
          <span>详情</span>
          <i class="el-icon-more i2"></i> 
        </div>
        <div class="main">
            <p>
             <img :src="gooditem.goods_image_url">
            </p>
            <p>
                <a href="#">
                  <i class="el-icon-share"></i>
                  <span>一键转发</span>
                </a>
                 <a href="#">
                  <i class="el-icon-star-on"></i>
                  <span>收藏</span>
                </a>
                <a href="#">
                  <i class="el-icon-s-comment"></i>
                  <span>联系商家</span>
                </a>
                <a href="#">
                  <i class="el-icon-sort-up"></i>
                  <span>传淘章</span>
                </a>
                <a href="#">
                  <i class="el-icon-sort-down"></i>
                  <span>下载图片</span>
                </a>
            </p>
            <p>{{gooditem.goods_name}}</p>
            <p class="shop">{{gooditem.goods_subname}}</p>
            <p class="price"><span>{{gooditem.goods_price}}</span><del>&yen;240.00</del></p>
            <!-- <h4><span>规格:</span></h4>
            <h4><span>参数:</span></h4> -->
            <!-- <h4><span>服务</span> 
              <i>交易通知</i>
              <i>价格与发票</i>
              <i>48小时发货</i>
              <i>30天无理由退换</i>
            </h4> -->
        </div>
        <div class="bottom">
                <a href="#">
                  <i class="el-icon-share"></i>
                  <span>一键转发</span>
                </a>
                 <a href="#">
                  <i class="el-icon-star-on"></i>
                  <span>收藏</span>
                </a>
                <a href="#">
                  <i class="el-icon-s-comment"></i>
                  <span>联系商家</span>
                </a> 
                <span @click="joinCart">加入购物车</span>
                <span @click="goto">立即购买</span>    
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
          gooditem:{}
        }
    },
   async created(){
     //获取商品id及数据
       let id = this.$route.params.id;
       let{data:{datas}}= await this.$axios.get("http://api.zhaojiafang.com/v1/goods/goodslist?AppVersion=3.3&Format=json&SystemName=H5&brandid=&curpage=1&gc_id=1815&key=&keyword=&maxprice=&minprice=&order=0&page=10&storeid=1&timestamp=1567606495567&Sign=fe822b0a744463f5f8180146f0792ab2")      
     //通过id获取数据    
       datas.forEach((item)=>{       
           if((item.goods_id + 0) == id){
                this.gooditem = item;     
           }
      })
    },
    methods:{ 
      //加入购物车
      joinCart(){
        //获取当前商品id
        let id = this.$route.params.id; 
        //创建新对象并push存到store
        var item = {};
        item.qty = 1;
        item.checked = true;
        item.goods_id = this.gooditem.goods_id;
        item.goods_image_url = this.gooditem.goods_image_url;
        item.goods_name = this.gooditem.goods_name;
        item.goods_price = this.gooditem.goods_price.slice(1);
       
        let{cartlist} = this.$store.state.cart
        
         let hasItem = cartlist.filter(function(item){
            return (item.goods_id +0)  === id
        })[0] 

        //存在
        if(hasItem){
           this.$store.commit('changeQty',{id:id,qty:hasItem.qty+1})
        }else{
           this.$store.commit('addItem',item)
        }
      },
      goto(){
         let id = this.$route.params.id;      
         this.$router.push({name:"cart",params:{id}});
      },
      back(){
        this.$router.push({name:"goods"});
      }
    //   //记录上一个路由的信息
    //    beforeRouteUpdate(to,from,next){
    //     // 如果设置了路由守卫，则必须显性调用next()，否则路由无法继续
    //     console.log(to);
    //     next();
    // }
    }
}
</script>
<style>
.detail{width:100%;display:flex;flex-direction:column;padding:5% 0 10%;}
.detail .header{
    width:100%;height:10%;background:white;
    text-align:center;
    position:fixed;
    top:0;left:0;
    padding:20px 5px 5px 5px ;
}
.detail .header span{display:inline-block; font-size: 20px;}
.detail .header i{font-size: 24px;}
.detail .header:nth-child(1) i{float:left;padding-top:2px;} 
.detail .header .i2{position:absolute;right:5%;padding-top:2px;}
.detail .main{padding-right:1%; display:flex;flex:1;width:100%; flex-direction:column;background:white;padding-top: 10%;}
#app .detail .main p{display:flex; flex-wrap:nowrap; width:100%; 
 flex-direction:row;padding:10px 5px;}
.detail .main p:nth-child(1){display:none;justify-content:center;} 
.detail .main p:nth-child(1) img{width:350px;height:300px;}
.detail .main p a{ color:#333;text-decoration:none;flex:18%;text-align:center;font-size:14px;}
.detail .main p a i{display:block;width:100%;font-size:20px;}
.detail .main p:nth-child(3){padding:5px;font-size:18px;}
.detail .main .shop{padding:5px;}
.detail .main .price span{font-size:18px;color:red;}
.detail .main .price del{margin-left:30px;font-size:14px;color:#666;}
.detail .main h4 {padding:5px;}
.detail .bottom{ padding-top:20px;padding-bottom:100px;display:flex; justify-content:space-between;width:100%;height:15%;background:white;padding-right:5px;}
.detail .bottom a{color:#333;width:15%;text-decoration:none;text-align:center;}
.detail .bottom a span{font-size:12px;}
.detail .bottom a i{display:block;width:100%;text-align:center;font-size:18px;}
.detail .bottom span{color:white;width:25%; font-size:16px;text-align:center;
  padding-top:5px;background-color: #fc3b72;}
/* .detail .bottom span:nth-child(2){background-color: #ff2d52;} */
.detail .bottom a span{background:none;color:#333;}
</style>
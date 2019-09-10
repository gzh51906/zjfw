<template>
  <div id="home">
    <div class="home-top">
      <el-row :gutter="24">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <i class="el-icon-camera" style="color:#ffff;font-size: 20px;"></i>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="搜索商品，商家" style="text-align:center;border: none;"></el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <i class="el-icon-phone" style="color:#ffff;font-size:20px;"></i>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="divmain">
      <el-row :gutter="24">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-tag type="success" size="mini" style="color:#f16278;">四件套</el-tag>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-tag type="success" size="mini" style="color:#f16278;">水晶绒</el-tag>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-tag type="success" size="mini" style="color:#f16278;">法莱绒</el-tag>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-tag type="success" size="mini" style="color:#f16278;">床垫</el-tag>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-tag type="success" size="mini" style="color:#f16278;">枕芯</el-tag>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-tag type="success" size="mini" style="color:#f16278;">毛毯</el-tag>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-tag type="success" size="mini" style="color:#f16278;">羽绒被</el-tag>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="lunbo" style="line-height: 100px;">
      <el-carousel :interval="2000">
        <el-carousel-item v-for="item in Recommend" :key="item._id">
          <img :src="item.imgurl"   @click="goto(item._id)" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-div">
      <ul class="home-icon">
        <li>
          <img src="../assets/icon_nav1_class.png" alt />
          <p>分类</p>
        </li>
        <li>
          <img src="../assets/icon_nav1_mianliao.png" alt />
          <p>面料商城</p>
        </li>
        <li>
          <img src="../assets/icon_nav1_maojin.png" alt />
          <p>高阳毛巾</p>
        </li>
        <li>
          <img src="../assets/icon_nav1_fuwu.png" alt />
          <p>服务市场</p>
        </li>
        <li>
          <img src="../assets/icon_nav_xiangji.png" alt />
          <p>以图搜款</p>
        </li>
        <li>
          <img src="../assets/icon_nav1_newgoods.png" alt />
          <p>今日新品</p>
        </li>
        <li>
          <img src="../assets/icon_nav1_pingpaiying.png" alt />
          <p>品牌营</p>
        </li>
        <li>
          <img src="../assets/icon_nav1_collection.png" alt />
          <p>我的关注</p>
        </li>
        <li>
          <img src="../assets/icon_nav1_news.png" alt />
          <p>消息</p>
        </li>
        <li>
          <img src="../assets/icon_nav1_newcomer.png" alt />
          <p>新进商家</p>
        </li>
      </ul>
    </div>
    <!-- <div class="deng">
      <el-carousel :interval="2000" :autoplay="true" height="40px" direction="vertical">
        <el-carousel-item v-for="(img,index) in deng" :key="index">
          <img v-bind:src="img.url" />
        </el-carousel-item>
      </el-carousel>
    </div> -->
    <div class="ho-div3" style="background-color: #ffff;">
      <el-carousel :interval="2000" type="card" :autoplay="false">
        <el-carousel-item v-for="item in recommend" :key="item._id">
          <img :src="item.imgurl" @click="goto(item._id)" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="fa-special1" style="background-color: #fff;">
      <a href="###">
        <img src="../assets/s0_06203898527226713.png" alt />
      </a>
    </div>
    <div class="fa-special1">
      <a href="###">
        <img src="../assets/s0_06174470476349049.png" alt />
      </a>
    </div>
    <div class="fa-special1">
      <a href="###">
        <img src="../assets/s0_06119521159522664.png" alt />
      </a>
    </div>
    <div class="fa-special1">
      <a href="###">
        <img src="../assets/s0_06198856320778651.png" alt />
      </a>
    </div>
    <div class="fa-special3">
      <div class="s1">
        <img src="../assets/s0_06204131687345577.jpg" alt />
      </div>
      <div class="s1">
        <div class="s2">
          <img src="../assets/s0_06133852573245692.jpg" alt />
        </div>
        <div class="s2">
          <img src="../assets/s0_06165209200226224.jpg" alt />
        </div>
      </div>
    </div>
    <div class="fa">
      <div class="l">
        <img src="../assets/s0_06187436463891760.jpg" alt />
      </div>
      <div class="l">
        <img src="../assets/s0_06183395399481848.jpg" alt />
      </div>
      <div class="l">
        <img src="../assets/s0_06198859406405080.png" alt />
      </div>
    </div>
    <div class="fa2" style="width:100%; background: #fff;">
      <img src="../assets/s0_06149762158654972.png" style="width:100%;" alt />
    </div>
    <div class="fa3">
      <div class="fa4">
        <img src="../assets/s0_06190948848782392.jpg" style="width:100%;" alt />
        <img src="../assets/s0_06208170723723151.jpg" style="width:100%;" alt />
      </div>
      <div class="fa4">
        <img src="../assets/s0_06208164057844217.jpg" style="width:100%;" alt />
        <img src="../assets/s0_06207523104847020.jpg" style="width:100%;" alt />
      </div>
    </div>
    <div class="list">
      <!-- <el-row :gutter="20" style="padding: 5px;background: #ffffff;text-align: center;font-size: 12px;margin-bottom: 30px;"> 
              <el-col  v-for="item in goodslist" :key="item.goods_id"> 
                  <el-col style="height: 280px;" :span="12"  v-for="item in goodslist" :key="item.goods_id">  
          <img style="width: 100%;" :src="item.goods_image_url" @click="goto('goods',item.goods_id)">
          <h4 style="border: height: 100px; 1px solid #fff;overflow: hidden;">{{item.goods_name}}</h4> 
          <p class="title" style="margin-bottom: -15px;" >{{item.subtitle}}</p>
          <p class="price"  style="margin-bottom: -15px;" > {{item.goods_price}} </p>
       </el-col>
        </el-col>
      </el-row>-->

      <!-- 服务器代理 -->
      <!-- <div class="goodsItem">
        <div>
          <div v-for="item in goodslist" :key="item.goods_id">
            <div
              v-for="item in goodslist"
              :key="item.goods_id"
              class="item"
              @click="goto(item.goods_id)"
            >
              <img :src="item.goods_image_url" />
              <p class="goodname">{{item.goods_name}}</p>
              <p class="subname">{{item.goods_subname}}</p>
              <p>
                <span>鲜品</span>
                <span>代发</span>
              </p>
              <p>
                {{item.goods_price}}
                <i>{{item.goods_click}}人浏览</i>
              </p>
            </div>
          </div>
        </div>
      </div> -->
      <!-- 数据库请求 -->
       <!-- 数据库请求渲染 -->
       <div class="goodsItem">     
          <div
              v-for="item in goodslist"   :key="item._id"
            class="item"    @click="goto(item._id)" >
            <!-- <img :src= require ("../"+ item.imgurl  )/> -->
             <img :src="item.imgurl" />
            <p class="goodname">{{item.title}}</p>
            <p class="subname">{{item.subname}}</p>
            <p>
              <span>鲜品</span>
              <span>代发</span>
            </p>
            <p>
              {{item.price}}
              <i>{{item.surf}}人浏览</i>
            </p>
          </div> 
      </div>

    </div>
  </div>
</template>
<script>
import Vue from "vue";
// import axios from "axios";
import { Carousel, CarouselItem } from "element-ui";
Vue.use(Carousel); //
Vue.use(CarouselItem);
export default {
  // methods:{

  // },
  // created(){
  //    axios.get('http://api.zhaojiafang.com/v1/index/likegoods?AppVersion=3.3&Format=json&SystemName=H5&curpage=1&key=&keyword=%E5%85%A8%E9%83%A8&page=10&storeid=1&timestamp=1567581780213&Sign=ab1e440ab1ee945c860d81673d3fad85' ).then(({data})=>{
  //  this.recommend = data.datas.item_list.slice(0,4)
  //  this.goodslist = data.datas.item_list

  //    })
   //服务器代理
  async created() {
  //   let {
  //     data: { datas }
  //   } = await this.$axios.get(
  //     "http://api.zhaojiafang.com/v1/goods/goodslist?AppVersion=3.3&Format=json&SystemName=H5&brandid=&curpage=1&gc_id=1815&key=&keyword=&maxprice=&minprice=&order=0&page=10&storeid=1&timestamp=1567606495567&Sign=fe822b0a744463f5f8180146f0792ab2"
  //   );
  //    this.goodslist = datas;
  //   this.recommend = datas;
   
  // },
  //数据库请求
        let  {data: {data }} = await this.$axios.get(
              "http://localhost:2010/goodslist/getData");
                      
               this.goodslist = data;
               this.Recommend = data.slice(4,8);
               this.recommend = data.slice(0,4);
              //  console.log(this.Recommend);
  },
   
  // },
  data() {
    return {
      Recommend:[], //轮播图1
      recommend: [], //轮播图2
      goodslist: [],
      input: "",
      // 数组名字 数组里面有对象
      deng: [
        {
          url: require("../assets/3015_06199610601465090.jpg")
        }, //require 是动态加载时引入的  import 是动态引入
        {
          url: require("../assets/3421_06191245644500900.jpg")
        },
        {
          url: require("../assets/4155_06207607518951034.jpg")
        },
        {
          url: require("../assets/4393_06149579594190583.jpg")
        }, //require 是动态加载时引入的  import 是动态引入
        {
          url: require("../assets/4793_06193741930757417.jpg")
        },
        {
          url: require("../assets/6291_06198044300403408.jpg")
        }
      ]
    };
  },
  methods: {
    goto(id) {
      this.$router.push({ name: "detail", params: { id } });
    }
  }
};
</script>
<style>
body,html{
  overflow-x: auto; 
}
#home {
  background: #f16278;
  /* over100pxen; */
}

#home .el-col {
  margin-top: 10px;
  border-radius: 4px;
}

#home .bg-purple-dark {
  background: #ff2445;
}
.el-carousel__indicator--horizontal{
  padding: 10px 3px;
}
#home .bg-purple {
  background: #f16278;
}

#home .bg-purple-light {
  background: #ff2445;
}

#home .grid-content {
  border-radius: 4px;
  min-height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#home .row-bg {
  padding: 10px 0;
  background: #ff2445;
}

#home .el-input__inner {
  background: linear-gradient(90deg, #ffdee1, #ff95a5);
  /* position: relative; */
}

#home .el-icon-search {
  /* position: absolute; */
  left: 19%;
  font-size: 15px;
  color: #ffffff;
}

/* lubbo */
#home .el-carousel__container {
  /* position: relative; */
  height: 168px;
}

#home .el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

#home .el-carousel__item {
  background-color: #f3f5f7;
  text-align: center;
}

#home .el-carousel__item img {
  width: 100%;
  height: 100%;
}
img{
  vertical-align: middle
}
#home .home-div {
  width: 100%;
  background: #ffffff;
  display: flex;
  align-items: center;
}

#home .home-div .home-icon {
  width: 100%;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

#home .home-div .home-icon li {
  display: flex;
  list-style: none;
  flex-basis: 20%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#home .home-div .home-icon img {
  align-self: center;
  width: 1.333333rem;
  height: 1.333333rem;
}

#home .home-div .home-icon p {
  align-self: center;
  font-size: 12px;
}

/* 灯 */
#home .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

#home .el-carousel__item:nth-child(2n) {
  /* background-color: #99a9bf; */
  background: rgb(194, 165, 165);
}

#home .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
#home .fa-special1 img {
  width: 100%;
}
#home .fa-special3 {
  width: 100%;
  display: flex;
  background: #fff;
}
.fa-special3 img {
  width: 100%;
}
.fa-special3 .s1 {
  flex-basis: 48%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
.fa-special3 .s2 {
  flex-basis: 48%;
}
#home .fa {
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: #fff;
}
#home .fa .l {
  flex-basis: 30%;
}

#home .fa .l img {
  width: 100%;
}
#home .fa3 {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#home .fa3 .fa4 {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}

#home .goodsItem {
  width: 100%;
  padding: 1%;
  padding-top: 18%;
  padding-bottom: 300px;
}
#home .goodsItem .item {
  width: 48%;
  float: left;
  margin-top: 10px;
  margin-right: 2%;
  padding-bottom: 20px;
}
#home .goodsItem .item img {
  width: 100%;
}
#home .goodsItem .item p {
  padding: 2px 5px;
  font-size: 14px;
}
#home .goodsItem .item .goodname {
  height: 62px;
  overflow: hidden;
}
#home .goodsItem .item .subname {
  height: 22px;
  overflow: hidden;
}
#home .goodsItem .item p:nth-child(3) {
  font-size: 12px;
  color: #666;
}
#home .goodsItem .item p:nth-child(4) span {
  font-size: 12px;
  color: pink;
  border-radius: 5px;
  margin-right: 4px;
  padding: 1px 2px;
  border: 1px solid pink;
}
#home .goodsItem .item p:nth-child(5) {
  font-size: 14px;
  color: red;
}
#home .goodsItem .item p:nth-child(5) i {
  font-size: 12px;
  color: #666;
}
</style>
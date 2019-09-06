<template>
  <div class="goods">
    <div class="head">
      <i class="el-icon-arrow-left" @click="back"></i>
      <p>
        <el-input class="search" suffix-icon="el-icon-search" placeholder="请输入商品"></el-input>
      </p>
      <span class="el-icon-menu"></span>
      <li>
        <span>
          筛选
          <i class="el-icon-s-open"></i>
        </span>
        <h4>
          <span>综合</span>
          <span>销售</span>
          <span>新品</span>
          <span>价格</span>
          <span>
            <i class="el-icon-caret-top"></i>
            <i class="el-icon-caret-bottom"></i>
          </span>
        </h4>
      </li>
    </div>
    <!-- 商品列表 -->
    <!-- <div class="goodsItem">
            <div v-for="item in data" :key="item.goods_id"  class="item" @click="goto">
                <img :src= "item.goods_image_url" >
                 <p class="goodname">{{item.goods_name}}</p>
                 <p class="subname">{{item.goods_subname}}</p>
                 <p><span>鲜品</span><span>代发</span></p>
                 <p>&yen;{{item.goods_price}}<i>{{item.goods_click}}人浏览</i></p>
             </div>
    </div>-->

    <div class="goodsItem">
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
            <!-- <p class="subname">{{item.subtitle}}</p> -->
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodslist: [],
      data: {}
    };
  },
  // async created(){
  //     console.log(this.$route.params);
  //     let{data:{datas}}= await this.$axios.get("http://api.zhaojiafang.com/v1/goods/goodslist?AppVersion=3.3&Format=json&SystemName=H5&brandid=&curpage=1&gc_id=1815&key=&keyword=&maxprice=&minprice=&order=0&page=10&storeid=1&timestamp=1567606495567&Sign=fe822b0a744463f5f8180146f0792ab2")
  //     this.data = datas;
  //     console.log(datas);
  // },

  //链接1
  //   let{data:{datas}} = await this.$axios.get('http://api.zhaojiafang.com/v1/index/likegoods?AppVersion=3.3&Format=json&SystemName=H5&curpage=1&key=&keyword=%E5%85%A8%E9%83%A8&page=10&storeid=1&timestamp=1567581780213&Sign=ab1e440ab1ee945c860d81673d3fad85' );
  //   this.goodslist = datas.item_list;
  //链接2
  async created() {
    let {
      data: { datas }
    } = await this.$axios.get(
      "http://api.zhaojiafang.com/v1/goods/goodslist?AppVersion=3.3&Format=json&SystemName=H5&brandid=&curpage=1&gc_id=1815&key=&keyword=&maxprice=&minprice=&order=0&page=10&storeid=1&timestamp=1567606495567&Sign=fe822b0a744463f5f8180146f0792ab2"
    );
    this.goodslist = datas;
  },

  methods: {
    goto(id) {
      this.$router.push({ name: "detail", params: { id } });
    },
    back() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style>
.goods {
  padding-bottom: 15%;
  height: 100%;
}
.goods li {
  list-style: none;
}
.goods .head {
  width: 100%;
  padding: 10px 5px 0;
  position: fixed;
  z-index: 3;
  text-align: left;
  background: #fff;
}
.goods .head p {
  width: 85%;
  display: inline-block;
  padding: 5px;
  border: 1px solid #666;
  border-radius: 15px;
  position: relative;
}
.el-input__icon {
  line-height: 28px;
}
#app .goods .head input {
  border: none;
  width: 100%;
  height: 20px;
  padding-left: 5px;
  border: none;
}
.goods .head p i {
  position: absolute;
  right: 5px;
}
.goods .head span {
  margin-left: 5px;
}
.goods .head li {
  height: 50px;
  line-height: 50px;
}
.goods .head li h4 {
  display: inline-block;
  float: right;
  font-weight: 500;
  padding-right: 10%;
}
.goods .head li h4 i {
  top: 0;
  right: 100%;
}
.goods .head li h4 i:nth-child(2) {
  bottom: 0;
}
.goodsItem {
  width: 100%;
  padding: 1%;
  padding-top: 18%;
  padding-bottom: 300px;
}
.goodsItem .item {
  width: 48%;
  float: left;
  margin-top: 10px;
  margin-right: 2%;
  padding-bottom: 20px;
}
.goodsItem .item img {
  width: 100%;
}
.goodsItem .item p {
  padding: 2px 5px;
  font-size: 14px;
}
.goodsItem .item .goodname {
  height: 62px;
  overflow: hidden;
}
.goodsItem .item .subname {
  height: 22px;
  overflow: hidden;
}
.goodsItem .item p:nth-child(3) {
  font-size: 12px;
  color: #666;
}
.goodsItem .item p:nth-child(4) span {
  font-size: 12px;
  color: pink;
  border-radius: 5px;
  margin-right: 4px;
  padding: 1px 2px;
  border: 1px solid pink;
}
.goodsItem .item p:nth-child(5) {
  font-size: 14px;
  color: red;
}
.goodsItem .item p:nth-child(5) i {
  font-size: 12px;
  color: #666;
}
</style>
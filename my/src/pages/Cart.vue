<template>
    <div class="cart">
        <h3 class="header">购物车</h3>
        <div class="main">
            <div class="goodItem" v-for="item in cartlist" :key="item.goods_id"> 
                <!-- <el-table-column  class="select"  type="selection" width="55"> </el-table-column>    -->
                <el-checkbox class="select" v-model="item.checked" @click.native="changeCheck(item.goods_id)"></el-checkbox>         
                 <img :src="item. goods_image_url"> 
                 <h3>                   
                     <p class="title">{{item.goods_name}}</p>
                     <p>&yen;<span class="price">{{item.goods_price}}</span> </p>
                    <el-input-number 
                       size="mini"
                       @change="changeQty($event,item.goods_id)"
                       v-model="item.qty"
                       :min="1" :max="100"
                       label="描述文字"></el-input-number>                
                 </h3>
                 <span>
                    <!-- <i class="el-icon-edit-outline"></i> -->
                    <i  @click="remove(item.goods_id)" class="el-icon-delete"></i> 
                 </span>            
            </div>                    
        </div>
        <div class="bottom">
             <!-- <el-table-column  class="select"  type="selection" width="55">全选</el-table-column> -->
             <!-- <h4><el-checkbox class="select" @click.native="allSelect" v-model="checked" >全选</el-checkbox></h4> -->
             <h4><input @click="allSelect" type="checkbox" v-model="checked" class="select" >全选</h4>
             <span>总计<b class="count">{{totalQty}}</b>件商品</span>
             <p>合计&yen;<span class="price">{{totalPrice}}</span></p>
             <h3 @click="check">结算</h3>
        </div>
    </div>
</template>
<script>
export default {
    data(){
      return{
          //全选框状态，默认全选
          checked:true
      }
    },
    computed: {
         cartlist(){
          return this.$store.state.cart.cartlist;
         },
         //商品总件数
         totalQty(){
           return this.$store.getters.totalQty;
         },
         //商品总价
         totalPrice(){
          return this.$store.getters.totalPrice.toFixed(2)
        }
    },
    created(){
        //console.log(this.$store.state.cart.cartlist)
       //获取商品路径
       // console.log(this.$route.params,"cart");
    },
    methods:{
       //修改商品选中状态
       changeCheck(id){
         this.$store.commit('changeCheck');
         
         //改变全选框状态
         //计算复选框的选中个数
         var num = 0;
         var cartlist =  this.$store.state.cart.cartlist; 
         var select = cartlist.every((item)=>{
             return  item.checked == true;
         })
        
         //有商品取消选中
         
        //  console.log(this.checked,"all");
       },
       //全选
       allSelect(){
         //每点击一次改变全选框状态
         this.checked = !this.checked;
         //批量控制每个商品选中状态
         this.$store.commit('allSelect',this.checked);
       },
       //删除
        remove(goods_id){
         this.$store.commit('removeItem',goods_id);
       },
       //修改商品数量
       changeQty(qty,id){
         this.$store.commit('changeQty',{qty,id})
       },
       check(){
          console.log(this.$store.state.cart.cartlist);
       },
        clear(){ 
          this.$store.state.cart.cartlist=[];
       }
    }
}
</script>
<style>
.cart{height:100%;width:100%;}
.cart .header{
    position:fixed;
    z-index:100;
    top:0;
    left:0;
    width:100%;height:80px;
    background:#FE385C;
    text-align:center;line-height:100px;
    color:white;}
.cart .main{
    padding-top:80px;
    padding-bottom:550px;
}
.cart .main .goodItem{
    /* height:170px; */
    background:white;
    padding:10px;
    width:100%;
    display:flex;
    justify-content:space-around;
    border-bottom:1px solid #ccc;
    align-items:center;
}

.cart .main .goodItem img{
     flex:2;
     width:100px;
     height:100px;
}
.cart .main .goodItem h3{
    flex:4;
    display:flex;
    flex-direction: column;
    padding-left:5px;
    height:150px;
    font-weight:500;
    font-style:normal;
    font-size:16px;
    justify-content:space-around;
}
.cart .main .goodItem h3 p:nth-child(2){
  color:red;
  font-weight:500;
}
.cart .main .goodItem>span{
    flex:0.5;
    height:100%;
    display:flex;
    flex-direction: column;
    /* justify-content:space-between; */
}
.cart .main .goodItem>span i{
    flex:1;
    margin-bottom:30px;
}

.cart .select{
    flex:1;
    color:#FE385C;
    margin-right:3px;
    /* font-size:12px; */
    }
.cart .bottom{
    background:#fff;
    position:fixed;
    display:flex;
    justify-content:space-between;
    width:100%;
    height:60px;
    line-height:60px;
    justify-items: center;
    left:0;
    padding-left:10px;
    bottom:60px;
    z-index:100;
}
.cart .bottom>span{
    flex:2;
    color:#666;
    font-size:14px;
}
.cart .bottom h4{
    flex:1;
    margin-right:3px;
    color:#333;
    width:60px;
    line-height:60px;}
.cart .bottom p{
    flex:2;
    font-size:16px;
}
.cart .bottom span>b{
   color:red;
   font-size:16px;
}
.cart .bottom .count{
    display:inline-block;
    text-align:center;
    width:25px;
    height: 20px;
}
.cart .bottom .price{
    display:inline-block;
    width:30ox;
}
.cart .bottom p span{
    color:red;
}
.cart .bottom h3{
    padding:0 20px;
    color:white;
    background:#FD3B70;
}
</style>
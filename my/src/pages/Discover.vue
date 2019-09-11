<template>
    <div class="discover">      
      <el-input class="search"    
          suffix-icon="el-icon-search"
          placeholder="请输入商品">
      </el-input> 
       <el-tabs type="border-card" tab-position="left"  @tab-click="curIndex" >
        <el-tab-pane v-for="(cat,index) in category " :key="index" :label="cat.gc_name" @click="curIndex" :index="index" >
          <ul v-for="(item,index2) in subCategory" :key="item.gc_name">
            <li >{{item.gc_name}}<i class="el-icon-arrow-right"></i></li>
            <p>
            <a href="#"  v-for="(tag,index3) in item.subclass" :key="tag.gc_id" @click="goto(tag.gc_id,index,index2,index3)">{{tag.gc_name}}</a>
            </p>
          </ul>
         
        </el-tab-pane>
          <!-- <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="任务补偿">任务补偿</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="任务补偿">任务补偿</el-tab-pane> -->
        </el-tabs>      
      
    </div>
</template>
<script>
export default {
     data(){
       return{
         category:[],
        // activeCatId:"",
         subCategory:{}
       };
     },
    async created(){
      let{data:{datas}}= await this.$axios.get("http://api.zhaojiafang.com/v1/goods/goodsclass?AppVersion=3.3&Format=json&SystemName=H5&deep=3&key=&storeid=1&timestamp=1567583620888&Sign=662fe69e4cb05244177441d21fe6c93a"
        )
        //将datas数据赋值到data属性下
        this.category = datas;
       // this.activCatId = 0;
        this.subCategory = datas[0].subclass;
        // console.log(this.subCategory);
       
      },
      methods:{
          curIndex(curindex){
           let index = curindex.index; 
          // this.activCatId = index;
           let subCategory = this.category[index].subclass;
           this.subCategory = subCategory;     
         },
        goto(id,index1,index2,index3){
            this.$router.push({name:"goods",params:{id}});
        }
      }  
   }
   
</script>
<style>

.discover{ background:#eee;padding-top:50px; padding-bottom:100px;}
#app .discover .search{
    position:fixed;
    width:100%;
    height:50px;
    top:0;
    left:0;
    z-index:100;
    padding-left:10%;
    padding-top:10px;
    background:white;
 }
 .discover .el-input__inner{
 height:30px;
 background:#eee;
 border-radius:20px;
 width:90%;
 position:relative;
 }
#app .discover .el-input__icon {
    position:absolute;
    top:0;
    right:50%;
    width:100px;
    }
.discover .el-tabs--border-card {
    margin-top:10px; 
    background: #eee;
    border: 1px solid #DCDFE6;
     -webkit-box-shadow: none;
    box-shadow:none ; 
}
.discover .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-left{
     border-left: 3px white solid;
}
.discover .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color:  #ff2d51;
    background-color: #eee;
    border-left: 3px solid #ff2d51; 
    background-color: #FFF;
    border-right-color: #DCDFE6;
    border-left-color: #DCDFE6;
}
.discover .el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
    color: #ff2d51;
    border-left:3px solid  #ff2d51;
}
#app .discover .el-tabs__content{padding:0;}
#app .discover .el-tabs__content li{
padding:5px 0;
list-style:none; 
text-align:left;
position:relative;}
#app .discover .el-tabs__content ul{padding:0;margin:0 ;}
#app .discover .el-tabs__content li i{position:absolute;right:10px;}
.discover .el-tabs__content p{
    background:white; margin:0;width:100%; text-align:left;}
.discover .el-tabs__content p a{
    display:inline-block;
    text-decoration: none;color:#333;
    text-align:center;
    width:33%;
    padding:10px 0;}
</style>
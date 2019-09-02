<template>
  <div id="app">
    <el-row class="footer" :gutter="24">
      <el-col class="footer_col" :span="24">
        <el-menu class="el-menu-demo" mode="horizontal" router @select="change" >
          <el-menu-item :index="item.path" v-for="item in menu" :key="item.name">
            <i :class="item.icon"></i>
            <p>{{item.title}}</p>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
export default {
  name: "app",
  data() {
    return {
      active: "/home",
      menu: [
        { name: "home", title: "首页", path: "/home", icon: "el-icon-s-home" },
        {
          name: "discover",
          title: "找货",
          path: "/discover",
          icon: "el-icon-search"
        },
        {
          name: "cart",
          title: "购物车",
          path: "/cart",
          icon: "el-icon-shopping-cart-2"
        },
        {
          name: "mine",
          title: "个人中心",
          path: "/mine",
          icon: "el-icon-s-custom"
        }
      ]
    };
  },
  methods: {
    change(index) {
      this.active = index;
    }
  },
  created() {
    this.active = this.$route.path;
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}
.footer_col {
  position: fixed;
  bottom: 0px;
  left: 0px;
}
.footer_col li {
  width: 85px;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.el-col-6 {
  width: 93px;
}
.el-row {
  width: 100%;
}
.el-menu-item {
  font-size: 12px;
  line-height: 0px !important;
  border: none !important;
}
.el-menu-demo{
  border: none;
  
}
</style>

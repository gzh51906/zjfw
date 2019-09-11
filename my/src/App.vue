<template>
  <div id="app">
    <el-row class="footer" :gutter="24" v-if="$route.meta.showFooter">
      <el-col class="footer_col" :span="24">
        <el-menu class="el-menu-demo" mode="horizontal" router @select="change">
          <el-menu-item :index="item.path" v-for="item in menu" :key="item.name">
            <i :class="item.icon"></i>
            <p class="title">{{item.title}}</p>
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
  color: #2c3e50;
}
.footer .footer_col {
  display: block;
  position: fixed;
  bottom: -2px;
  left: 0px;
  width: 100% !important;
  height: 62px !important;
  z-index: 100 !important;
  background-color: #fff !important;
}

.footer .footer_col .title {
  margin-top: 14px !important;
}
.footer .footer_col li {
  width: 85px;
  text-align: center;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.footer .el-col-6 {
  width: 93px;
}
.footer .el-row {
  width: 100%;
}
.footer .el-menu-item {
  flex-basis: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  padding-top: 12px !important;
  line-height: 0px !important;
  border: none !important;
}
.footer .el-menu-demo {
  border: none;
  background-color: #fff !important;
  border: none;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>

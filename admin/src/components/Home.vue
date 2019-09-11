<template>
  <div class="home">
    <el-container class="container">
      <el-header class="header">
        <p class="title">找家纺后台管理</p>

        <p class="loginout" @click="loginout">
          <i class="el-icon-switch-button"></i> 退出
        </p>
      </el-header>

      <!-- ******************************************* -->
      <el-container>
        <el-aside class="aside" width="200px">
          <el-menu
            :router="true"
            default-active="1"
            :unique-opened="true"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="user">
                  用户列表
                </el-menu-item>
                <el-menu-item index="adduer">添加用户</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="goods">商品列表</el-menu-item>
                <el-menu-item index="addgoods">添加商品</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="order">订单列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <!-- ************************************** -->
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {
    let authorization = localStorage.getItem("authorization");
    if (!authorization) {
      this.$router.push({ name: "login" });
    }
  },
  methods: {
    loginout() {
      localStorage.clear();
      this.$message({ message: "退出成功", type: "success" });
      this.$router.push("/login");
    }
  }
};
</script>
<style>
body {
  background-image: url("../assets/background.jpg");
}
.home {
  width: 85%;
  margin: 0 auto;
  height: 937px;
}
.container {
  height: 100%;
}
.header {
  background-color: #3385ff;
}

.header > p {
  display: block;
  float: left;
  line-height: 16px;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  
}
.header .loginout {
  float: right;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;
}
.aside {
  background-color: #545c64;
}
.main {
  background-color: #fff;
}
</style>
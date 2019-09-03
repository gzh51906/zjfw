<template>
  <div class="reg">
    <div class="reg_top">
      <i class="el-icon-arrow-left"></i>
      <span>注册</span>
    </div>
    <div class="setter">
      <div class="seeter_cont">
        <i class="el-icon-user"></i>
        <el-input class="setInp" v-model="input" placeholder="请输入账号"></el-input>
      </div>
      <div class="seeter_cont">
        <i class="el-icon-lock"></i>
        <el-input class="setInp" placeholder="输入密码(至少6位数)" v-model="psw" show-password></el-input>
      </div>
      <div class="seeter_cont">
        <i class="el-icon-lock"></i>
        <el-input class="setInp" placeholder="请再次输入密码" v-model="agin" show-password></el-input>
      </div>
      <input class="btn" type="button" value="注册" />
      <span class="notes">
        绑定后即为同意家纺的
        <b>《使用协议》</b>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input:'',
      psw:'',
      agin:''
    };
  }
};
</script>
<style>
.reg {
  background-color: #fff;
  padding-top: 10px;
  height: 1000px;
}
.reg_top {
  width: 100%;
  height: 20px;
  text-align: center;
  line-height: 15px;
  color: #666;
  font-size: 12px;
}
.reg_top > i {
  float: left;
  margin-left: 10px;
}
</style>
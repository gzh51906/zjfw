<template>
  <div class="login">
    <div class="login_content">
      <h2>登录找家纺</h2>
      <div class="setter">
        <div class="seeter_cont">
          <i class="el-icon-user"></i>
          <el-input class="setInp" v-model="input" placeholder="请输入账号"></el-input>
        </div>
        <div class="seeter_cont">
          <i class="el-icon-lock"></i>
          <el-input class="setInp" placeholder="输入密码(至少6位数)" v-model="psw" show-password></el-input>
        </div>
        <div class="orther">
          <span class="orther_reg" @click="goto('reg')">立即注册</span>
          <span class="orther_pass">忘记密码</span>
        </div>
        <input class="btn" type="button" value="登录">
        <span class="notes">绑定后即为同意家纺的<b>《使用协议》</b></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      psw: ""
    }
  },
   methods: {
    goto(name) {
      this.$router.push(name);
    }
  }
};
</script>
<style>
.login {
  width: 100%;
  height: 1000px;
  padding-top: 50px;
  background-color: #000;
}
.login_content {
  width: 80%;
  height: 350px;
  background-color: #fff;
  margin-left: 10%;
  padding-top: 6%;
  padding-left: 3%;
  border-radius: 10px;
}
.login_content h2 {
  margin-left: 8%;
}
.setter {
  margin-top: 25px;
  width: 80%;
  height: 80%;
  margin-left: 20px;
  text-align: center;
}
.setter i {
  display: inline-block;
}
.setInp {
  width: 80%;
  margin-left: 10px;
}
.seeter_cont {
  margin-top: 5px;
  border-bottom: 1px solid #f1f1f1;
}
.seeter_cont i {
  font-size: 26px;
  line-height: 40px;
  color: #6666;
}
.seeter_cont .el-input__inner {
  border: none;
}
.orther {
  margin-top: 20px;
  font-size: 12px;
  text-align: left;
}
.orther_reg {
  color: red;
}
.orther_pass {
  float: right;
}
.btn{
  margin-top: 20px;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: #FF2D51;
  color: #fff;
  font-size: 12px;
  margin-bottom: 20px;
}
.notes{
  font-size: 12px;

}
.notes b{
  color: #FF2D51
}
</style>
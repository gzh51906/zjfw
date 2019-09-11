<template>
  <div class="login">
    <div class="login_content">
      <h2>登录找家纺</h2>
      <span class="close" @click="close">X</span>
      <div class="setter">
        <el-form
          :model="loginForm"
          status-icon
          :rules="rules"
          ref="loginForm"
          label-width="20px"
          class="demo-loginForm"
        >
          <i class="el-icon-user"></i>
          <el-form-item prop="username">
            <el-input
              type="text"
              v-model="loginForm.username"
              autocomplete="off"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <i class="el-icon-lock"></i>
          <el-form-item prop="pass">
            <el-input
              type="password"
              v-model="loginForm.pass"
              autocomplete="off"
              placeholder="输入密码"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="orther">
          <span class="orther_reg" @click="goto('reg')">立即注册</span>
          <span class="orther_pass">忘记密码</span>
        </div>
        <el-button @click="gotoLogin">登录</el-button>
        <span class="notes">
          绑定后即为同意家纺的
          <b>《使用协议》</b>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var pass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.loginForm.checkPass !== "") {
          this.$refs.loginForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      loginForm: {
        username: "admin",
        pass: "123456",
        checkPass: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        pass: [
          { validator: pass, trigger: "blur" },
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    goto(name) {
      this.$router.push(name);
    },
    gotoLogin() {

      
      this.$refs["loginForm"].validate(async valid => {

        if (valid) {
          // hard code
          let { data } = await this.$axios.post("http://47.95.146.227:2010/user/login",{
            username: this.loginForm.username,
            password: this.loginForm.pass
          });

          if (data.code === 1) {
            let person = this.loginForm.username;
            let targetUrl = this.$route.query.targetUrl || "/mine";
            this.$router.push(targetUrl); 
            localStorage.setItem("authorization", data.data.authorization);
            localStorage.setItem("username", data.data.username);

          } else {
            alert("账号或密码错误");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    close() {
      this.$router.push("/home");
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
.login_tip {
  color: red;
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
  display: inline-block;
  margin-left: 8%;
}
.close {
  float: right;
  margin-right: 20px;
  margin-top: -10px;
  color: #666;
}
.setter {
  margin-top: 25px;
  width: 91%;
  height: 80%;
  margin-left: 10px;
  text-align: center;
}
.setter i {
  display: inline-block;
  font-size: 26px;
  line-height: 40px;
  color: #6666;
}
.setInp {
  width: 80%;
  margin-left: 10px;
}
.setter_cont {
  margin-top: 5px;
  border-bottom: 1px solid #f1f1f1;
}
.setter_cont i {
  font-size: 26px;
  line-height: 40px;
  color: #6666;
}
.setter .el-input__inner {
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
.btn {
  margin-top: 20px;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: #ff2d51;
  color: #fff;
  font-size: 12px;
  margin-bottom: 20px;
}
.notes {
  font-size: 12px;
}
.notes b {
  color: #ff2d51;
}
.login .el-button {
  width: 100%;
  background-color: #ff2d51;
  color: #fff;
  margin-top: 15px;
}
.login .el-form-item {
  display: inline-block;

  border-bottom: 1px solid #f1f1f1;
}
</style>
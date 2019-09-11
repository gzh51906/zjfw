<template>
  <div class="log">
    <div class="login">
      <h2>用户登录</h2>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" :plain="true" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        username: "admin",
        pass: "123456"
      },
      rules: {
        username: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let { data } = await this.$axios.post(
            "http://47.95.146.227:2010/user/login",
            {
              username: this.ruleForm.username,
              password: this.ruleForm.pass
            }
          );
          if (data.code === 1) {
            this.$router.push({path:"/home"});
            this.$message({
              message: "登录成功",
              type: "success"
            });
            console.log(this.$router);

            localStorage.setItem("authorization", data.data.authorization);
          } else {
            this.$message.error("账号或密码错误");
          }
        } else {
          return false;
        }
      });
    }
  },
};
</script>
<style>
.log {
  width: 100%;
  height: 937px;
  background-color: #fff;
  text-align: center;
  background: url("../../assets/background.jpg") no-repeat center;
  position: absolute;
}
.login {
  width: 30%;
  height: 300px;
  background-color: #01051e;
  border: 1px solid #999;
  border-radius: 10px;
  position: absolute;
  left: 35%;
  top: 180px;
  margin-top: 20px;
}
.login h2 {
  font-size: 30px;
  color: #fff;
  margin-top: 30px;
}
.login .demo-ruleForm {
  margin-top: 10px;
  width: 80%;
  height: 40px;
  color: #fff;
}
.el-button {
  width: 150px;
}
.login .el-form-item__label {
  font-weight: 700;
}
</style>
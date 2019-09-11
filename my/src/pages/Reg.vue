<template>
  <div class="reg">
    <div class="reg_top">
      <i class="el-icon-arrow-left back" @click="back"></i>
      <span>注册</span>
    </div>
    <div class="reg_set">
      <el-form
        :model="regForm"
        status-icon
        :rules="rules"
        ref="regForm"
        label-width="50px"
        class="demo-regForm"
      >
        <i class="el-icon-user"></i>
        <el-form-item prop="username">
          <el-input type="text" v-model="regForm.username" autocomplete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <i class="el-icon-lock"></i>
        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="regForm.pass"
            autocomplete="off"
            placeholder="输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <i class="el-icon-lock"></i>
        <el-form-item prop="checkPass">
          <el-input
            type="password"
            v-model="regForm.checkPass"
            autocomplete="off"
            placeholder="确认密码"
            show-password
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="gotoReg">注册</el-button>
      <br />
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
    var pass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.regForm.checkPass !== "") {
          this.$refs.regForm.validateField("checkPass");
        }
        callback();
      }
    };
    var checkPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.regForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    var checkUsername = async (rule, value, callback) => {
      // 发起请求校验用户名是否已被注册
      let { data } = await this.$axios.get("http://47.95.146.227:2010/user/check", {
        params: {
          username: this.regForm.username
        }
      });
      if (data.code === 0) {
        callback(new Error("用户名已存在"));
      } else {
        //通过验证
        callback();
      }
    };

    return {
      regForm: {
        username: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { validator: checkUsername, trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10个字符", trigger: "blur" }
        ],
        pass: [
          //validator：是个函数
          { validator: pass, trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18个字符", trigger: "blur" },
          { required: true, message: "请输入密码", trigger: "blur" }
        ],
        checkPass: [
          { validator: checkPass, trigger: "blur" },
        ]
      }
    };
  },
  methods: {
    gotoReg() {
      this.$refs["regForm"].validate( async valid => {
        if (valid) {
          let {data} = await this.$axios.post('http://47.95.146.227:2010/user/reg',{
            username: this.regForm.username,
            password:this.regForm.pass,
          })

          if(data.code === 1 ){
            this.$router.push("/login");
          }
        } else {
          return false;
        }
      });
    },
    back() {
      this.$router.push("/login");
    }
  }
};
</script>
<style>
.reg {
  background-color: #fff;
  padding-top: 10px;
  height: 1000px;
  padding-left: 10px;
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
.reg_set {
  margin-top: 25px;
  width: 80%;
  height: 80%;
  margin-left: 37px;
  text-align: center;
}
.reg .reg_set i {
  font-size: 26px;
  line-height: 40px;
  color: #6666;
}
.reg .reg_set .el-input__inner {
  border: none;
}
.reg .el-form-item {
  display: inline-block;
  border-bottom: 1px solid #f1f1f1;
}
.reg .el-button {
  width: 100%;
  background-color: #ff2d51;
  color: #fff;
}
.back {
  font-size: 14px;
  font-weight: 700;
}
</style>
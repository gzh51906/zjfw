<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <div class="user">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
      </div>
      <!-- <el-form-item label="性别" prop="gender">
        <el-input v-model.number="ruleForm.gender"></el-input>
      </el-form-item>-->
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="ruleForm.gender">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="职业" prop="profession">
        <el-input v-model.number="ruleForm.profession"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model.number="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var username = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的账户"));
      } else {
        callback();
      }
    };
    var pass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的密码"));
      } else {
        callback();
      }
    };

    var profession = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的职业"));
      } else {
        callback();
      }
    };
    return {
      hit: false,
      ruleForm: {
        pass: "",
        username: "",
        gender: "",
        profession: "",
        address: "",
        date: ""
      },
      rules: {
        pass: [{ required: true, validator: pass, trigger: "blur" }],
        username: [{ required: true, validator: username, trigger: "blur" }],
        gender: [
          { required: true, message: "请选择您的性别", trigger: "change" }
        ],
        profession: [
          {
            required: true,
            validator: profession,
            message: "请输入您的职业",
            trigger: "blur"
          }
        ],
        address: [
          {
            message: "请输入您的地址",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate(async valid => {
        if (valid) {
          let { data } = await this.$axios.post(
            "http://47.95.146.227:2010/user2/reg",
            {
              username: this.ruleForm.username,
              password: this.ruleForm.pass,
              gender: this.ruleForm.gender,
              profession: this.ruleForm.profession,
              address: this.ruleForm.address,
            });
          
          if (data.code === 1) {
            this.$message({
              showClose: true,
              message: "创建成功",
              type: "success"
            });
            this.ruleForm.username = "";
            this.ruleForm.pass = "";
            this.ruleForm.gender = "";
            this.ruleForm.profession = "";
            this.ruleForm.address = "";
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style>
.user .el-input__inner {
  width: 40%;
}
.el-radio-group {
  line-height: 40px;
}
</style>
<template>
  <div class="addGoods">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <div class="title">
        <el-form-item label="店铺名称" prop="subname">
          <el-input v-model="ruleForm.subname"></el-input>
        </el-form-item>
        <el-form-item label="商品名称" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="价格">
        <el-input class="price" placeholder="请输入售价" v-model="ruleForm.price" width="120"></el-input>
      </el-form-item>
      <div class="repertory">
        <el-form-item label="库存" prop="qty">
          <el-input-number v-model="num" @change="handleChange" :min="1" label="1"></el-input-number>
        </el-form-item>
      </div>
      <!-- 图片上传 -->

      <el-form-item label="商品图片" prop="pic">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" />
        </el-dialog>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" />
        </el-dialog>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" />
        </el-dialog>
      </el-form-item>

      <!-- <el-form-item label="商品分类" prop="classify">
        <el-select v-model="ruleForm.region" placeholder="商品分类">
          <el-option label="毯子" value="blanket"></el-option>
          <el-option label="枕头" value="pillow"></el-option>
        </el-select>
      </el-form-item>-->

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">添加商品</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: "1",
      dialogImageUrl: "",
      dialogVisible: false,
      ruleForm: {
        subname: "",
        qty: "",
        title: "",
        price: ""
      },
      rules: {
        subname: [
          { required: true, message: "请输入店铺名称", trigger: "blur" }
        ],
        title: [{ required: true, message: "请输入商品名称", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let { data } = await this.$axios.post(
            "http://47.95.146.227:2010/goodslist/addData",
            {
              subname: this.ruleForm.subname,
              title: this.ruleForm.title,
              price: this.ruleForm.price,
              qty: this.ruleForm.qty
            }
          );
          if (data.code === 1) {
            this.$message({
              showClose: true,
              message: "创建成功",
              type: "success"
            });
            this.ruleForm.subname = "";
            this.ruleForm.title = "";
            this.ruleForm.price = "";
            this.ruleForm.qty = "";
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleChange() {},
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
<style>
.oldPrice,
.price {
  display: block;
  float: left;
  width: 150px;
  margin-right: 20px;
}
.el-textarea__inner {
  min-height: 150px !important;
  max-width: 80%;
}
.title .el-input__inner {
  width: 40%;
}
.el-form-item__content > div {
  float: left;
  margin-right: 20px;
}
</style>
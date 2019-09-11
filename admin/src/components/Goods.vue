<template>
  <div class="goods">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="subname" label="店铺名称"></el-table-column>
      <el-table-column prop="title" label="商品名称"></el-table-column>

      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="qty" label="库存"></el-table-column>
      <el-table-column label="操作" width="120">
        <div class="icon">
          <i class="el-icon-delete-solid">删除</i>
        </div>
      </el-table-column>
    </el-table>
    <div class="btn">
      <el-button type="success" plain @click="addShop">
        <i class="el-icon-circle-plus"></i> 添加商品
      </el-button>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        
      ]
    };
  },
  created() {
    this.$axios.get("http://47.95.146.227:2010/goodslist/getData").then(res => {
      this.tableData = res.data.data;
      console.log(this.tableData);
    });

    // this.tableData = data
  },
  methods: {
    handleSelectionChange() {},
    addShop() {
      this.$router.push({ name: "addgoods" });
    }
  }
};
</script>
<style>
.cell i {
  font-size: 16px !important;
}
.paging .el-pagination {
  float: right;
  margin-top: 20px;
}
.btn .el-button {
  float: left;
  margin-top: 20px;
}

</style>
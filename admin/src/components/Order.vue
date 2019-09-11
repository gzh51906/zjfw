<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="添加日期">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="repertory" label="数量"></el-table-column>

      <el-table-column prop="freight" label="运费"></el-table-column>
      <el-table-column prop="money" label="金额"></el-table-column>
      <el-table-column label="操作" width="120">
        <div class="icon">
          <i class="el-icon-edit"></i>&nbsp; &nbsp;
          <i class="el-icon-delete-solid"></i>
        </div>
      </el-table-column>
    </el-table>
    <div class="paging">
      <el-pagination background layout="prev, pager, next" :total="10"></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2019-09-03",
          name: "床罩",
          price: "3499",
          repertory: "1",
          freight:"10",
          money:"3509"
        },
        {
          date: "2019-09-02",
          name: "床垫",
          price: "4499",
          repertory: "1",
          freight:"10",
          money:"4509"
        },
        {
          date: "2019-09-04",
          name: "记忆枕头",
          price: "499",
          repertory: "1",
          freight:"10",
          money:"509"
        },
        {
          date: "2019-09-01",
          name: "蚕丝被",
          price: "879",
          repertory: "1",
          freight:"10",
          money:"889"
        },
        {
          date: "2019-09-08",
          name: "电热毯",
          price: "229",
          repertory: "1",
          freight:"10",
          money:"239"
        },
        {
          date: "2019-09-06",
          name: "睡袋",
          price: "189",
          repertory: "1",
          freight:"10",
          money:"199"
        },
        {
          date: "2019-09-07",
          name: "凉席",
          price: "499",
          repertory: "1",
          freight:"10",
          money:"509"
        }
      ]
    };
  },
  methods: {
    handleSelectionChange() {
      console.log("ok");
    }
  }
};
</script>
<style>
.cell i {
  font-size: 18px !important;
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
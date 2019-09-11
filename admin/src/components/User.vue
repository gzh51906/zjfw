<template>
  <div class="user">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope" class="likeyousomuch">
          <span style="margin-left: 10px">{{ scope.row.username }}</span>
        </template>
      </el-table-column>

      <el-table-column label="性别" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.gender }}</span>
        </template>
      </el-table-column>
      <el-table-column label="职业" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.profession }}</span>
        </template>
      </el-table-column>
      <el-table-column label="地址">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <el-button type="text" @click="handleDelete(scope.$index, tableData)">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scope:"",
      tableData: []
    };
  },
  mounted() {
    this.$axios.get("http://47.95.146.227:2010/user2").then(response => {
      this.tableData = response.data.data;
    });
  },
  methods: {
    handleDelete(index, rows) {
      rows.splice(index, 1);
    }
  }
};
</script>
<style>
</style>
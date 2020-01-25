<template>
  <div class="orders_container">
    <div class="title">
      <h1>员工管理</h1>
    </div>
    <el-table
      :data="tableData"
      border
      :cell-style="{textAlign: 'center'}"
      :header-cell-style="{textAlign: 'center'}"
    >
      <el-table-column type="index" :index="computeIndex" label="序号" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="sex" label="性别" />
      <el-table-column prop="num" label="工号" />
      <el-table-column prop="position" label="职位" />
      <el-table-column prop="salary" label="月薪" />
      <el-table-column prop="remark" label="备注" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleEdit(scope)">编辑</el-button>
          <el-button type="danger" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :total="total"
      :current-page.sync="page"
      :page-size="limit"
      background
      layout="total, prev, pager, next"
      @next-click="handleNext"
      @prev-click="handlePrev"
      @current-change="changePageEvent"
    />
    <el-dialog title="信息编辑" :visible.sync="dialogFormVisible">
      <el-form :model="currentEdit">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="currentEdit.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-input v-model="currentEdit.sex" autocomplete="off" />
        </el-form-item>
        <el-form-item label="工号" :label-width="formLabelWidth">
          <el-input v-model="currentEdit.num" autocomplete="off" />
        </el-form-item>
        <el-form-item label="职位" :label-width="formLabelWidth">
          <el-input v-model="currentEdit.position" autocomplete="off" />
        </el-form-item>
        <el-form-item label="月薪" :label-width="formLabelWidth">
          <el-input v-model="currentEdit.salary" autocomplete="off" />
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="currentEdit.remark" autocomplete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirm(currentEdit.index)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: '王强',
          sex: '男',
          num: '001',
          position: '经理',
          salary: '19999',
          remark: ''
        },
        {
          name: '李四',
          sex: '男',
          num: '002',
          position: '厨师长',
          salary: '12222'
        },
        {
          name: '王五',
          sex: '男',
          num: '003',
          position: '厨师',
          salary: '9999'
        },
        {
          name: '严无',
          sex: '男',
          num: '004',
          position: '厨师',
          salary: '19999'
        },
        {
          name: '贾晓晓',
          sex: '女',
          num: '005',
          position: '服务员',
          salary: '6666'
        },
        {
          name: '甄世大',
          sex: '男',
          num: '006',
          position: '厨师',
          salary: '9999'
        },
        {
          name: '白月光',
          sex: '男',
          num: '007',
          position: '服务员',
          salary: '19999'
        },
        {
          name: '邓邓等',
          sex: '男',
          num: '008',
          position: '厨师',
          salary: '19999'
        },
        {
          name: '奥特曼',
          sex: '男',
          num: '009',
          position: '超人',
          salary: '199999'
        },
        {
          name: '王强',
          sex: '男',
          num: '010',
          position: '经理',
          salary: '19999'
        },
        {
          name: '王强',
          sex: '男',
          num: '011',
          position: '经理',
          salary: '19999'
        },
        {
          name: '王强',
          sex: '男',
          num: '012',
          position: '经理',
          salary: '19999'
        },
        {
          name: '王强',
          sex: '男',
          num: '001',
          position: '经理',
          salary: '19999'
        },
        {
          name: '王强',
          sex: '男',
          num: '001',
          position: '经理',
          salary: '19999'
        },
        {
          name: '王强',
          sex: '男',
          num: '001',
          position: '经理',
          salary: '19999'
        },
        {
          name: '王强',
          sex: '男',
          num: '001',
          position: '经理',
          salary: '19999'
        },
        {
          name: '王强',
          sex: '男',
          num: '001',
          position: '经理',
          salary: '19999'
        },
        {
          name: '王强',
          sex: '男',
          num: '001',
          position: '经理',
          salary: '19999'
        },
        {
          name: '王强',
          sex: '男',
          num: '001',
          position: '经理',
          salary: '19999'
        },
        {
          name: '王强',
          sex: '男',
          num: '001',
          position: '经理',
          salary: '19999'
        }
      ],
      currentEdit: {
        name: '',
        sex: '',
        num: '',
        position: '',
        salary: '',
        remark: '',
        index: 0
      }, // 当前查看订单详情数据
      currentEditIndex: 0,
      dialogFormVisible: false,
      total: 0, // 总数据数量
      page: 1, // 当前所在页数
      limit: 6, // 每页显示多少条数据,
      formLabelWidth: '50px'
    }
  },
  computed: {
    computeIndex() {
      return (this.page - 1) * this.limit + 1
    }
  },
  created() {
    this.total = this.tableData.length
  },
  methods: {
    changePageEvent() {},
    handleEdit(scope) {
      this.currentEdit = { ...scope.row }
      this.currentEditIndex = scope.$index
      this.dialogFormVisible = true
    },
    handleDelete(scope) {
      this.$confirm('确认删除？', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // 点击确认
          this.tableData.splice(scope.$index, 1)
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        })
        .catch(e => {
          // 点击取消
        })
    },
    handleNext() {},
    handlePrev() {},
    handleConfirm(index) {
      this.tableData[this.currentEditIndex] = this.currentEdit
      this.dialogFormVisible = false
    }
  }
}
</script>

<style lang="scss">
.orders_container {
  margin: 10px 10px;
  padding: 5px 10px;
  background-color: #fff;

  .title {
    h1 {
      text-align: center;
    }
  }
  .el-pagination {
    display: flex;
    justify-content: center;
    margin: 50px 0;
  }
}
</style>

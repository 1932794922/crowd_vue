<template>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户维护</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="panel-heading">
    <h3 class="panel-title"><i class="glyphicon glyphicon-th"></i>数据列表</h3>
  </div>
  <el-row align="middle">
    <el-col :span="10">
      <el-input
          v-model="keyword"
          placeholder="请输入搜索条件"
          @change="keywordChanged"
      >
        <template #prepend>查询条件</template>
      </el-input>
    </el-col>
    <el-col :push="9" :span="5">
      <el-button type="primary" @click="actionFun(null,CONSTANT.UPDATE)">添加</el-button>
      <el-button type="danger" @click="deleteFun(adminInfo)">删除</el-button>
    </el-col>
  </el-row>

  <el-table
      :data="tableData"
      style="width: 100%;margin-top: 15px"
      border
      stripe
      @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="50"/>
    <el-table-column align="center" type="index" label="编号" width="60"/>
    <el-table-column align="center" prop="loginAcct" label="账号" width="180"/>
    <el-table-column align="center" prop="userName" label="名称" width="180"/>
    <el-table-column align="center" prop="email" label="邮件地址"/>
    <el-table-column align="center" prop="createTime" :formatter="dateFormat" label="创建时间" width="180"/>
    <el-table-column align="center" label="操作">
      <template #default="scope">
        <el-button type="warning" size="small" @click="allocation(scope.row,CONSTANT.ALLOCATION)">分配角色</el-button>
        <el-button type="primary" size="small" @click="actionFun(scope.row,CONSTANT.UPDATE)">编辑</el-button>
        <el-button type="danger" size="small" @click="deleteFun(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      :currentPage="pageInfo.pageNum"
      :page-size="pageInfo.pageSize"
      :page-sizes="[5, 10, 15, 20]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageInfo.total"
      @size-change="handleSizeChange"
      hide-on-single-page
      @current-change="handleCurrentChange"
  />

  <Dialog :dialogProps="dialogProps" @dialogTrigger="dialogTrigger">
    <template #editForm>
      <div class="panel panel-default">
        <div class="panel-heading">表单数据
          <div style="float:right;cursor:pointer;" data-toggle="modal" data-target="#myModal"><i
              class="glyphicon glyphicon-question-sign"></i></div>
        </div>
        <div class="panel-body">
          <el-form
              ref="ruleFormRef"
              :model="form.adminInfo"
              :rules="form.rules"
              label-width="120px"
          >
            <el-form-item   v-for="(item,index) in form.adminInfo.data" :key="index"
                          :label="item.label"
                          :prop=item.prop>
              <el-input :type="item.type"
                        v-model="item.value"/>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </template>
    <template #allocation>
      <el-transfer
          style="text-align: left; display: inline-block"
          filterable
          v-model="roles.checkedSend"
          :props="{
            key: 'id',
            label: 'name',
           }"
          :titles="['未分配', '已分配']"
          :button-texts="['取消', '分配']"
          :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}',
      }"
          :data="roles.data"
          @change="handleChange"
          target-orde="push "
      >
      </el-transfer>
    </template>
  </Dialog>

</template>

<script setup>
import {concat, isArray} from 'lodash'
import {onBeforeMount, reactive, ref} from "vue";
import {addAdmin, addAssign, AdminAssign, adminList, deleteAdmin, updateAdmin} from "@/api/admin";
import Dialog from "@/components/Dialog.vue";
import * as CONSTANT from "@/utils/constant";
import {arrayKeyForObject, errorsMsg, findKeyForValue, successMsg} from "@/utils/web-utils";
import md5 from "blueimp-md5";


const keyword = ref('')

const ruleFormRef = ref(null)

//角色列表
const roles = reactive({
  data: [],
  // 未选择的数据
  unChecked: [],
  // 选择的数据
  checked: [],
  //绑定提交的数据
  finalChecked: [],
  //绑定提交的数据
  checkedSend: []
})

const pageInfo = reactive({
  pageSize: 10,
  total: 0,
  pageNum: 1,
})

const adminInfo = reactive({
  id: -1,
  loginAcct: '',
  userName: '',
  email: "",
  userPswd: "",
})

const form = reactive({
  adminInfo: {
    data: [
      {label: "登陆账号", value: '', prop: 'loginAcct'},
      {label: "用户名称", value: '', prop: 'userName'},
      {label: "邮箱地址", value: '', prop: 'email'},
      {label: "密码", value: '', prop: 'userPswd', disabled:true  ,type: 'password'},
    ]
  }
})

const tableData = ref([])

const dateFormat = (row, column, cellValue) => {
  //时间戳转化YYYY-MM-DD HH:mm:ss
  return new Date(cellValue * 1).toLocaleString()


}

const dialogProps = reactive({
  isShow: false,
  action: ''
})

const handleSelectionChange = (arrayVal) => {
  let ids = []
  arrayVal.forEach(item => {
    ids.push(item.id)
  })
  adminInfo.id = ids

}

/**
 * 获取管理员列表
 * @param keyWord
 * @param pageNum
 * @param pageSize
 */
const getAdminList = (keyWord = keyword.value, pageNum = pageInfo.pageNum,
                      pageSize = pageInfo.pageSize) => {
  adminList({
    keyWord,
    pageNum,
    pageSize
  }).then(res => {
    if (res.code !== 200) {
      return errorsMsg(res.message);
    }
    pageInfo.pageSize = res.data.pageSize;
    pageInfo.total = res.data.total || 0
    pageInfo.pageNum = res.data.pageNum
    tableData.value = res.data.record
  }).catch(err => {
    return errorsMsg(err.message);
  })
};

const handleSizeChange = (number) => {
  pageInfo.pageSize = number
  getAdminList()
}
const handleCurrentChange = (number) => {
  pageInfo.pageNum = number
  getAdminList()
}
const keywordChanged = (search) => {
  keyword.value = search
  getAdminList()
}

//权限分配
const allocation = (row, action) => {
  adminInfo.id = row.id
  dialogProps.action = action
  roles.checkedSend = []
  dialogProps.isShow = true;
  AdminAssign({
    id: row.id
  }).then(res => {
    if (res.code !== 200) {
      return errorsMsg(res.message);
    }
    Object.assign(roles, res.data.result)
    // 预渲染
    roles.checked.forEach(item => {
      roles.checkedSend.push(item.id || -1)
    })
    roles.data = concat(roles.unChecked, roles.checked) || []
  }).catch(err => {
    return errorsMsg(err.message);
  })
}

const handleChange = (ids) => {
  roles.checkedSend = ids
}

const allocationFun = (data) => {
  console.log(data)
  addAssign({
    id:adminInfo.id,
    ids:data
  }).then(res => {
    if (res.code !== 200) {
      return errorsMsg(res.message);
    }
    successMsg(res.message)
    dialogProps.isShow = false;
  }).catch(err => {
    return errorsMsg(err.message);
  })
}

const actionFun = (row, action) => {
  //用于判断是编辑还是删除操作,id为-1时为新增
  adminInfo.id = -1
  if (row) {
    Object.assign(adminInfo, row)
    //封装数据
    findKeyForValue(form.adminInfo.data, adminInfo);
  }
  dialogProps.isShow = true;
  dialogProps.action = action
}

const addFun = (adminInfo) => {
  arrayKeyForObject(form.adminInfo.data, adminInfo);
  adminInfo.id = null;
  adminInfo.userPswd = md5(adminInfo.userPswd).toUpperCase();
  addAdmin({...adminInfo}).then(res => {
    if (res.code === 200) {
      getAdminList(null, pageInfo.total, pageInfo.pageSize)
      resetForm(ruleFormRef.value)
      return successMsg(res.message);
    }
    return errorsMsg(res.message)
  }).catch(err => {
    return errorsMsg(err.message)
  })
}

const editFun = (adminInfo) => {
  arrayKeyForObject(form.adminInfo.data, adminInfo);
  adminInfo.userPswd = md5(adminInfo.userPswd).toUpperCase();
  updateAdmin({...adminInfo}).then(res => {
    if (res.code === 200) {
      getAdminList()
      resetForm(ruleFormRef.value)
      return successMsg(res.message);
    }
    return errorsMsg(res.message)
  }).catch(err => {
    return errorsMsg(err.message)
  })
}
const deleteFun = (row) => {
  if (row.id === -1 || isArray(row.id) && row.id.length <= 0) {
    return errorsMsg("未选择要删除的数据");
  }
  ElMessageBox.confirm(
      `是否确定要删除 [ ${row.userName || "批量"} ] ?`,
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'danger',
      }
  ).then(() => {
    deleteAdmin({
      id: concat(row.id)
    }).then(res => {
      if (res.code === 200) {
        getAdminList()
        return successMsg(res.message);
      }
      return errorsMsg(res.message)
    }).catch(err => {
      return errorsMsg(err.message)
    })
  }).catch(err => {
    return errorsMsg("取消删除")
  })

}

const dialogTrigger = (isShow, dialogAction) => {
  if (dialogAction === "cancel") {
    dialogProps.isShow = isShow;
  } else {
    return submitForm(ruleFormRef.value, isShow)
  }
  resetForm(ruleFormRef.value)
}

onBeforeMount(() => {
  getAdminList()
})

const submitForm = (formEl, isShow) => {
  if (dialogProps.action !== "allocation") {
    for (const item of form.adminInfo.data) {
      if (!item.value || item.value.trim().length === 0) {
        return errorsMsg(`请填写 ${item.label} `)
      }
    }
  }
  switch (dialogProps.action) {
    case CONSTANT.UPDATE:
      if (adminInfo.id === -1) {
        addFun(adminInfo);
      } else {
        editFun(adminInfo);
      }
      break;
    case CONSTANT.ALLOCATION:
      allocationFun(roles.checkedSend);
      break;
  }
  dialogProps.isShow = isShow;
}

const resetForm = (formEl) => {
  form.adminInfo.data.forEach((item) => {
    item.value = ''
  })
  if (!formEl) return
  formEl.resetFields()
}

</script>

<style scoped>
.tree li {
  list-style-type: none;
  cursor: pointer;
}

table tbody tr:nth-child(odd) {
  background: #F4F4F4;
}

table tbody td:nth-child(even) {
  color: #C00;
}

.el-pagination {
  margin-top: 5px;
  justify-content: center;
}
</style>
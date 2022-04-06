<template>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>角色维护</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="panel-heading">
    <h3 class="panel-title"><i class="glyphicon glyphicon-th"></i>数据列表</h3>
  </div>
  <el-row align="middle">
    <el-col :span="10">
      <el-input
          v-model="keyWork"
          placeholder="请输入搜索条件"
          @change="keyWorkChanged"
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
    <el-table-column align="center" prop="name" label="名称" />
    <el-table-column align="center" label="操作"  width="280">
      <template #default="scope">
        <el-button type="warning" size="small" @click="actionFun(scope.row,CONSTANT.ALLOCATION)">分配角色</el-button>
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
            <el-form-item v-for="(item,index) in form.adminInfo.data" :key="index"
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
          :left-default-checked="[2, 3]"
          :right-default-checked="[1]"
          :titles="['Source', 'Target']"
          :button-texts="['To left', 'To right']"
          :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}',
      }"
      >
        <template #left-footer>
          <el-button class="transfer-footer" size="small">Operation</el-button>
        </template>
        <template #right-footer>
          <el-button class="transfer-footer" size="small">Operation</el-button>
        </template>
      </el-transfer>
    </template>
  </Dialog>

</template>
<!--项目分类-->
<script setup>
import {concat, isArray} from 'lodash'
import {onBeforeMount, reactive, ref} from "vue";
import Dialog from "@/components/Dialog.vue";
import * as CONSTANT from "@/utils/constant";
import {arrayKeyForObject, errorsMsg, findKeyForValue, successMsg} from "@/utils/web-utils";
import {roleList, updateRole, addRole, deleteRole} from "@/api/admin/uesr/role";

const keyWork = ref("")

const ruleFormRef = ref(null)

const pageInfo = reactive({
  pageSize: 10,
  total: 0,
  pageNum: 1,
})

const adminInfo = reactive({
  id: -1,
  name: '',
})

const form = reactive({
  adminInfo: {
    data: [
      {label: "名称", value: '', prop: 'name'},
    ]
  }
})

const tableData = ref([])

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
 * @param keyWorks
 * @param pageNum
 * @param pageSize
 */
const getRoleList = (keyWorks = keyWork.value, pageNum = pageInfo.pageNum,
                     pageSize = pageInfo.pageSize) => {
  roleList({
    keyWorks,
    pageNum,
    pageSize
  }).then(res => {
    if (res.code !== 200) {
      return errorsMsg(res.message)
    }
    pageInfo.pageSize = res.data.pageSize
    pageInfo.total = res.data.total || 0
    pageInfo.pageNum = res.data.pageNum
    tableData.value = res.data.record
  }).catch(err => {
    return errorsMsg(err.message)
  })
};

const handleSizeChange = (number) => {
  pageInfo.pageSize = number
  getRoleList()
}
const handleCurrentChange = (number) => {
  pageInfo.pageNum = number
  getRoleList()
}
const keyWorkChanged = (search) => {
  keyWork.value = search

  getRoleList()
}

//权限分配
const allocationFun = (row) => {

}

const actionFun = (row, action) => {
  //用于判断是编辑还是删除操作,id为-1时为新增
  adminInfo.id = -1

  if (row) {
    adminInfo.id = row.id;
    adminInfo.name = row.name;
    //封装数据
    findKeyForValue(form.adminInfo.data, adminInfo);
  }

  dialogProps.isShow = true;
  dialogProps.action = action
}

const addFun = (adminInfo) => {
  arrayKeyForObject(form.adminInfo.data, adminInfo);
  adminInfo.id = null;
  addRole({...adminInfo}).then(res => {
    if (res.code === 200) {
      getRoleList(null, pageInfo.total, pageInfo.pageSize)
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
  updateRole({...adminInfo}).then(res => {
    if (res.code === 200) {
      getRoleList()
      return successMsg(res.message);
    }
    return errorsMsg(res.message)
  }).catch(err => {
    return errorsMsg(err.message)
  })
}
const deleteFun = (row) => {
  if (row.id === -1 || isArray(row.id) &&row.id.length <= 0) {
    return errorsMsg("请选择要删除的数据");
  }
  ElMessageBox.confirm(
      `是否确定要删除 [ ${row.name || "批量"} ] ?`,
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'danger',
      }
  ).then(() => {
    deleteRole({
      id: concat(row.id)
    }).then(res => {
      if (res.code === 200) {
        getRoleList()
        return successMsg(res.message);
      }
      return errorsMsg(res.message)

    }).catch(err => {
      return errorsMsg(err.message)
    })

  }).catch(err => {
    return errorsMsg(err.message)
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
  getRoleList()
})

const submitForm = (formEl, isShow) => {
  for (const item of form.adminInfo.data) {
    if (!item.value && item.value.trim().length === 0) {
      return errorsMsg(`请填写 ${item.label} `)
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
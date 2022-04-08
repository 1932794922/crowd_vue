<template>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>权限维护</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="panel-heading">
    <h3 class="panel-title"><i class="glyphicon glyphicon-th"></i>权限菜单列表</h3>
  </div>
  <el-row>
    <el-col :push="21" :span="3">
      <el-button class="button" type="primary" @click="appendBtn(null,CONSTANT.ADD)">添加</el-button>
    </el-col>
  </el-row>
  <el-tree
      :data="dataSource"
      node-key="id"
      :props="{
        children: 'children',
        label: 'name'
      }"
      default-expand-all

      empty-text="当前没有数据菜单"
  >
    <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span class="operation">
            <a @click="appendBtn(data,CONSTANT.ADD)"> 添加 </a>
            <a @click="editBtn(data,CONSTANT.UPDATE)"> 编辑 </a>
            <a @click="removeBtn(node, data)"> 删除 </a>
          </span>
        </span>
    </template>
  </el-tree>
  <Dialog :dialogProps="dialogProps" @dialogTrigger="dialogTrigger">
    <template #editForm>
      <div class="panel panel-default">
        <div class="panel-heading">菜单数据
          <div style="float:right;cursor:pointer;" data-toggle="modal" data-target="#myModal"><i
              class="glyphicon glyphicon-question-sign"></i></div>
        </div>
        <div class="panel-body">
          <el-form
              ref="ruleFormRef"
              :model="form.menuInfo"
              label-width="120px"
          >
            <el-form-item v-for="(item,index) in form.menuInfo.data" :key="index"
                          :label="item.label"
                          :prop=item.prop>
              <el-input v-model="item.value"/>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </template>
  </Dialog>


</template>

<script setup>

import {onBeforeMount, reactive, ref} from "vue";

import {addAuth, deleteAuth, authList, updateAuth} from "@/api/admin/uesr/auth";
import Dialog from "@/components/Dialog.vue";
import * as CONSTANT from "@/utils/constant";
import {arrayKeyForObject, errorsMsg, findKeyForValue, successMsg} from "@/utils/web-utils";

const dataSource = ref([])

const ruleFormRef = ref(null);

const form = reactive({
  menuInfo: {
    data: [
      {label: "操作名称", value: '', prop: 'name'},
    ]
  }
})

const menuInfo = reactive({})

const dialogProps = reactive({
  isShow: false,
  action: ''
})

const dialogTrigger = (isShow, dialogAction) => {
  if (dialogAction === "cancel") {
    dialogProps.isShow = isShow;
  } else {
    return submitForm(ruleFormRef.value, isShow)
  }
  resetForm(ruleFormRef.value)
}

const actionFun = (row, action) => {
  dialogProps.isShow = true;
  dialogProps.action = action
}

const addFun = (menuInfo) => {
  arrayKeyForObject(form.menuInfo.data, menuInfo);
  addAuth({...menuInfo}).then(res => {
    if (res.code === 200) {
      getAuthList()
      resetForm(ruleFormRef.value)
      return successMsg(res.message);
    }
    resetForm(ruleFormRef.value)
    return errorsMsg(res.message)
  }).catch(err => {
    return errorsMsg(err.message)
  })
}

const editFun = (adminInfo) => {
  arrayKeyForObject(form.menuInfo.data, menuInfo);
  updateAuth({...adminInfo}).then(res => {
    if (res.code === 200) {
      getAuthList()
      resetForm(ruleFormRef.value)
      return successMsg(res.message);
    }
    return errorsMsg(res.message)
  }).catch(err => {
    return errorsMsg(err.message)
  })
}


const getAuthList = () => {
  authList().then(res => {
    if (res.code === 200) {
      dataSource.value = res.data.records.children || []
    }
  })
}

const appendBtn = (data, action) => {
  if (data == null) {
    data = {id: null, pid: null, name: '', router: ''}
  }
  Object.assign(menuInfo, data);
  dialogProps.isShow = true;
  dialogProps.action = action
}

const editBtn = (data, action) => {
  Object.assign(menuInfo, data)
  // 保存到表单
  findKeyForValue(form.menuInfo.data, menuInfo);
  dialogProps.isShow = true;
  dialogProps.action = action
}

const removeBtn = (node, data) => {
  if (node.level <= 0) {
    return errorsMsg("根节点不能删除")
  }
  if (node.childNodes && node.childNodes.length > 0) {
    return errorsMsg("请先删除子节点")
  }
  ElMessageBox.confirm(
      `是否确定要删除 [ ${data.name} ] ?`,
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'danger',
      }
  ).then(() => {
    deleteAuth({
      id: data.id
    }).then(res => {
      if (res.code === 200) {
        getAuthList()
        return successMsg(res.message);
      }
      return errorsMsg(res.message)
    }).catch(err => {
      return errorsMsg(err.message)
    })
  }).catch(() => {
    return errorsMsg("取消删除")
  })
}

const submitForm = (formEl, isShow) => {
  switch (dialogProps.action) {
    case CONSTANT.UPDATE:
      editFun(menuInfo);
      break;
    case CONSTANT.ADD:
      addFun(menuInfo);
      break;
  }
  dialogProps.isShow = isShow;
}


const resetForm = (formEl) => {
  form.menuInfo.data.forEach((item) => {
    item.value = ''
  })
  if (!formEl) return
  formEl.resetFields()
}

onBeforeMount(() => {
  getAuthList()
})


</script>

<style lang="scss" scoped>

.operation {
  position: absolute;
  right: 0;
}

.button {
  margin-bottom: 10px;
}

</style>





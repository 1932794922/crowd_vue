<template>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>菜单维护</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="panel-heading">
    <h3 class="panel-title"><i class="glyphicon glyphicon-th"></i>权限菜单列表</h3>
  </div>

  <el-tree
      :data="dataSource"
      node-key="id"
      default-expand-all
      draggable
      :expand-on-click-node="false"
  >
    <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span class="operation">
            <a @click="append(data)"> Append </a>
            <a @click="remove(node, data)"> Delete </a>
          </span>
        </span>
    </template>
  </el-tree>
</template>
<!--项目标签-->
<script setup>

import {ref} from "vue";

const dataSource = ref([
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
])


</script>

<style lang="scss" scoped>

.operation{
  position: absolute;
  right: 0;
}

</style>
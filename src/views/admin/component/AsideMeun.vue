<template>
  <el-menu
      :collapse="isCollapse"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
  >
    <div  style="padding-top:10px;cursor: pointer;" @click="isCollapse=!isCollapse">
      <el-menu-item style="height: 30px" index="-1" >
        <el-icon v-show="!isCollapse">
          <arrow-left-bold/>
        </el-icon>
        <el-icon v-show="isCollapse">
          <span>{{ isCollapse ? "展开" : "折叠" }} </span>
        </el-icon>
      </el-menu-item>
    </div>
    <el-menu-item index="1">
      <el-icon>
        <setting/>
      </el-icon>
      <span>控制面板</span>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <location/>
        </el-icon>
        <span>权限管理</span>
      </template>
      <el-menu-item index="1-1">用户角色</el-menu-item>
      <el-menu-item index="1-2">角色维护</el-menu-item>
      <el-menu-item index="1-2">菜单维护</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="3">
      <template #title>
        <el-icon>
          <location/>
        </el-icon>
        <span>业务审核</span>
      </template>
      <el-menu-item index="100-1">实名认证审核</el-menu-item>
      <el-menu-item index="1-2">广告审核</el-menu-item>
      <el-menu-item index="1-2"> 项目审核</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>
        <el-icon>
          <location/>
        </el-icon>
        <span>业务管理</span>
      </template>
      <el-menu-item index="1-1">资质维护</el-menu-item>
      <el-menu-item index="1-2">分类管理</el-menu-item>
      <el-menu-item index="1-2">流程管理</el-menu-item>
      <el-menu-item index="1-2">广告管理</el-menu-item>
      <el-menu-item index="1-2">消息模板</el-menu-item>
      <el-menu-item index="1-2">项目分类</el-menu-item>
      <el-menu-item index="1-2">项目标签</el-menu-item>

    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon>
        <setting/>
      </el-icon>
      <span>参数管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import {ref} from "vue";

const isCollapse = ref(false);


</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 500px;
  height: 500px;
  overflow: auto;
  overflow-x: hidden;
}

.el-menu-vertical-demo {
  min-height: 500px;
  height: 500px;
  overflow: auto;
  overflow-x: hidden;
}


</style>
<template>
  <div class="common-layout">
    <el-container>
      <el-header><head-title></head-title></el-header>
      <el-container>
        <el-aside><aside-meun></aside-meun></el-aside>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeadTitle from "@/views/admin/component/HeadTitle.vue";
import AsideMeun from "@/views/admin/component/AsideMeun.vue";
export default {
  name: "MainDash",
  components: {AsideMeun, HeadTitle}
}
</script>

<style scoped>

</style>
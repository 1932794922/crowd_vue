<template>
  <div class="common-layout">
    <el-container>
      <el-header><head-title></head-title></el-header>
      <el-container>
        <el-aside ><aside-meun></aside-meun></el-aside>
        <el-main>
          <el-card class="box-card">
          <router-view/>
        </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
  <Footer/>
</template>

<script setup>
import HeadTitle from "@/views/admin/component/HeadTitle.vue";
import AsideMeun from "@/views/admin/component/AsideMeun.vue";
import Footer from "@/components/Footer.vue";

</script>

<style scoped>
.el-menu {
  border-right: none;
}
.el-aside{
  width: auto;
  background-color:#545c64;
}
.el-header{
  height: auto;
}
.common-layout{
  background: #f8f6f6;
}
.box-card{
  height: 80vh;
  overflow: auto;
}

</style>
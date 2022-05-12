<template>
  <router-view v-slot="{ Component }">
    <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut">
      <div>
        <component :is="Component" />
      </div>
    </transition>
  </router-view>

</template>


<script setup>
</script>

<style lang="scss">
.animate__animated {
  --animate-duration: 200ms;
  --animate-delay: 0s;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
}

.el-transfer {
  --el-transfer-border-color: #00AA88 !important;
  --el-transfer-panel-width: 300px !important;
  --el-transfer-panel-header-height: 90px !important;

  .el-transfer-panel {
    box-shadow: 0 0 10px rgba(147, 139, 139, 0.91);
  }
}
</style>

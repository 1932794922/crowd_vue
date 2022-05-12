<template>
  <Header></Header>
  <router-view v-slot="{ Component }">
    <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup>
import Header from "@/views/user/component/Header.vue";
</script>

<style scoped>
.animate__animated {
  --animate-duration: 500ms;
  --animate-delay: 0s;
}
</style>
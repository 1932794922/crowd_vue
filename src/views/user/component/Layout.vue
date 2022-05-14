<template>
  <Header></Header>
  <router-view v-slot="{ Component }">
    <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut">
      <keep-alive :exclude="exclude">
        <component :is="Component"/>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup>
import Header from "@/views/user/component/Header.vue";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import staticRoutes from "@/router/staticroute";

const exclude = ref([]);

const router = useRouter();

const temp = [];
const excludeRoutes = (router) => {

  router.forEach(route => {
    if (route.meta?.keepAlive === false && !temp.includes(route.name)) {
      temp.push(route.name);}
    if (route.children) {
      excludeRoutes(route.children);
    }
  });
  return temp;
}

onMounted(() => {
  exclude.value = excludeRoutes(staticRoutes) ;
})
</script>


<style scoped>
.animate__animated {
  --animate-duration: 500ms;
  --animate-delay: 0s;
}
</style>
<template>
  <div class="navbar-wrapper">
    <div class="container">
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <router-link class="navbar-brand" to="/" style="font-size:32px;">尚筹网-创意产品众筹平台</router-link>
          </div>
          <div id="navbar" class="navbar-collapse collapse" style="float:right;">
            <ul class="nav navbar-nav">
              <li>
                <h4>{{ user.userName }}</h4>
              </li>
              <li>
                <h4 class="logout" @click="logoutBtn">退出</h4>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>


import {memberLogout, queryMember} from "@/api/member/user";
import {errorsMsg, getSession, removeAllSession, removeSession, successMsg} from "@/utils/web-utils";
import {onMounted, reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

const user = reactive({
  userName: '',
  isLogin: false
});


const route = useRoute();

const router = useRouter()

const logoutBtn = () => {
  ElMessageBox.confirm(
      '是否要退出登录?',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }
  )
      .then(() => {
        memberLogout().then(res => {
          if (res.code !== 200) {
            return errorsMsg(res.message)
          }
          router.push("/login")
          removeAllSession();
          user.isLogin = false;
          successMsg(res.message)
        })
      })
}

onMounted(() => {
  if (getSession("userName")){
    user.userName = getSession("userName");
    user.isLogin = true;
  }
})

</script>

<style scoped>

h4 {
  color: #9acfea;
  margin-top: 15px;
  padding-left: 30px;
}

.logout {
  padding-right: 50px;
  cursor: pointer;
}

.logout:hover {
  color: #00CCFF;
}
</style>
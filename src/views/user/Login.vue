<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <div><a class="navbar-brand" href="index.html" style="font-size:32px;">尚筹网-创意产品众筹平台</a></div>
        </div>
      </div>
    </nav>
    <div class="container">
      <el-row justify="center">
        <el-col :span="10">
          <el-form
              ref="formRef"
              :model="formData"
              label-width="100px"
              :rules="rules"
          >
            <h2 class="form-signin-heading"><i class="glyphicon glyphicon-log-in"></i> 用户登录</h2>
            <div class="form-group has-success has-feedback">
              <el-form-item
                  label="登录账号"
                  prop="loginAcct"
              >
                <el-input
                    size="large"
                    v-model="formData.loginAcct"
                    placeholder="请输入登录账号"
                />
              </el-form-item>
              <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
            <div class="form-group has-success has-feedback">
              <el-form-item
                  label="登录密码"
                  prop="userPassword"
              >
                <el-input
                    size="large"
                    v-model="formData.userPassword"
                    placeholder="请输入登录密码"
                />
              </el-form-item>
              <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
          </el-form>
          <el-button type="warning" @click="registerBtn">我要注册</el-button>
          <el-button type="primary" @click="loginBtn(formRef)">登录</el-button>
        </el-col>
      </el-row>


    </div>
  </div>
</template>

<script setup>


import {onMounted, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {memberLogin, queryMember} from "@/api/member/user";
import {
  errorsMsg,
  removeAllLocalStorage,
  removeAllSession,
  setLocalStorage,
  setSession,
  successMsg
} from "@/utils/web-utils";
import md5 from "blueimp-md5";

import {userStore} from "@/store/userstore";

const router = useRouter()

const formRef = ref(null)

const formData = reactive({
  loginAcct: 'admin',
  userPassword: '123456',
})


const registerBtn = () => {
  router.push("/register")
}

const rules = reactive({
  phone: [
    {required: true, message: '请输入手机号码', trigger: 'blur'},
    {min: 8, max: 11, message: '请输入正确手机号码', trigger: 'blur'},
  ],
  loginAcct: [
    {required: true, message: '请输入登录账号', trigger: 'blur'},
  ],
  userPassword: [
    {required: true, message: '请输入登录密码', trigger: 'blur'},
  ],
  code: [
    {required: true, message: '请输入验证码', trigger: 'blur'},
  ],

})

const userStores = userStore();


const loginBtn = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      removeAllSession();
      removeAllLocalStorage()
      await memberLogin({
        loginAcct: formData.loginAcct,
        userPassword: md5(formData.userPassword)
      }).then(res => {
        if (res.code !== 200) {
          return errorsMsg(res.message)
        }
        // 登录成功
        setSession("token", res.data.token)
      })

      await queryMember().then(res => {
        if (res.code !== 200) {
          // router.push("/login")
          return errorsMsg(res.message)
        }
        // 登录成功
        setSession("userName", res.data.userName)
        router.push("/")
        return successMsg("登录成功")
      })
    }
  })
}


</script>

<style scoped>

button {
  margin: 10px 50px;
}

.el-row {
  margin-top: 100px;
}

</style>
<template>
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <div><a class="navbar-brand" href="index.html" style="font-size:32px;">尚筹网-创意产品众筹平台</a></div>
      </div>
    </div>
  </nav>
  <div class="container-login">
    <el-form
        ref="formRef"
        :model="adminForm"
        :rules="rules"
        class="form-signin"
    >
      <h2 class="form-signin-heading"><i class="glyphicon glyphicon-log-in"></i> 管理员登录</h2>
      <div class="form-group has-success has-feedback">
        <el-form-item prop="loginAcct">
          <input v-model="adminForm.loginAcct" type="text" class="form-control" placeholder="请输入登录账号"
                 style="margin-top:-2px;" autofocus/>
        </el-form-item>
        <span class="glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      <div class="form-group has-success has-feedback">
        <el-form-item prop="userPswd">
          <input v-model="adminForm.userPswd" type="text" class="form-control" placeholder="请输入登录密码"
                 style="margin-top:-2px;"/>
        </el-form-item>
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <el-button @click="resetForm(formRef)" style="margin-right: 50px" type="danger">重置</el-button>
      <el-button @click="submitForm(formRef)" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script setup>
import {adminLogin} from "@/api/admin";
import {reactive, ref} from "vue";
import md5 from "blueimp-md5"
import {errorsMsg, setSession, successMsg} from '@/utils/web-utils'
import {useRouter} from "vue-router";

const formRef = ref(null);

const adminForm = reactive({
  userName: 'admin',
  loginAcct: 'admin',
  userPswd: '123456',
})

const rules = reactive({
  loginAcct: [
    {required: true, message: '请输入账号', trigger: 'blur'},
  ],
  userPswd: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
});

const router = useRouter()


/**
 * 管理员登录
 * @param params 用户名和密码
 */
const adminLoginFun = (params) => {
  adminLogin(params).then((res) => {
    if (res.code !== 200) {
      return errorsMsg(res.message)
    }
    console.log(res)
    router.push("/admin/main")
    setSession("sessionId",res.data.sessionId)
    return successMsg(res.message);
  })
}

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      adminLoginFun({
        loginAcct: adminForm.loginAcct,
        userPswd: md5(adminForm.userPswd).toUpperCase()
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}


</script>

<style scoped>
div.container-login{
  margin-top: 100px;
}
</style>
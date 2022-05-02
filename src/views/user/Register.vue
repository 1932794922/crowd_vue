<template>
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <div><a class="navbar-brand" href="index.html" style="font-size:32px;">尚筹网-创意产品众筹平台</a></div>
      </div>
    </div>
  </nav>
  <div class="container">
    <el-row justify="center">
      <el-col :span="12">
        <el-form
            ref="formRef"
            :model="formData"
            label-width="100px"
            :rules="rules"
        >
          <h2 class="form-signin-heading"><i class="glyphicon glyphicon-log-in"></i> 用户注册</h2>
          <div class="form-group has-success has-feedback">
            <el-form-item
                label="用户名"
                prop="userName"
            >
              <el-input
                  v-model="formData.userName"
                  placeholder="请输入用户名"
              />
            </el-form-item>
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
          <div class="form-group has-success has-feedback">
            <el-form-item
                label="登录账号"
                prop="loginAcct"
            >
              <el-input
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
                  v-model="formData.userPassword"
                  placeholder="请输入登录密码"
              />
            </el-form-item>
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="form-group has-success has-feedback">
            <el-form-item
                label="邮箱地址"
                prop="email"
            >
              <el-input
                  v-model="formData.email"
                  placeholder="请输入邮箱地址"
              />
            </el-form-item>
            <span class="glyphicon glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-success has-feedback">
            <el-form-item
                label="手机号"
                prop="phone"
            >
              <el-input
                  v-model="formData.phone"
                  type="text"
                  placeholder="请输入手机号"
              />
            </el-form-item>
            <span class="glyphicon glyphicon glyphicon-earphone form-control-feedback"></span>
          </div>
          <div class="form-group has-success has-feedback">
            <el-form-item
                label="验证码"
                prop="code"
            >
              <el-input
                  v-model="formData.code"
                  placeholder="请输入验证码"
              />
            </el-form-item>

            <span class="glyphicon glyphicon glyphicon-comment form-control-feedback"></span>
            <el-button :disabled="timer!==0" class="btn-code" @click="sendCode" type="success">{{
                timer === 0 ? "获取验证码" : timer + "秒后重试"
              }}
            </el-button>
          </div>
          <el-button type="danger" @click="resetForm(formRef)">重置</el-button>
          <el-button type="primary" @click="submitRegister">注册</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {reactive, ref} from 'vue'
import {useIntervalFn} from '@vueuse/core'
import {errorsMsg, successMsg} from "@/utils/web-utils";
import {getPhoneCode, memberRegister} from "@/api/member/user"
import {useRouter} from "vue-router";
import md5 from "blueimp-md5";

const formRef = ref(null)

const router = useRouter()

// 倒计时
const timer = ref(0)

const formData = reactive({
  loginAcct: 'admin',
  userPassword: '123456',
  userName: 'admin',
  email: 'admin@qq.com',
  phone: '19178851803',
  code: ''
})


// 发送验证码倒计时
// useIntervalFn(定时的回调，回调的时间间隔，控制回调的调用方式)
// 参数三 {immediate: true, immediateCallback: false}
// 3-1) immediate 首次运行useIntervalFn函数时，是否立刻开启定时任务（默认值true表示默认开启）
// 3-2）immediateCallback 执行useIntervalFn函数立刻执行回调（在延时时间的前或者后调用），默认值是false，如果修改为true，表示为不延时，立刻启动定时任务（不要使用pause方法）
// pause暂停；resume启动
const {pause, resume} = useIntervalFn(
    () => {
      if (timer.value <= 0) {
        // 停止定时任务
        pause()
      } else {
        // 单次定时任务执行的回调
        timer.value--
      }
    },
    1000,
    {
      // 默认不开启定时任务
      immediate: false
    }
)

/**
 * 获取验证码
 */

const sendCode = () => {

  // 把检验验证码规则关闭
  rules.code[0].required = false;

  const data = submitForm(formRef.value)
  data.then(() => {
    // 开启倒计时效果
    if (timer.value === 0) {
      timer.value = 30;
      resume();
    } else {
      return;
    }
    // 这里写向后台发送请求的代码
    console.log('发送请求')
    getPhoneCode({
      phone: formData.phone
    }).then(res => {
      return successMsg(res.message)
    }).catch(err => {
      return errorsMsg(err.message)
    })
  }).catch((err) => {
    return errorsMsg(err.message)
  })

}

/**
 * 提交注册
 */
const submitRegister = () => {
  // 把检验验证码规则打开
  rules.code[0].required = true;
  const data = submitForm(formRef.value)
  data.then((res) => {

    memberRegister({
      ...formData,
      userPassword: md5(formData.userPassword)
    }).then(res => {
      if (res.code !== 200) {
        return errorsMsg(res.message)
      }
      router.push("/login")
      return successMsg(res.message)

    }).catch(err => {
      console.log(err)
    })

  }).catch((err) => {
    return errorsMsg(err.message)
  })
}


const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      Object.keys(fields).forEach((item) => {
        let message = fields[item]?.[0].message
        throw new Error(message)
      })
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}


const rules = reactive({
  phone: [
    {required: true, message: '请输入手机号码', trigger: 'blur'},
    {min: 8, max: 11, message: '请输入正确手机号码', trigger: 'blur'},
  ],
  loginAcct: [
    {required: true, message: '请输入登录账号', trigger: 'blur'},
  ],

  userName: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
  ],
  userPassword: [
    {required: true, message: '请输入登录密码', trigger: 'blur'},
  ],
  code: [
    {required: true, message: '请输入验证码', trigger: 'blur'},
  ],
  email: [
    {min: 1, message: '请输入正确邮箱地址', trigger: 'blur'},
  ],

})

</script>

<style scoped>

.btn-code {
  position: relative;
  right: -345px;
  top: -52px;
}

button {
  width: 100px;
  margin: 0 30px;
}
</style>
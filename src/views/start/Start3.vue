<template>
  <div class="container theme-showcase" role="main">
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <nav class="navbar navbar-default" role="navigation">
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li>
                  <router-link :to="{path:'/'}"><i class="glyphicon glyphicon-home"></i> 众筹首页</router-link>
                </li>
                <li>
                  <router-link :to="{name:'ProjectList'}"><i class="glyphicon glyphicon-th-large"></i> 项目总览
                  </router-link>
                </li>
                <li class="active">
                  <router-link :to="{name:'Start'}"><i class="glyphicon glyphicon-edit"></i> 发起项目</router-link>
                </li>
                <li>
                  <router-link :to="{name:'Member'}"><i class="glyphicon glyphicon-user"></i>
                    我的众筹
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <div class="panel panel-default">
            <div class="panel-heading" style="text-align:center;">
              <div class="container-fluid">
                <div class="row clearfix">
                  <div class="col-md-3 column">
                    <div class="progress"
                         style="height:50px;border-radius:0;    position: absolute;width: 75%;right:49px;">
                      <div class="progress-bar progress-bar-default" role="progressbar" aria-valuenow="60"
                           aria-valuemin="0" aria-valuemax="100" style="width: 100%;height:50px;">
                        <div style="font-size:16px;margin-top:15px;">1. 项目及发起人信息</div>
                      </div>
                    </div>
                    <div style="right: 0;border:10px solid #ddd;border-left-color: #88b7d5;border-width: 25px;position: absolute;
                                             border-left-color: rgba(221, 221, 221, 1);
                                             border-top-color: rgba(221, 221, 221, 0);
                                             border-bottom-color: rgba(221, 221, 221, 0);
                                             border-right-color: rgba(221, 221, 221, 0);
                                        ">
                    </div>
                  </div>
                  <div class="col-md-3 column">
                    <div class="progress" style="height:50px;border-radius:0;position: absolute;width: 75%;right:49px;">
                      <div class="progress-bar progress-bar-default" role="progressbar" aria-valuenow="60"
                           aria-valuemin="0" aria-valuemax="100" style="width: 100%;height:50px;">
                        <div style="font-size:16px;margin-top:15px;">2. 回报设置</div>
                      </div>
                    </div>
                    <div style="right: 0;border:10px solid #ddd;border-left-color: #88b7d5;border-width: 25px;position: absolute;
                                             border-left-color: rgba(221, 221, 221, 1);
                                             border-top-color: rgba(221, 221, 221, 0);
                                             border-bottom-color: rgba(221, 221, 221, 0);
                                             border-right-color: rgba(221, 221, 221, 0);
                                        ">
                    </div>
                  </div>
                  <div class="col-md-3 column">
                    <div class="progress" style="height:50px;border-radius:0;position: absolute;width: 75%;right:49px;">
                      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60"
                           aria-valuemin="0" aria-valuemax="100" style="width: 100%;height:50px;">
                        <div style="font-size:16px;margin-top:15px;">3. 确认信息</div>
                      </div>
                    </div>
                    <div style="right: 0;border:10px solid #ddd;border-left-color: #88b7d5;border-width: 25px;position: absolute;
                                             border-left-color: rgba(92, 184, 92, 1);
                                             border-top-color: rgba(92, 184, 92, 0);
                                             border-bottom-color: rgba(92, 184, 92, 0);
                                             border-right-color: rgba(92, 184, 92, 0);
                                        ">
                    </div>
                  </div>
                  <div class="col-md-3 column">
                    <div class="progress" style="height:50px;border-radius:0;">
                      <div class="progress-bar progress-bar-default" role="progressbar" aria-valuenow="60"
                           aria-valuemin="0" aria-valuemax="100" style="width: 100%;height:50px;">
                        <div style="font-size:16px;margin-top:15px;">4. 完成</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-body">

              <div class="container-fluid">
                <div class="row clearfix">
                  <div class="col-md-12 column">
                    <blockquote style="border-left: 5px solid #f60;color:#f60;padding: 0 0 0 20px;">
                      <b>
                        确认信息（请填写易付宝企业账号用于收款及身份核实）
                      </b>
                    </blockquote>
                  </div>
                  <div class="col-md-12 column">


                    <div class="row clearfix">
                      <div class="col-md-6 column">
                        <el-form :model="confirmInfo"
                                 ref="formRef"
                                 :rules="rules"
                                 hide-required-asterisk
                        >
                          <div class="form-group">
                            <label>易付宝企业账号：</label>
                            <el-form-item
                                prop="payNum"
                            >
                            <el-input
                                v-model="confirmInfo.payNum"
                                oninput="value=value.replace(/[^\d.]/g,'')"
                                type="text"/>
                            </el-form-item>
                            <br/>
                          </div>
                          <div class="form-group">
                            <label>法人身份证号：</label>
                            <el-form-item
                                prop="cardNum"
                            >
                            <el-input
                                v-model="confirmInfo.cardNum"
                                oninput="value=value.replace(/[^\d.]/g,'')"
                                type="text"/>
                            </el-form-item>
                            <br/>
                          </div>
                        </el-form>
                      </div>
                      <div class="col-md-6 column">
                        <div class="panel panel-default">
                          <div class="panel-body" style="padding:40px;">
                            <i class="glyphicon glyphicon-user"></i> 易购账户名：18801282948<br><br><span
                              style="margin-left:60px;">您正在使用该账号发起众筹项目</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-footer" style="text-align:center;">
              <button type="button" class="btn  btn-default btn-lg" @click="perStep">上一步</button>
              <button type="button" class="btn  btn-warning btn-lg" @click="nextStep(formRef)">提交</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script setup>

import {useRouter} from "vue-router";
import {reactive, ref} from "vue";
import {projectConfirm} from "@/api/member/memberProject";
import {errorsMsg, successMsg} from "@/utils/web-utils";

const router = useRouter();

const formRef = ref();

const confirmInfo = reactive({
  payNum: '',
  cardNum: '',
})

const rules = reactive({
  payNum: [
    {
      required: true,
      message: '请输入易付宝企业账号',
      trigger: 'blur',
    },
  ],
  cardNum: [
    {
      required: true,
      message: '请输入法人身份证号',
      trigger: 'blur',
    },
  ],
})

const perStep = () => {
  router.push({name: "Start2"})
}

const nextStep = async (formRef) => {
  if (!formRef) return
  await formRef.validate((valid) => {
    if (valid) {
      projectConfirm({...confirmInfo}).then(res => {
        if (res.code === 301){
          errorsMsg(res.message)
          return router.push({name: "Start1"})
        }
        if (res.code !== 200) {
          return errorsMsg(res.message)
        }
        successMsg(res.message)
        router.push({name: "Start4"})
      }).catch(err => {

      })
    } else {
      console.log('error submit!')
      return false
    }
  })



}

</script>

<style lang="scss" scoped>
#footer {
  padding: 15px 0;
  background: #fff;
  border-top: 1px solid #ddd;
  text-align: center;
}

#topcontrol {
  color: #fff;
  z-index: 99;
  width: 30px;
  height: 30px;
  font-size: 20px;
  background: #222;
  position: relative;
  right: 14px !important;
  bottom: 11px !important;
  border-radius: 3px !important;
}

#topcontrol:after {
  /*top: -2px;*/
  left: 8.5px;
  content: "\f106";
  position: absolute;
  text-align: center;
  font-family: FontAwesome;
}

#topcontrol:hover {
  color: #fff;
  background: #18ba9b;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.label-type, .label-status, .label-order {
  background-color: #fff;
  color: #f60;
  padding: 5px;
  border: 1px #f60 solid;
}

#typeList :not(:first-child) {
  margin-top: 20px;
}

.label-txt {
  margin: 10px 10px;
  border: 1px solid #ddd;
  padding: 4px;
  font-size: 14px;
}

.panel {
  border-radius: 0;
}

.progress-bar-default {
  background-color: #ddd;
}
.panel-footer{
  button{
    margin-right: 30px;
  }
}
</style>
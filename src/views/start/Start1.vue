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
          <div class="panel panel-default" style="text-align: start;">
            <div class="panel-heading">
              <div class="container-fluid">
                <div class="row clearfix">
                  <div class="col-md-3 column">
                    <div class="progress"
                         style="height:50px;border-radius:0;    position: absolute;width: 75%;right:49px;">
                      <div class="progress-bar progress-bar-success" role="progressbar"
                           aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                           style="width: 100%;height:50px;">
                        <div style="font-size:16px;margin-top:15px;">1. 项目及发起人信息</div>
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
                    <div class="progress"
                         style="height:50px;border-radius:0;position: absolute;width: 75%;right:49px;">
                      <div class="progress-bar progress-bar-default" role="progressbar"
                           aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                           style="width: 100%;height:50px;">
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
                    <div class="progress"
                         style="height:50px;border-radius:0;position: absolute;width: 75%;right:49px;">
                      <div class="progress-bar progress-bar-default" role="progressbar"
                           aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                           style="width: 100%;height:50px;">
                        <div style="font-size:16px;margin-top:15px;">3. 确认信息</div>
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
                    <div class="progress" style="height:50px;border-radius:0;">
                      <div class="progress-bar progress-bar-default" role="progressbar"
                           aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                           style="width: 100%;height:50px;">
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
                        项目及发起人信息
                      </b>
                    </blockquote>
                  </div>
                  <div class="col-md-12 column">
                    <div class="page-header" style=" border-bottom-style: dashed;">
                      <h3>
                        项目信息
                      </h3>
                    </div>
                    <el-form
                        ref="formRef"
                        :rules="rules"
                        :model="dynamicTags.form"
                        hide-required-asterisk
                        class="form-horizontal">
                      <div class="form-group">
                        <label class="col-sm-2 control-label">分类信息</label>
                        <div class="col-sm-10">
                          <el-form-item
                              prop="typeIdList"
                          >
                          <el-checkbox-group v-model="dynamicTags.typeIdListValue">
                            <template v-for="(item,index) in dynamicTags.typeIdList " :key="index">
                              <el-checkbox :label="item.label">{{ item.title }}</el-checkbox>
                            </template>
                          </el-checkbox-group>
                          </el-form-item>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">标签</label>
                        <div class="col-sm-10">
                          <el-check-tag
                              v-for="(item,index) in dynamicTags.tagIdList"
                              :key="index"
                              :checked="item.checked" @change="onChange(!item.checked,index)"
                              closable
                          >
                            {{ item.label }}
                          </el-check-tag>
                          <el-input
                              v-if="inputVisible"
                              ref="InputRef"
                              v-model="inputValue"
                              class="ml-1 w-20"
                              size="small"
                              placeholder="请输入标签"
                              @keyup.enter="handleInputConfirm"
                              @blur="handleInputConfirm"
                          />
                          <el-button type="warning" v-else class="button-new-tag ml-1" size="small" @click="showInput">
                            + 添加标签
                          </el-button>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">项目名称</label>
                        <div class="col-sm-10">
                          <el-form-item
                              prop="projectName"
                          >
                            <el-input v-model="dynamicTags.form.projectName" type="text"/>
                          </el-form-item>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">一句话简介</label>
                        <div class="col-sm-10">
                          <el-form-item
                              prop="projectDescription"
                          >
                            <el-input
                                v-model="dynamicTags.form.projectDescription"
                                type="textarea" :autosize="
                            { minRows: 2, maxRows: 6 }
                          "/>
                          </el-form-item>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">筹资金额（元）</label>
                        <div class="col-sm-10">
                          <el-form-item
                              prop="projectDescription"
                          >
                            <el-input
                                v-model.number="dynamicTags.form.money"
                                oninput="value=value.replace(/[^\d.]/g,'')"
                                type="text" style="width:100px;"/>
                          </el-form-item>
                          <label class="control-label">筹资金额不能低于100元,不能高于1000000000元</label>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">筹资天数（天）</label>
                        <div class="col-sm-10">
                          <el-form-item
                              prop="day"
                          >
                            <el-input
                                v-model.number="dynamicTags.form.day"
                                oninput="value=value.replace(/[^\d.]/g,'')"
                                type="text" style="width:100px;"/>
                          </el-form-item>
                          <label class="control-label">一般10-90天，建议30天</label>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">项目头图</label>
                        <div class="col-sm-10">
                          <Upload
                              :uploadUrl="'project/upload/image'"
                              :uploadLimit="1"
                              ref="headerPicturePathRef"></Upload>
                          <label class="control-label">图片上无文字,支持jpg、jpeg、png、gif格式，大小不超过2M，建议尺寸：740*457px</label>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">项目详情</label>
                        <div class="col-sm-10">
                          <Upload
                              :uploadUrl="'project/upload/image'"
                              :uploadLimit="20"
                              ref="detailPicturePathRef"></Upload>
                          <label class="control-label">支持jpg、jpeg、png、gif格式，大小不超过2M，建议尺寸：宽740px</label>
                        </div>
                      </div>
                      <div class="col-md-12 column">
                        <div class="page-header" style="    border-bottom-style: dashed;">
                          <h3>
                            发起人信息
                          </h3>
                        </div>
                        <div class="form-group">
                          <label class="col-sm-2 control-label">自我介绍</label>
                          <div class="col-sm-10">
                            <el-form-item
                                prop="memberLaunchInfoVO.descriptionSimple"
                            >
                              <el-input
                                  v-model="dynamicTags.form.memberLaunchInfoVO.descriptionSimple"
                                  type="text" placeholder="一句话自我介绍，不超过40字">
                              </el-input>
                            </el-form-item>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-sm-2 control-label">详细自我介绍</label>
                          <div class="col-sm-10">
                            <el-form-item
                                prop="memberLaunchInfoVO.descriptionDetail"
                            >
                              <el-input
                                  v-model="dynamicTags.form.memberLaunchInfoVO.descriptionDetail"
                                  placeholder="向支持者详细介绍你自己或你的团队及项目背景，让支持者在最短时间内了解你，不超过160字" type="textarea" :autosize="
                            { minRows: 4 }
                          "/>
                            </el-form-item>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-sm-2 control-label">联系电话</label>
                          <div class="col-sm-10">
                            <el-form-item
                                prop="memberLaunchInfoVO.phoneNum">
                              <el-input
                                  v-model="dynamicTags.form.memberLaunchInfoVO.phoneNum"
                                  type="text" placeholder="此信息不会显示在项目页面"/>
                            </el-form-item>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-sm-2 control-label">客服电话</label>
                          <div class="col-sm-10">
                            <el-form-item
                                prop="memberLaunchInfoVO.serviceNum">
                              <el-input
                                  v-model="dynamicTags.form.memberLaunchInfoVO.serviceNum"
                                  type="text" placeholder="此信息显示在项目页面"/>
                            </el-form-item>
                          </div>
                        </div>
                      </div>
                    </el-form>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-footer" style="text-align:center;">
              <button type="button" class="btn  btn-warning btn-lg"
                      @click="nextStep(formRef)">下一步
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  <!-- /container -->
</template>

<script setup>

import {creatProjects} from "@/api/member/memberProject";
import {useRouter} from "vue-router";
import {nextTick, reactive, ref} from "vue";
import Upload from "@/views/start/component/Upload.vue";
import Footer from "@/components/Footer.vue";
import {isEmpty} from "lodash/lang";
import {errorsMsg} from "@/utils/web-utils";

const router = useRouter();

const formRef = ref(null);

const rules = reactive({
  typeIdListValue: [
    {
      required: true,
      message: '请选择项目类型',
      trigger: 'blur',
      type: 'array'
    },
  ],
  projectName: [
    {
      required: true,
      message: '请输入项目名称',
      trigger: 'blur',
    },
  ],
  projectDescription: [
    {
      required: true,
      message: '请输入项目描述',
      trigger: 'blur',
    },
  ],
  money: [
    {
      required: true,
      message: '请输入筹资金额',
      trigger: 'blur',
    },
  ],
  day: [
    {
      required: true,
      message: '请输入筹资天数',
      trigger: 'blur',
    },
  ],
  "memberLaunchInfoVO.descriptionSimple": [
    {
      required: true,
      message: '请输入自我介绍',
      trigger: 'blur',
    },
  ],
  "memberLaunchInfoVO.descriptionDetail": [
    {
      required: true,
      message: '请输入详细介绍',
      trigger: 'blur',
    },
  ],
  "memberLaunchInfoVO.phoneNum": [
    {
      required: true,
      message: '请输入联系电话',
      trigger: 'blur',
    },
  ],
  "memberLaunchInfoVO.serviceNum": [
    {
      required: true,
      message: '请输入客服电话',
      trigger: 'blur',
    },
  ],
})


const dynamicTags = reactive({
  typeIdList: [
      {
    label: 1,
    title: "科技"
  }, {
    label: 2,
    title: "设计"
  }, {
    label: 3,
    title: "农业"
  }, {
    label: 4,
    title: "公益"
  }, {
    label: 5,
    title: "其他"
  }
  ],

  typeIdListValue: [1],

  form: {
    // 分类id集合
    typeIdList: [],
    // 标签id集合
    tagIdList: [],
    // 项目名称
    projectName: "我是项目名称",
    // 项目描述
    projectDescription: "我是项目描述",
    // 计划筹集的金额
    money: 500,
    // 筹集资金的天数
    day: 5,
    // 头图的路径
    headerPicturePath: null,
    // 详情图片的路径
    detailPicturePathList: [],
    memberLaunchInfoVO: {
      // 简单介绍
      descriptionSimple: "我是简单介绍",
      // 详细介绍
      descriptionDetail: "详细介绍",
      // 联系电话
      phoneNum: "10086",
      // 客服电话
      serviceNum: "1008611"
    }
  },

  tagIdList: [
    {
      label: '技术',
      checked: true,
      value: 1

    },
    {
      label: '数码',
      checked: false,
      value: 2
    }, {
      label: '游戏',
      checked: false,
      value: 3
    }
  ],
})

const inputValue = ref('')

const inputVisible = ref(false)

const headerPicturePathRef = ref()

const detailPicturePathRef = ref()

const InputRef = ref()


const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value?.input?.focus()
  })
}

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.tagIdList.push({
      label: inputValue.value,
      checked: true,
      value: dynamicTags.tagIdList.length + 1
    })
  }
  inputVisible.value = false
  inputValue.value = ''
}


const onChange = (status, index) => {
  dynamicTags.tagIdList[index].checked = status
}

const nextStep =async (formRef) => {
  if (!formRef) return
  await formRef.validate((valid, fields) => {
    if (valid) {
      dynamicTags.form.detailPicturePathList = !isEmpty(detailPicturePathRef.value.parentPos?.data) ?
          detailPicturePathRef.value.parentPos?.data.detailPicturePathList : null
      dynamicTags.form.headerPicturePath = !isEmpty(headerPicturePathRef.value.parentPos?.data) ?
          headerPicturePathRef.value.parentPos?.data.headerPicturePath : null
      dynamicTags.form.typeIdList = dynamicTags.typeIdListValue
      dynamicTags.form.tagIdList = []
      // 封装数据
      dynamicTags.tagIdList.forEach((item) => {
        if (item.checked) {
          dynamicTags.form.tagIdList.push(item.value)
        }
        // dynamicTags.form.tagIdList.push(item.value)
      })


      console.log(dynamicTags.form)
      creatProjects({...dynamicTags.form}).then(res => {
        router.push({name: "Start2"})
      }).catch(err => {
      })
    } else {
      Object.keys(fields).forEach(key => {
       throw   errorsMsg(fields[key]?.[0]?.message)
      })

      errorsMsg(fields)
      return false
    }
  })

}

</script>

<style lang="scss" scoped>

.w-20 {
  margin-top: 20px;
}

.el-check-tag {
  margin: 0 10px;

}

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


</style>
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
          <div class="panel panel-default" style="text-align:start;">
            <div class="panel-heading">
              <div class="container-fluid">
                <div class="row clearfix">
                  <div class="col-md-3 column">
                    <div class="progress"
                         style="height:50px;border-radius:0;    position: absolute;width: 75%;right:49px;">
                      <div class="progress-bar progress-bar-default" role="progressbar"
                           aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                           style="width: 100%;height:50px;">
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
                    <div class="progress"
                         style="height:50px;border-radius:0;position: absolute;width: 75%;right:49px;">
                      <div class="progress-bar progress-bar-success" role="progressbar"
                           aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                           style="width: 100%;height:50px;">
                        <div style="font-size:16px;margin-top:15px;">2. 回报设置</div>
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
                        回报设置
                      </b>
                    </blockquote>
                  </div>
                  <div class="col-md-12 column">
                    <el-table
                        border
                        stripe
                        highlight-current-row
                        :data="tableData" style="width: 100%">
                      <el-table-column label="序号" type="index" width="80"></el-table-column>
                      <el-table-column   align="center" prop="supportMoney" label="支付金额">
                        <template #default="scope">{{ scope.row.supportMoney || "无" }}</template>
                      </el-table-column>
                      <el-table-column    align="center" prop="count" label="名额">
                        <template #default="scope">{{ scope.row.count === 0 ? "不限回报数量" : scope.row.count }}</template>
                      </el-table-column>
                      <el-table-column   align="center" prop="signalPurchase" label="单笔限购">
                        <template #default="scope">{{
                            scope.row.signalPurchase === 0 ? "不限购" : scope.row.purchase
                          }}
                        </template>
                      </el-table-column>
                      <el-table-column   align="center" prop="type" label="回报类型">
                        <template #default="scope">{{ scope.row.type === 0 ? "实物回报" : "虚拟物品回报" }}</template>
                      </el-table-column>
                      <el-table-column   align="center" prop="content" label="回报内容">
                        <template #default="scope">{{ scope.row.content || "无" }}</template>
                      </el-table-column>
                      <el-table-column   align="center" prop="returnDate" label="回报时间">
                        <template #default="scope">{{ scope.row.returnDate > 15 ? "大于15天内" :`${scope.row.returnDate}天内` }}</template>
                      </el-table-column>
                      <el-table-column   align="center" prop="freight" label="运费">
                        <template #default="scope">{{ scope.row.freight || "包邮" }}</template>
                      </el-table-column>


                      <el-table-column   align="center" label="操作" width="150">
                        <template #default="scope">
                          <el-button size="small" @click="handleEdit(scope.$index, scope.row,UPDATE)"
                          >编辑
                          </el-button
                          >
                          <el-button
                              size="small"
                              type="danger"
                              @click="handleDelete(scope.$index)"
                          >删除
                          </el-button
                          >
                        </template>
                      </el-table-column>
                    </el-table>

                    <button @click="isShowReturn = !isShowReturn"
                            style="margin-top: 20px"
                            type="button" class="btn btn-primary btn-lg"><i
                        class="glyphicon glyphicon-plus"></i>
                      添加回报
                    </button>
                    <template v-if="isShowReturn">
                      <div style="border:10px solid #f60;border-bottom-color: #eceeef;border-width: 10px;width:20px;margin-left:20px;
                                             border-left-color: rgba(221, 221, 221, 0);
                                             border-top-color: rgba(221, 221, 221, 0);
                                             border-right-color: rgba(221, 221, 221, 0);
                                    "></div>
                      <div class="panel panel-default"
                           style="border-style: dashed;background-color:#eceeef">
                        <div class="panel-body">

                          <div class="col-md-12 column">
                            <form class="form-horizontal">
                              <div class="form-group">
                                <label
                                    class="col-sm-2 control-label">回报类型</label>
                                <div class="col-sm-10">

                                  <el-radio v-model="returnForm.type" :label="0" size="large">实物回报</el-radio>
                                  <el-radio v-model="returnForm.type" :label="1" size="large">虚拟物品回报</el-radio>

                                </div>
                              </div>
                              <div class="form-group">
                                <label class="col-sm-2 control-label">支持金额（元）</label>
                                <div class="col-sm-10">
                                  <el-input
                                      v-model="returnForm.supportMoney"
                                      oninput="value=value.replace(/[^\d.]/g,'')"
                                      type="text" style="width:100px;"/>
                                  <br/>
                                </div>
                              </div>
                              <div class="form-group">
                                <label class="col-sm-2 control-label">回报内容</label>
                                <div class="col-sm-10">
                                  <el-input
                                      v-model="returnForm.content"
                                      placeholder="简单描述回报内容，不超过200字" type="textarea"
                                      :autosize="{ minRows: 4 }"/>

                                </div>
                              </div>
                              <div class="form-group">
                                <label class="col-sm-2 control-label">说明图片</label>
                                <div class="col-sm-10">
                                  <Upload
                                      :uploadUrl="'project/return/upload/image'"
                                      :uploadLimit="1"
                                      ref="describePicPathUploadRef"></Upload>
                                  <label class="control-label">支持jpg、jpeg、png、gif格式，大小不超过2M，建议尺寸：760*510px选择文件</label>
                                </div>
                              </div>
                              <div class="form-group">
                                <label class="col-sm-2 control-label">回报数量（名）</label>
                                <div class="col-sm-10">
                                  <el-input
                                      v-model.number="returnForm.count"
                                      oninput="value=value.replace(/[^\d.]/g,'')"
                                      type="text" style="width:100px; margin-right: 20px"/>
                                  <label class="control-label"> 0 为不限回报数量</label>
                                </div>
                              </div>
                              <div class="form-group">
                                <label
                                    class="col-sm-2 control-label">单笔限购</label>
                                <div class="col-sm-10">

                                  <el-radio v-model="returnForm.signalPurchase" :label="0" size="large">不限购</el-radio>
                                  <el-radio v-model="returnForm.signalPurchase" :label="1" size="large">限购</el-radio>

                                  <br/>
                                  <template v-if="isShowPurchaseInput">
                                    <el-input

                                        v-model.number="returnForm.purchase"
                                        oninput="value=value.replace(/[^\d.]/g,'')"
                                        type="text" style="width:100px;"/>
                                    <br/>
                                    默认数量为1，且不超过上方已设置的回报数量
                                  </template>
                                </div>
                              </div>
                              <div class="form-group">
                                <label class="col-sm-2 control-label">运费(元)</label>
                                <div class="col-sm-10">
                                  <el-input
                                      v-model.number="returnForm.freight"
                                      oninput="value=value.replace(/[^\d.]/g,'')"
                                      type="text" style="width:100px; margin-right: 20px"/>
                                  <label class="control-label"> 0 为包邮</label>
                                </div>
                              </div>
                              <div class="form-group">
                                <label
                                    class="col-sm-2 control-label">发票</label>
                                <div class="col-sm-10">
                                  <el-radio v-model="returnForm.invoice" :label="0" size="large">不可开发票</el-radio>
                                  <el-radio v-model="returnForm.invoice" :label="1" size="large">可开发票（包括个人发票和自定义抬头发票）
                                  </el-radio>
                                </div>
                              </div>
                              <div class="form-group">
                                <label
                                    class="col-sm-2 control-label">回报时间</label>
                                <div class="col-sm-10">
                                  项目结束后
                                  <el-input
                                      v-model.number="returnForm.returnDate"
                                      oninput="value=value.replace(/[^\d.]/g,'')"
                                      type="text" style="width:50px;"/>
                                  天，向支持者发送回报.
                                </div>
                              </div>
                              <div class="form-group">
                                <label class="col-sm-2 control-label"></label>
                                <div class="col-sm-10 sum-btn">
                                  <el-button @click="submitReturnBtn" type="primary">确定</el-button>
                                  <el-button type="danger">取消</el-button>
                                </div>
                              </div>

                            </form>
                          </div>
                        </div>
                      </div>
                    </template>
                  </div>

                  <div class="container">
                    <div class="row">
                      <div class="col-md-12 column  tag">
                        <blockquote>
                          <p>
                            <i class="glyphicon glyphicon-info-sign" style="color:#2a6496;"></i>
                            提示
                          </p> <small>3个以上的回报：多些选择能提高项目的支持率。几十、几百、上千元的支持：3个不同档次的回报，能让你的项目更快成功。回报最好是项目的衍生品：<br>与项目内容有关的回报更能吸引到大家的支持。</small>
                        </blockquote>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div class="panel-footer" style="text-align:center;">
              <button type="button" class="btn  btn-default btn-lg"
                      @click="perStep">上一步
              </button>
              <button type="button" class="btn  btn-warning btn-lg"
                      @click="nextStep">下一步
              </button>
              <a class="btn"> 预览 </a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <Footer/>
  </div> <!-- /container -->
</template>

<script setup>
import {useRouter} from "vue-router";
import Upload from "@/views/start/component/Upload.vue";
import {computed, reactive, ref} from "vue";
import {cloneDeepWith, isEmpty} from "lodash/lang";
import {ADD, UPDATE} from "@/utils/constant";
import {creatReturn} from "@/api/member/memberProject";
import {errorsMsg} from "@/utils/web-utils";

const router = useRouter();

const describePicPathUploadRef = ref();

const isShowReturn = ref(false);

const tableData = ref([])

const isShowPurchaseInput = computed(
    () => {
      return returnForm.signalPurchase === 1;
    });


const returnForm = reactive({
  // 回报类型：0 - 实物回报， 1 虚拟物品回报
  type: 0,
  // 支持金额
  supportMoney: null,
  // 回报内容介绍
  content: null,
  // 总回报数量，0为不限制
  count: 0,
  // 是否限制单笔购买数量，0表示不限购，1表示限购
  signalPurchase: 0,
  // 如果单笔限购，那么具体的限购数量
  purchase: 1,
  // 运费，“0”为包邮
  freight: 0,
  // 是否开发票，0 - 不开发票， 1 - 开发票
  invoice: 0,
  // 众筹结束后返还回报物品天数
  returnDate: 0,
  // 说明图片路径
  describePicPath: '',
})

// 用于保存原有的数据结构
const tempReturnForm = cloneDeepWith(returnForm)


// 记录是添加还是修改
const addOrEdit = ref(ADD)


const perStep = () => {
  router.push({name: "Start1"})
}

const nextStep = () => {

  creatReturn(tableData.value || []).then(res => {
    if (res.code !== 200) {
      console.log(res)
      return errorsMsg(res.message)
    }
    router.push({name: "Start3"})
  }).catch(err => {

  });

  // router.push({name: "Start3"})
}

// 编辑
const handleEdit = (index, row, option) => {
  addOrEdit.value = option
  row.index = index
  Object.assign(returnForm, row)
  console.log(row)
  isShowReturn.value = true
}


const handleDelete = (index) => {
  tableData.value?.splice(index, 1)
}

const submitReturnBtn = () => {
  // 判断是否有新增还是修改
  returnForm.describePicPath = !isEmpty(describePicPathUploadRef.value.parentPos?.data) ?
      describePicPathUploadRef.value.parentPos?.data.describePicPath : null
  let temp = cloneDeepWith(returnForm)
  if (addOrEdit.value === ADD) {
    tableData.value.push(temp)
  } else {
    tableData.value[returnForm.index] = temp
  }
  // 清空回复表单
  Object.assign(returnForm, tempReturnForm)
  isShowReturn.value = false
  // 回复默认值
  addOrEdit.value = ADD
}


</script>

<style scoped>
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

.sum-btn {
  display: flex;
  justify-content: flex-end
}

.tag {
  margin-top: 20px;
}

</style>
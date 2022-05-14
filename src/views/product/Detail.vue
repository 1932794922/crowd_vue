<template>
  <div>
    <div class="container theme-showcase" role="main">
      <div class="container">
        <div class="row clearfix">
          <div class="col-md-12 column">
            <nav class="navbar navbar-default" role="navigation">
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                  <li>
                    <router-link rel="nofollow" to="/"><i class="glyphicon glyphicon-home"></i> 众筹首页</router-link>
                  </li>
                  <li>
                    <router-link rel="nofollow" to="/user/project-list"><i class="glyphicon glyphicon-th-large"></i>
                      众筹项目
                    </router-link>
                  </li>
                  <li>
                    <router-link rel="nofollow" to="/user/start"><i class="glyphicon glyphicon-edit"></i> 发起众筹
                    </router-link>
                  </li>
                  <li>
                    <router-link rel="nofollow" to="/user"><i class="glyphicon glyphicon-user"></i>
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
            <div class="jumbotron nofollow" style="    padding-top: 10px;">
              <h3>
                {{ detailProject.projectName }}
              </h3>
              <div style="float:left;width:70%;">
                {{ detailProject.projectDesc }}
              </div>
              <div style="float:right;">
                <button type="button" class="btn btn-default"><i style="color:#f60"
                                                                 class="glyphicon glyphicon-heart"></i>
                  关注 {{ detailProject.followerNum || '0' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container" v-if="!isEmpty(detailProject)">
        <div class="row clearfix">
          <div class="col-md-12 column">
            <div class="row clearfix">
              <div class="col-md-8 column">
                <div class="demo-image__lazy">
                  <el-image :src="detailProject.headerPicturePath" lazy
                            :preview-src-list="[detailProject.headerPicturePath]"
                  >
                    <template #error>
                      <div class="image-slot">
                        没有详情图片
                      </div>
                    </template>
                  </el-image>
                  <el-image v-for="url in detailProject.detailPicturePath || []" :key="url" :src="url"
                            :preview-src-list="detailProject.detailPicturePath"
                            lazy>
                    <template #error>
                      <div class="image-slot">
                        没有详情图片
                      </div>
                    </template>
                  </el-image>
                </div>
              </div>
              <div class="col-md-4 column">
                <div class="panel panel-default" style="border-radius: 0px;">
                  <div class="panel-heading" style="background-color: #fff;border-color: #fff;">

                    <span class="label label-success"><i class="glyphicon glyphicon-tag"></i>
                      {{ projectStatus(detailProject.status) }}
                    </span>
                  </div>
                  <div class="panel-body">
                    <h3>
                      已筹资金：￥{{ detailProject.supportMoney || '0' }}
                    </h3>
                    <p><span>目标金额 ： {{ detailProject.money || '0' }}</span></p>
                    <el-progress class="progress-box"
                                 :percentage="parseFloat(detailProject.percentage) || 0"
                                 :color="customColors"/>
                    <p>{{ !(detailProject.lastDate <= 0) ? `剩余${detailProject.lastDate || "0"}天` : '筹资已经结束' }} </p>
                    <div>
                      <p><span>已有 {{ detailProject.supportNum || '0' }}人支持该项目</span></p>
                      <button type="button" class="btn  btn-warning btn-lg btn-block" data-toggle="modal"
                              data-target="#myModal">立即支持
                      </button>
                    </div>
                  </div>
                  <div class="panel-footer" style="    background-color: #fff;
                                    border-top: 1px solid #ddd;
                                    border-bottom-right-radius: 0px;
                                    border-bottom-left-radius: 0px;">
                    <div class="container-fluid">
                      <div class="row clearfix">
                        <div class="col-md-3 column" style="padding:0;">
                          <img alt="140x140" src="~@/assets/img/services-box2.jpg"
                               data-holder-rendered="true" style="width: 80px; height: 80px;">
                        </div>
                        <div v-if="detailProject.memberLaunchInfoVO" class="col-md-9 column">
                          <div class="">
                            <h4>
                              <b>{{ detailProject.memberLaunchInfoVO?.descriptionDetail }}</b> <span
                                style="float:right;font-size:12px;"
                                class="label label-success">已认证</span>
                            </h4>
                            <p style="font-size:12px">
                              {{ detailProject.memberLaunchInfoVO?.descriptionSimple }}
                            </p>
                            <p style="font-size:12px">
                              手机电话:{{ detailProject.memberLaunchInfoVO?.phoneNum }}
                            </p>
                            <p style="font-size:12px">
                              客服电话:{{ detailProject.memberLaunchInfoVO?.serviceNum }}
                            </p>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <template v-if="detailProject.detailReturnVOList?.length !== 0"
                          v-for="(item,index) in detailProject.detailReturnVOList"
                          :key="index"
                >
                  <div class="panel panel-default" style="border-radius: 0px;">
                    <div class="panel-heading">
                      <h3>
                        ￥{{ item.supportMoney }} <span style="float:right;font-size:12px;">{{
                          item.signalPurchase === 0 ? "不限额" : `限额${item.count}位，剩余${item.purchase}位`
                        }}</span>
                      </h3>
                    </div>
                    <div class="panel-body">
                      <p>配送费用：{{ item.freight === 0 ? "包邮" : `${item.purchase} 元` }}</p>
                      <p>预计发放时间：项目筹款成功后的{{ item.returnDate }}天内</p>
                      <button type="button" class="btn  btn-warning btn-lg"
                              @click="goToSupport(item.id)">支持

                      </button>
                      <br><br>
                      <p>{{ item.content }}</p>
                    </div>
                  </div>
                </template>
                <div class=" panel panel-default" style="border-radius: 0px;">
                  <div class="panel-heading">
                    <h3>
                      风险提示
                    </h3>
                  </div>
                  <div class="panel-body">
                    <p>1.众筹并非商品交易，存在一定风险。支持者根据自己的判断选择、支持众筹项目，与发起人共同实现梦想并获得发起人承诺的回报。<br>
                      2.众筹平台仅提供平台网络空间及技术支持等中介服务，众筹仅存在于发起人和支持者之间，使用众筹平台产生的法律后果由发起人与支持者自行承担。<br>
                      3.本项目必须在2017-06-09之前达到￥10000.00 的目标才算成功，否则已经支持的订单将取消。订单取消或募集失败的，您支持的金额将原支付路径退回。<br>
                      4.请在支持项目后15分钟内付款，否则您的支持请求会被自动关闭。<br>
                      5.众筹成功后由发起人统一进行发货，售后服务由发起人统一提供；如果发生发起人无法发放回报、延迟发放回报、不提供回报后续服务等情况，您需要直接和发起人协商解决。<br>
                      6.如您不同意上述风险提示内容，您有权选择不支持；一旦选择支持，视为您已确认并同意以上提示内容。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div> <!-- /container -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog " style="width:960px;height:400px;" role="document">
        <div class="modal-content" data-spy="scroll" data-target="#myScrollspy">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">选择支持项</h4>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row clearfix">
                <div class="col-sm-3 col-md-3 column" id="myScrollspy">
                  <ul class="nav nav-tabs nav-stacked">
                    <li class="active"><a href="#section-1">￥1.00</a></li>
                    <li class="active"><a href="#section-2">￥149.00</a></li>
                    <li class="active"><a href="#section-3">￥249.00</a></li>
                    <li class="active"><a href="#section-4">￥549.00</a></li>
                    <li class="active"><a href="#section-5">￥1999.00</a></li>
                  </ul>
                </div>
                <div id="navList" class="col-sm-9 col-md-9 column" style="height:400px;overflow-y:auto;">
                  <h2 id="section-1" style="border-bottom:1px dashed #ddd;"><span
                      style="font-size:20px;font-weight:bold;">￥1.00</span><span
                      style="font-size:12px;margin-left:60px;">无限额，223位支持者</span></h2>
                  <p>配送费用：全国包邮</p>
                  <p>预计发放时间：项目筹款成功后的30天内</p>
                  <button type="button" class="btn  btn-warning btn-lg "
                          onclick="window.location.href='pay-step-1.html'">支持
                  </button>
                  <br><br>
                  <p>每满1750人抽取一台活性富氢净水直饮机，至少抽取一台。抽取名额（小数点后一位四舍五入）=参与人数÷1750人，由苏宁官方抽取。</p>
                  <hr>
                  <h2 id="section-2" style="border-bottom:1px dashed #ddd;"><span
                      style="font-size:20px;font-weight:bold;">￥149.00</span><span
                      style="font-size:12px;margin-left:60px;">无限额，223位支持者</span></h2>
                  <p>配送费用：全国包邮</p>
                  <p>预计发放时间：项目筹款成功后的30天内</p>
                  <button type="button" class="btn  btn-warning btn-lg "
                          onclick="window.location.href='pay-step-1.html'">支持
                  </button>
                  <br><br>
                  <p>每满1750人抽取一台活性富氢净水直饮机，至少抽取一台。抽取名额（小数点后一位四舍五入）=参与人数÷1750人，由苏宁官方抽取。</p>
                  <hr>
                  <h2 id="section-3" style="border-bottom:1px dashed #ddd;"><span
                      style="font-size:20px;font-weight:bold;">￥249.00</span><span
                      style="font-size:12px;margin-left:60px;">无限额，223位支持者</span></h2>
                  <p>配送费用：全国包邮</p>
                  <p>预计发放时间：项目筹款成功后的30天内</p>
                  <button type="button" class="btn  btn-warning btn-lg "
                          onclick="window.location.href='pay-step-1.html'">支持
                  </button>
                  <br><br>
                  <p>每满1750人抽取一台活性富氢净水直饮机，至少抽取一台。抽取名额（小数点后一位四舍五入）=参与人数÷1750人，由苏宁官方抽取。</p>
                  <hr>
                  <h2 id="section-4" style="border-bottom:1px dashed #ddd;"><span
                      style="font-size:20px;font-weight:bold;">￥549.00</span><span
                      style="font-size:12px;margin-left:60px;">无限额，223位支持者</span></h2>
                  <p>配送费用：全国包邮</p>
                  <p>预计发放时间：项目筹款成功后的30天内</p>
                  <button type="button" class="btn  btn-warning btn-lg "
                          onclick="window.location.href='pay-step-1.html'">支持
                  </button>
                  <br><br>
                  <p>每满1750人抽取一台活性富氢净水直饮机，至少抽取一台。抽取名额（小数点后一位四舍五入）=参与人数÷1750人，由苏宁官方抽取。</p>
                  <hr>
                  <h2 id="section-5" style="border-bottom:1px dashed #ddd;"><span
                      style="font-size:20px;font-weight:bold;">￥1999.00</span><span
                      style="font-size:12px;margin-left:60px;">无限额，223位支持者</span></h2>
                  <p>配送费用：全国包邮</p>
                  <p>预计发放时间：项目筹款成功后的30天内</p>
                  <button type="button" class="btn  btn-warning btn-lg "
                          onclick="window.location.href='pay-step-1.html'">支持
                  </button>
                  <br><br>
                  <p>每满1750人抽取一台活性富氢净水直饮机，至少抽取一台。抽取名额（小数点后一位四舍五入）=参与人数÷1750人，由苏宁官方抽取。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {isEmpty} from 'lodash/lang';
import {onBeforeMount,  reactive} from "vue";
import { queryProjectDetail} from "@/api/member/memberProject";
import {useRoute, useRouter} from "vue-router";

const detailProject = reactive({});
const customColors = [
  {color: '#f56c6c', percentage: 20},
  {color: '#e6a23c', percentage: 40},
  {color: '#5cb87a', percentage: 60},
  {color: '#1989fa', percentage: 80},
  {color: '#6f7ad3', percentage: 100},
]

const route = useRoute()
const router = useRouter()

// 0-即将开始，1-众筹中，2-众筹成功，3-众筹失败
const projectStatus = (status) => {
  switch (status) {
    case 0:
      return "即将开始"
    case 2 :
      return "众筹成功"
    case 3 :
      return "众筹失败"
    default:
      return "众筹中"

  }
};

const goToSupport = () => {
  let detailProjectObject = JSON.stringify(detailProject)
  router.push({name: "PayStepOne", params: {detailProject: detailProjectObject}})
}

onBeforeMount(() => {
  let id = route.params.projectId || "1"
  queryProjectDetail({id}).then(res => {
    Object.assign(detailProject, res.data)
  }).catch(err => {
  });
})
</script>

<style>
.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {
  border-bottom-color: #ddd;
}

.nav-tabs > li > a {
  border-radius: 0;
}

.demo-image__lazy {
  height: 1000px;
  overflow-y: auto;
}

.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}

.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}
</style>
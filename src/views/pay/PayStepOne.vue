<template>

  <div class="container theme-showcase" role="main">

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
                      <div class="progress-bar progress-bar-success" role="progressbar"
                           aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                           style="width: 100%;height:50px;">
                        <div style="font-size:16px;margin-top:15px;">1. 确认回报内容</div>
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
                        <div style="font-size:16px;margin-top:15px;">2. 确认订单</div>
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
                        <div style="font-size:16px;margin-top:15px;">3. 付款</div>
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
                        请确认您所选择的回报项信息和购买数量
                      </b>
                    </blockquote>
                  </div>
                  <div class="col-md-12 column">
                    <table align="center" class="table table-bordered" style="text-align:center;">
                      <thead>
                      <tr style="background-color:#ddd;">
                        <td>项目名称</td>
                        <td>发起人</td>
                        <td width="300">回报内容</td>
                        <td width="150">{{
                            `回报数量(${order.detailReturnVOList?.[0].signalPurchase === 0 ?
                                '不限购' : '限购数' + order.detailReturnVOList?.[0].purchase})`
                          }}
                        </td>
                        <td>支持单价</td>
                        <td>配送费用</td>
                      </tr>
                      </thead>
                      <tbody>
                      <tr align="center" style="text-align:center;">
                        <td>{{ order.projectName }}</td>
                        <td>{{ order.memberLaunchInfoVO?.descriptionSimple }}</td>
                        <td>{{ order.detailReturnVOList?.[0].content }}</td>
                        <td>
                          <el-input
                              v-model.number="orderForm.number"
                              style="width:60px;"
                              @input="changeNumber"
                          ></el-input>
                        </td>
                        <td style="color:#F60">￥ {{ order.detailReturnVOList?.[0].supportMoney }}</td>
                        <td style="color:#F60">
                          {{
                            order.detailReturnVOList?.[0].freight === 0 ? "免运费" : `￥ ${order.detailReturnVOList?.[0].freight} `
                          }}
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <div style="float:right;">
                      <p>总价(含运费)：<span style="font-size:16px;color:#F60;">￥{{ orderForm.total }}</span></p>
                      <button type="button" class="btn btn-warning btn-lg" style="float:right;"
                              @click="goToSettlement"><i
                          class="glyphicon glyphicon-credit-card"></i> 去结算
                      </button>
                    </div>
                  </div>

                  <div class="container">
                    <div class="row clearfix">
                      <div class="col-md-12 column">
                        <blockquote>
                          <p>
                            <i class="glyphicon glyphicon-info-sign" style="color:#2a6496;"></i>
                            提示
                          </p><br>
                          <span style="font-size:12px;">1.众筹并非商品交易，存在一定风险。支持者根据自己的判断选择、支持众筹项目，与发起人共同实现梦想并获得发起人承诺的回报。<br>
                                2.众筹平台仅提供平台网络空间及技术支持等中介服务，众筹仅存在于发起人和支持者之间，使用众筹平台产生的法律后果由发起人与支持者自行承担。<br>
                                3.本项目必须在2017-06-04之前达到 ￥1000000.00 的目标才算成功，否则已经支持的订单将取消。订单取消或募集失败的，您支持的金额将原支付路径退回。<br>
                                4.请在支持项目后15分钟内付款，否则您的支持请求会被自动关闭。<br>
                                5.众筹成功后由发起人统一进行发货，售后服务由发起人统一提供；如果发生发起人无法发放回报、延迟发放回报、不提供回报后续服务等情况，您需要直接和发起人协商解决。<br>
                                6.如您不同意上述风险提示内容，您有权选择不支持；一旦选择支持，视为您已确认并同意以上提示内容。</span>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="container" style="margin-top:20px;">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <div id="footer">
            <div class="footerNav">
              <a rel="nofollow" href="http://www.atguigu.com">关于我们</a> | <a rel="nofollow"
                                                                            href="http://www.atguigu.com">服务条款</a>
              | <a rel="nofollow" href="http://www.atguigu.com">免责声明</a> | <a rel="nofollow"
                                                                              href="http://www.atguigu.com">网站地图</a>
              | <a rel="nofollow" href="http://www.atguigu.com">联系我们</a>
            </div>
            <div class="copyRight">
              Copyright ?2010-2014atguigu.com 版权所有
            </div>
          </div>

        </div>
      </div>
    </div>

  </div> <!-- /container -->
</template>

<script setup>

import {useRoute, useRouter} from "vue-router";
import {computed, onMounted, reactive, ref} from "vue";
import {errorsMsg} from "@/utils/web-utils";
import {cloneDeep} from "lodash/lang";

const router = useRouter();
const route = useRoute();

const order = reactive({})

const orderForm = reactive({
  id: null,
  number: 1,
  total: 0,
  freight: 0,
  order: ''
})
orderForm.total = computed(() => {
  return orderForm.number * order.detailReturnVOList?.[0].supportMoney + order.detailReturnVOList?.[0].freight
})


const goToSettlement = () => {
  let tempOrder = JSON.stringify(orderForm)
  router.push({name: 'PayStepTwo', params: {order: tempOrder}})
}

const changeNumber = (number) => {
  //signalPurchase为0 表示不限购
  console.log(order.detailReturnVOList?.[0].signalPurchase)
  if (order.detailReturnVOList?.[0].signalPurchase) {
    if (number && number < 1) {
      errorsMsg("回报数量不能为0")
    }
    if (number > order.detailReturnVOList?.[0].purchase) {
      orderForm.number = order.detailReturnVOList?.[0].purchase
      errorsMsg("回报数量不能大于限购数量")
    }
  }


}

onMounted(() => {
  if (route.params.detailProject) {
    let tempOrder = JSON.parse(route.params.detailProject)
    Object.assign(order, tempOrder)
  } else {
    router.push({name: 'Detail'});
  }
  orderForm.order = cloneDeep(order)
  console.log(orderForm)
})
</script>
<script>
export default {
  name: "PayStepOne",

};
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

</style>
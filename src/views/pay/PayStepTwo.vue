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
                      <div class="progress-bar progress-bar-default" role="progressbar"
                           aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                           style="width: 100%;height:50px;">
                        <div style="font-size:16px;margin-top:15px;">1. 确认回报内容</div>
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
                        <div style="font-size:16px;margin-top:15px;">2. 确认订单</div>
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
                    <div class="alert alert-warning alert-dismissable" style="color:red;">
                      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×
                      </button>
                      <i class="glyphicon glyphicon-info-sign"></i>
                      <strong>请在下单后15分钟内付款，否则您的订单会被自动关闭。</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div id="address" class="container-fluid">
                <div class="row clearfix">
                  <div class="col-md-12 column">
                    <blockquote style="border-left: 5px solid #f60;color:#f60;padding: 0 0 0 20px;">
                      <b>
                        收货地址
                      </b>
                    </blockquote>
                  </div>
                  <div class="col-md-12 column" style="padding:0 120px;">
                    <div v-if="!orderForm.address.length">尚未创建收货地址</div>
                    <el-radio-group v-model="radioAddress">
                      <template v-for="(item,index) in orderForm.address" :key="index">
                        <el-radio :label="item.id">{{ item.receiveName }}---{{ item.address }}---{{ item.phoneNum }}
                        </el-radio>
                        <br/>
                      </template>
                      <el-button @click="isShowAddAddress=!isShowAddAddress"
                                 size="small" type="primary">
                        新增地址
                      </el-button>
                      <el-button
                          @click="deleteAddressBtn"
                          size="small"
                          v-if="orderForm.address.length" type="danger">
                        删除地址
                      </el-button>
                    </el-radio-group>
                    <template v-if="isShowAddAddress">
                      <div style="border:10px solid #f60;border-bottom-color: #eceeef;border-width: 10px;width:20px;margin-left:20px;margin-top:-20px;
                                             border-left-color: rgba(221, 221, 221, 0);
                                             border-top-color: rgba(221, 221, 221, 0);
                                             border-right-color: rgba(221, 221, 221, 0);
                                    "></div>
                      <div class="panel panel-default"
                           style="border-style: dashed;background-color:#eceeef">
                        <div class="panel-body">
                          <div class="col-md-12 column">
                            <el-form class="form-horizontal"
                                     ref="formRef"
                                     :model="receiveAddress"
                                     :rules="rules"
                                     label-width="70px"
                            >
                              <el-form-item prop="address" label="收货人">
                                <el-input v-model="receiveAddress.address"
                                          placeholder="姓名：xxxx"
                                />
                              </el-form-item>
                              <el-form-item prop="phoneNum" label="手机">
                                <el-input v-model="receiveAddress.phoneNum"
                                          placeholder="请填写11位手机号码"
                                />
                              </el-form-item>
                              <el-form-item prop="receiveName" label="地址">
                                <el-input
                                    v-model="receiveAddress.receiveName"
                                    placeholder="请填写收货地址"
                                />
                              </el-form-item>
                              <div class="form-group">
                                <label class="col-sm-5 control-label"></label>
                                <div class="col-sm-12">
                                  <button style="float: right;"
                                          type="button"
                                          class="btn btn-primary"
                                          @click="addAddress(formRef)"
                                  >确认配送信息
                                  </button>
                                </div>
                              </div>
                            </el-form>
                          </div>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </div>


              <div class="container-fluid">
                <div class="row clearfix">
                  <div class="col-md-12 column">
                    <blockquote style="border-left: 5px solid #f60;color:#f60;padding: 0 0 0 20px;">
                      <b>
                        发票信息
                      </b>
                    </blockquote>
                    <el-radio v-model="orderForm.invoice" :label="0" size="large">无需发票</el-radio>
                    <el-radio v-model="orderForm.invoice" :label="1" size="large">需要发票</el-radio>
                  </div>
                  <div v-if="orderForm.invoice" class="col-md-12 column" style="padding:0 120px;">
                    <div style="border:10px solid #f60;border-bottom-color: #eceeef;border-width: 10px;width:20px;margin-left:20px;margin-top:-20px;
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
                              <label class="col-sm-2 control-label">发票抬头（*）</label>
                              <div class="col-sm-10">
                                <el-input type="text" v-model="orderForm.invoiceTitle"
                                          style="width:200px;"
                                          placeholder="个人"/>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-fluid">
                <div class="row clearfix">
                  <div class="col-md-12 column">
                    <blockquote style="border-left: 5px solid #f60;color:#f60;padding: 0 0 0 20px;">
                      <b>
                        项目信息
                      </b>
                    </blockquote>
                  </div>
                  <div class="col-md-12 column">
                    <table class="table table-bordered" style="text-align:center;">
                      <thead>
                      <tr style="background-color:#ddd;">
                        <td>项目名称</td>
                        <td>发起人</td>
                        <td width="300">回报内容</td>
                        <td width="80">回报数量</td>
                        <td>支持单价</td>
                        <td>配送费用</td>
                      </tr>
                      </thead>
                      <tbody>
                      <tr align="center" style="text-align:center;">
                        <td>{{ orderForm.order.projectName }}</td>
                        <td>{{ orderForm.order.memberLaunchInfoVO?.descriptionSimple }}</td>
                        <td>{{ orderForm.order.detailReturnVOList?.[0].content }}</td>
                        <td>
                          {{ orderForm.number }}
                        </td>
                        <td style="color:#F60">￥ {{ orderForm.order.detailReturnVOList?.[0].supportMoney }}</td>
                        <td style="color:#F60">
                          {{
                            orderForm.order.detailReturnVOList?.[0].freight === 0 ? "免运费" : `￥ ${orderForm.order.detailReturnVOList?.[0].freight} `
                          }}
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="col-md-12 column">
                    <div class="form-group">
                      <label class="col-sm-2 control-label">备注</label>
                      <div class="col-sm-10">
                        <el-input v-model="orderForm.orderRemark" type="textarea"/>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 column">
                    <blockquote style="border-left: 5px solid #f60;color:#f60;padding: 0 0 0 20px;">
                      <b>
                        账单
                      </b>
                    </blockquote>
                  </div>
                  <div class="col-md-12 column">
                    <div class="alert alert-warning alert-dismissable"
                         style="text-align:right; border:2px solid #ffc287;">
                      <ul style="list-style:none;">
                        <li style="margin-top:10px;">支持金额：<span
                            style="color:red;">￥{{
                            orderForm.number * orderForm.order.detailReturnVOList?.[0].supportMoney
                          }}</span>
                        </li>
                        <li style="margin-top:10px;">配送费用：<span
                            style="color:red;">￥{{ orderForm.order.detailReturnVOList?.[0].freight }}</span></li>
                        <li style="margin-top:10px;">优惠金额：<span style="color:red;">-￥0.00</span>
                        </li>
                        <li style="margin-top:10px;margin-bottom:10px;"><h2>支付总金额：<span
                            style="color:red;">￥{{ orderForm.total }}</span></h2></li>
                        <li v-if="!orderForm.address.length"
                            style="margin-top:10px;padding:5px;border:1px solid #F00;display:initial;background:#FFF;">
                          <i class="glyphicon glyphicon-info-sign"></i> <strong>您需要先 <a
                            href="#address">设置配送信息</a> ,再提交订单</strong>
                        </li>
                        <li style="margin-top:10px;">
                          请在下单后15分钟内付款，否则您的订单会被自动关闭。
                        </li>
                        <li style="margin-top:10px;">
                          <el-button :disabled="!orderForm.checked"
                                     @click="submitOrder"
                                     size="large"
                                     type="primary"
                                     class="btn btn-warning btn-lg"
                          ><i
                              class="glyphicon glyphicon-credit-card"></i>
                            立即付款
                          </el-button>
                        </li>
                        <li style="margin-top:10px;">
                          <div class="checkbox">
                            <label @click="orderForm.checked=!orderForm.checked">
                              <input type="checkbox" :checked="orderForm.checked">
                              我已了解风险和规则
                            </label>
                          </div>
                        </li>
                      </ul>
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
    <div v-html="htmlForm"></div>
  </div> <!-- /container -->
</template>

<script setup>
import {useRouter, useRoute} from "vue-router";
import {onBeforeMount, onMounted, reactive, ref, watch} from "vue";
import {creatOrder, deleteAddress, queryAddress, saveAddress} from "@/api/member/memberProject";
import {errorsMsg} from "@/utils/web-utils";
import {cloneDeep} from "lodash/lang";

const router = useRouter();
const route = useRoute();

const isShowAddAddress = ref(false);

const formRef = ref(null)

const radioAddress = ref(1)
const htmlForm = ref('')

const orderForm = reactive({
  id: null,
  total: 0,
  freight: 0,
  order: {},
  address: [],
  invoice: 0,
  invoiceTitle: null,
  orderRemark: null,
  checked: false,
})

watch(() => orderForm.invoice, (newValue) => {
  console.log(newValue)
})

const receiveAddress = reactive({
  address: null,
  phoneNum: null,
  receiveName: null,

})
const addAddress = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      saveAddress({...receiveAddress}).then(res => {
        orderForm.address.push({
          id: res.data.id,
          address: res.data.address,
          phoneNum: res.data.phoneNum,
          receiveName: res.data.receiveName,
        })
        radioAddress.value = res.data.id
        resetForm(formEl)
        isShowAddAddress.value = false
      }).catch(err => {
        errorsMsg(err.message)
      })
      console.log(receiveAddress)
    } else {
      console.log('error submit!', fields)
    }
  })
}


const submitOrder = () => {
  let orderFormApi = cloneDeep(orderForm)
  console.log(orderFormApi)
  creatOrder({
    freight: orderFormApi.freight,
    invoice: orderFormApi.invoice,
    orderRemark: orderFormApi.orderRemark,
    invoiceTitle: orderFormApi.invoiceTitle,
    addressId: orderFormApi.address.splice(0, 1)[0].id,
    supportPrice: orderFormApi.order.detailReturnVOList[0]?.supportMoney,
    projectName: orderFormApi.order.projectName,
    launchName: orderFormApi.order.memberLaunchInfoVO?.descriptionSimple,
    returnContent: orderFormApi.order.detailReturnVOList[0]?.content,
    returnCount: orderFormApi.number,
    signalPurchase: orderFormApi.order.detailReturnVOList[0]?.signalPurchase,
    purchase: orderFormApi.order.detailReturnVOList[0]?.purchase,
  }).then(res => {
    htmlForm.value = res.data
    const div = document.createElement('div')
    div.innerHTML = res.data //此处form就是后台返回接收到的数据
    document.body.appendChild(div)
    document.forms[0].submit()
  }).catch(err => {

  })

};


const deleteAddressBtn = () => {
  if (!orderForm.address.length) return errorsMsg('请选择收货地址')
  deleteAddress({id: radioAddress.value})
      .then(res => {
        if (res.code !== 200) {
          return errorsMsg(res.message)
        }
        orderForm.address = orderForm.address.filter(item => item.id !== radioAddress.value)
        radioAddress.value = orderForm.address[0]?.id
        console.log(res);
      })
      .catch(err => {
        errorsMsg(err.message)
      })
}


const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

onBeforeMount(() => {
  if (route.params.order) {
    let tempOrder = JSON.parse(route.params.order)
    Object.assign(orderForm, tempOrder)
  } else {
    router.push({name: 'Detail'});
  }
  console.log(orderForm.order)
})

const rules = reactive({
  address: [
    {required: true, message: '收货人不能为空', trigger: 'blur'},
  ],
  phoneNum: [
    {required: true, message: '手机号不能为空', trigger: 'blur'},
  ],
  receiveName: [
    {required: true, message: '地址不能为空', trigger: 'blur'},
  ],
})

onMounted(() => {
  queryAddress().then(res => {
    orderForm.address = res.data || []
    radioAddress.value = orderForm.address[0]?.id
  })
})
</script>
<script>
export default {
  name: "PayStepTwo",

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

.el-radio-group {
  display: flex;
}

.panel-body {
  text-align: left;
}
</style>

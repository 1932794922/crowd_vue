<template>
  <div>
  <el-button type="primary" @click="sponsorCrowdBtn" class="sponsor-btn">发起众筹</el-button>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="我支持的" name="first">
      <div class="container-fluid">
        <div class="row clearfix">
          <div class="col-md-12 column">
            <span class="label label-warning">全部</span> <span class="label"
                                                              style="color:#000;">已支付</span>
            <span class="label " style="color:#000;">未支付</span>
          </div>
          <div class="col-md-12 column" style="margin-top:10px;padding:0;">
            <table class="table table-bordered" style="text-align:center;">
              <thead>
              <tr style="background-color:#ddd;">
                <td>项目信息</td>
                <td width="90">支持日期</td>
                <td width="120">支持金额（元）</td>
                <td width="80">回报数量</td>
                <td width="80">交易状态</td>
                <td width="120">操作</td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td style="vertical-align:middle;">
                  <div class="thumbnail">
                    <div class="caption">
                      <h3>
                        活性富氢净水直饮机
                      </h3>
                      <p>
                        订单编号:2x002231111
                      </p>
                      <p>
                      <div style="float:left;"><i
                          class="glyphicon glyphicon-screenshot"
                          title="目标金额"></i> 已完成 100%
                      </div>
                      <div style="float:right;"><i title="截至日期"
                                                   class="glyphicon glyphicon-calendar"></i>
                        剩余8天
                      </div>
                      </p>
                      <br>
                      <div class="progress" style="margin-bottom: 4px;">
                        <div class="progress-bar progress-bar-danger"
                             role="progressbar" aria-valuenow="40"
                             aria-valuemin="0" aria-valuemax="100"
                             style="width: 40%">
                          <span>众筹中</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td style="vertical-align:middle;">2017-05-23 11:31:22</td>
                <td style="vertical-align:middle;">1.00<br>(运费：0.00 )</td>
                <td style="vertical-align:middle;">1</td>
                <td style="vertical-align:middle;">交易关闭</td>
                <td style="vertical-align:middle;">
                  <div class="btn-group-vertical" role="group"
                       aria-label="Vertical button group">
                    <button type="button" class="btn btn-default">删除订单</button>
                    <button type="button" class="btn btn-default">交易详情</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="vertical-align:middle;">
                  <div class="thumbnail">
                    <div class="caption">
                      <h3>
                        BAVOSN便携折叠移动电源台灯
                      </h3>
                      <p>
                        订单编号:2x002231111
                      </p>
                      <p>
                      <div style="float:left;"><i
                          class="glyphicon glyphicon-screenshot"
                          title="目标金额"></i> 已完成 100%
                      </div>
                      <div style="float:right;"><i title="截至日期"
                                                   class="glyphicon glyphicon-calendar"></i>
                        剩余8天
                      </div>
                      </p>
                      <br>
                      <div class="progress" style="margin-bottom: 4px;">
                        <div class="progress-bar progress-bar-success"
                             role="progressbar" aria-valuenow="40"
                             aria-valuemin="0" aria-valuemax="100"
                             style="width: 40%">
                          <span>众筹成功</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td style="vertical-align:middle;">2017-05-23 11:31:22</td>
                <td style="vertical-align:middle;">1.00<br>(运费：0.00 )</td>
                <td style="vertical-align:middle;">1</td>
                <td style="vertical-align:middle;">交易关闭</td>
                <td style="vertical-align:middle;">
                  <div class="btn-group-vertical" role="group"
                       aria-label="Vertical button group">
                    <button type="button" class="btn btn-default">删除订单</button>
                    <button type="button" class="btn btn-default">交易详情</button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </el-tab-pane>
    <el-tab-pane label="我关注的" name="second">
      <div class="tab-pane">
        <div class="container-fluid">
          <div class="row clearfix">
            <div class="col-md-12 column" style="padding:0;">
              <table class="table table-bordered" style="text-align:center;">
                <thead>
                <tr style="background-color:#ddd;">
                  <td>项目信息</td>
                  <td width="120">支持人数</td>
                  <td width="120">关注人数</td>
                  <td width="120">操作</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td style="vertical-align:middle;">
                    <div class="thumbnail">
                      <div class="caption">
                        <p>
                          BAVOSN便携折叠移动电源台灯
                        </p>
                        <p>
                          <i class="glyphicon glyphicon-jpy"></i> 已筹集 1000.0元
                        </p>
                        <p>
                        <div style="float:left;"><i
                            class="glyphicon glyphicon-screenshot"
                            title="目标金额"></i> 已完成 100%
                        </div>
                        <div style="float:right;"><i
                            class="glyphicon glyphicon-calendar"></i> 剩余2天
                        </div>
                        </p>
                        <br>
                        <div class="progress" style="margin-bottom: 4px;">
                          <div class="progress-bar progress-bar-success"
                               role="progressbar" aria-valuenow="40"
                               aria-valuemin="0" aria-valuemax="100"
                               style="width: 40%">
                            <span>众筹中</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style="vertical-align:middle;">1</td>
                  <td style="vertical-align:middle;">1</td>
                  <td style="vertical-align:middle;">
                    <div class="btn-group-vertical" role="group"
                         aria-label="Vertical button group">
                      <button type="button" class="btn btn-default">取消关注</button>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="我发起的" name="third">
      <div class="tab-pane">
        <div class="container-fluid">
          <div class="row clearfix">
            <div class="col-md-12 column">
              <span class="label label-warning">全部</span> <span class="label"
                                                                style="color:#000;">众筹中</span>
              <span class="label " style="color:#000;">众筹成功</span> <span class="label "
                                                                         style="color:#000;">众筹失败</span>
            </div>
            <div class="col-md-12 column" style="padding:0;margin-top:10px;">
              <table class="table table-bordered" style="text-align:center;">
                <thead>
                <tr style="background-color:#ddd;">
                  <td>项目信息</td>
                  <td width="120">募集金额（元）</td>
                  <td width="80">当前状态</td>
                  <td width="120">操作</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td style="vertical-align:middle;">
                    <div class="thumbnail">
                      <div class="caption">
                        <p>
                          BAVOSN便携折叠移动电源台灯
                        </p>
                        <p>
                        <div style="float:left;"><i
                            class="glyphicon glyphicon-screenshot"
                            title="目标金额"></i> 已完成 100%
                        </div>
                        <div style="float:right;"><i title="截至日期"
                                                     class="glyphicon glyphicon-calendar"></i>
                          剩余8天
                        </div>
                        </p>
                        <br>
                        <div class="progress" style="margin-bottom: 4px;">
                          <div class="progress-bar progress-bar-success"
                               role="progressbar" aria-valuenow="40"
                               aria-valuemin="0" aria-valuemax="100"
                               style="width: 40%">
                            <span>众筹中</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style="vertical-align:middle;">1.00<br>(运费：0.00 )</td>
                  <td style="vertical-align:middle;">草稿</td>
                  <td style="vertical-align:middle;">
                    <div class="btn-group-vertical" role="group"
                         aria-label="Vertical button group">
                      <button type="button" class="btn btn-default">项目预览</button>
                      <button type="button" class="btn btn-default">修改项目</button>
                      <button type="button" class="btn btn-default">删除项目</button>
                      <button type="button" class="btn btn-default">问题管理</button>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>

  </div>
</template>

<script setup>

import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const activeName = ref('first')

const sponsorCrowdBtn = () => {
  router.push({name: 'Start'})
}

const handleClick = (tab, event) => {
  // console.log(tab, event)
}

</script>

<style lang="scss" scoped>
.table {
  width: 100%;
}

.sponsor-btn{
  position: absolute;
  right: 0;
  z-index: 1;
}


</style>
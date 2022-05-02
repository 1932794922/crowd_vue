<template>
  <div class="container">
    <div class="row clearfix">
      <div class="col-sm-3 col-md-3 column">
        <div class="row">
          <div class="col-md-12">
            <div class="thumbnail" style="    border-radius: 0px;">
              <img src="~@/assets/img/services-box1.jpg" class="img-thumbnail"
                   alt="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera">
              <div class="caption" style="text-align:center;">
                <h3>
                  ZhangSan
                </h3>
                <span class="label label-danger" style="cursor:pointer;"
                      onclick="window.location.href='cert.html'">未实名认证</span>
              </div>
            </div>
          </div>
        </div>
        <div class="list-group">
          <div class="list-group-item" style="cursor:pointer;" @click="goMember">
            资产总览<span class="badge"><i class="glyphicon glyphicon-chevron-right"></i></span>
          </div>
          <div class="list-group-item active" @click="">
            我的众筹<span class="badge"><i class="glyphicon glyphicon-chevron-right"></i></span>
          </div>
        </div>
      </div>
      <div class="col-sm-9 col-md-9 column">
        <ul id="myTab" style="" class="nav nav-pills" role="tablist">
          <li role="presentation" class="active"><a href="#home" role="tab" data-toggle="tab" aria-controls="home"
                                                    aria-expanded="true">我的众筹</a></li>
          <li role="presentation"><a href="#profile">众筹资产</a></li>
        </ul>
        <div id="myTabContent" class="tab-content" style="margin-top:10px;">
          <process/>
          <div role="tabpanel" class="tab-pane fade" id="profile" aria-labelledby="profile-tab">
            众筹资产
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
            Copyright ?2017-2017atguigu.com 版权所有
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {useRouter} from "vue-router";
import {ref} from "vue";
import Process from "@/views/user/component/Process.vue";

const router = useRouter()

const goMember = () => {
  router.push("/user")
}

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
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
</style>
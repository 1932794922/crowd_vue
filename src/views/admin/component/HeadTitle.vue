<template>
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <div><a class="navbar-brand" style="font-size:32px;" href="#">众筹平台 - 用户维护</a></div>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li style="padding-top:8px;">
            <div class="btn-group">
              <button type="button" class="btn btn-default btn-success dropdown-toggle" data-toggle="dropdown">
                <i class="glyphicon glyphicon-user"></i> {{userName}} <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><i class="glyphicon glyphicon-cog"></i>个人设置</li>
                <li><i class="glyphicon glyphicon-comment"></i>消息</li>
                <li class="divider"></li>
                <li @click="logout"><i class="glyphicon glyphicon-off"></i> 退出系统</li>
              </ul>
            </div>
          </li>
          <li style="margin-left:10px;padding-top:8px;">
            <button type="button" class="btn btn-default btn-danger">
              <span class="glyphicon glyphicon-question-sign"></span> 帮助
            </button>
          </li>
        </ul>
        <form class="navbar-form navbar-right">
          <input type="text" class="form-control" placeholder="Search...">
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>


import {useRouter} from "vue-router";
import {errorsMsg, getSession, removeAllSession, successMsg} from "@/utils/web-utils";

import {adminLogout} from "@/api/admin"

const router = useRouter()

const logout = () => {
  ElMessageBox.confirm(
      '是否确定要退出系统?',
      '退出系统',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'danger',
      }
  )
      .then(() => {
        adminLogout().then(res => {
          if (res.code !== 200) {
            router.push('/')
            removeAllSession()
            return errorsMsg(res.message);
          }
          console.log(res);
          router.push('/')
          removeAllSession()
          return successMsg(res.message);
        }).catch(err => {
        });
      })
}

let userName = getSession("userName")


</script>

<style lang="scss" scoped>
.dropdown-menu {
  li {
    i {
      padding-right: 5px;
    }

    text-align: center;
    padding-top: 8px;
    cursor: pointer;
  }

}

</style>
<template>
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <div><a class="navbar-brand" href="index.html" style="font-size:32px;">尚筹网-创意产品众筹平台</a></div>
      </div>
    </div>
  </nav>

  <div class="container">

    <form class="form-signin" role="form">
      <h2 class="form-signin-heading"><i class="glyphicon glyphicon-log-in"></i> 用户登录</h2>
      <div class="form-group has-success has-feedback">
        <input type="text" class="form-control" id="inputSuccess4" placeholder="请输入登录账号" autofocus>
        <span class="glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      <div class="form-group has-success has-feedback">
        <input type="text" class="form-control" id="inputSuccess4" placeholder="请输入登录密码" style="margin-top:10px;">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="checkbox" style="text-align:right;"><a href="reg.html">我要注册</a></div>
      <a class="btn btn-lg btn-success btn-block" href="member.html" > 登录</a>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>
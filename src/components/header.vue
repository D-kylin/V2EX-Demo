<template>
  <header id='head_top' class="clear">
    <div class="content">
      <img src="../assets/logo.png" alt="v2ex">
      <ul class="right">
        <li><a href="#javascript">首页</a></li>
        <li><a href="#javascript">UserName</a></li>
        <li><a href="#javascript">记事本</a></li>
        <li><a href="#javascript">时间轴</a></li>
        <li><a href="#javascript">设置</a></li>
        <li><a href="#javascript">登出</a></li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @import '../style/mixin';
  @import '../style/common';


  header {
    width: 100%;
    padding: 0 20px;
    padding-bottom: 6px;
    border-bottom: 1px solid rgb(199, 199, 199);
    box-shadow: 0 2px 2px rgb(206, 206, 206);
    .content {     
      max-width: 1100px;
      min-width: 600px;
      height: 30px;
      padding-top: 6px;
      margin: 0 auto;
    }
  }
  img {
    width: 94px;
    height: 30px;
  }
  li {
    float: left;
    line-height: 30px;
    margin-right: 14px;
  }
</style>
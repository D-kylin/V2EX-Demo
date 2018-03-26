<template>
  <div id="content">
    <nav class="clear">
      <a href="">技术</a>
      <a href="">创意</a>
      <a href="">好玩</a>
      <a class="active" href="">Apple</a>
      <a href="">酷工作</a>
      <a href="">交易</a>
      <a href="">城市</a>
      <a href="">问与答</a>
      <a href="">最热</a>
      <a href="">全部</a>
      <a href="">R2</a>
      <a href="">节点</a>
      <a href="">关注</a>
    </nav>
    <div class="cell clear  ">
      <a href="">macOS</a>
      <a href="">iPhone</a>
      <a href="">iPad</a>
      <a href="">MBP</a>
      <a href="">iMac</a>
    </div>
    <div class="item">
      <div class="avator"><a href=""><img src="https://cdn.v2ex.com/gravatar/813c3da2c5d500e2f3f38c2511da96d1?s=48&d=retro" alt="avator"></a></div>
      <div class="topic_info">
        <span class="item_title">Mac 设置默认打开方式无效Mac 设置默认打开方式无效Mac 设置默认打开方式无效Mac 设置默认打开方式无效</span>
        <div class="small">
          <a href="" class="node">macOS</a>
          <strong>
            <a href="">ohmyzsh</a>
          </strong>
          <span class="lastReply">29 分钟前</span>
          <span>
            最后回复来自
            <strong>ohmyzsh</strong>
          </span>
        </div>
      </div>
      <div class="count_livid">
        <a href="">10</a>
      </div>
    </div>
    <div class="item">
      <div class="avator"><a href=""><img src="https://cdn.v2ex.com/gravatar/813c3da2c5d500e2f3f38c2511da96d1?s=48&d=retro" alt="avator"></a></div>
      <div class="topic_info">
        <span class="item_title">Mac 设置默认打开方式无效Mac 设置默认打开方式无效Mac 设置默认打开方式无效Mac 设置默认打开方式无效</span>
        <div class="small">
          <a href="" class="node">macOS</a>
          <strong>
            <a href="">ohmyzsh</a>
          </strong>
          <span class="lastReply">29 分钟前</span>
          <span>
            最后回复来自
            <strong>ohmyzsh</strong>
          </span>
        </div>
      </div>
      <div class="count_livid">
        <a href="">10</a>
      </div>
    </div>
    <div class="item">
      <div class="avator"><a href=""><img src="https://cdn.v2ex.com/gravatar/813c3da2c5d500e2f3f38c2511da96d1?s=48&d=retro" alt="avator"></a></div>
      <div class="topic_info">
        <span class="item_title">设置默认打开方式无效</span>
        <div class="small">
          <a href="" class="node">macOS</a>
          <strong>
            <a href="">ohmyzsh</a>
          </strong>
          <span class="lastReply">29 分钟前</span>
          <span>
            最后回复来自
            <strong>ohmyzsh</strong>
          </span>
        </div>
      </div>
      <div class="count_livid">
        <a href="">10</a>
      </div>
    </div>
    <div class="item">
      <div class="avator"><a href=""><img src="https://cdn.v2ex.com/gravatar/813c3da2c5d500e2f3f38c2511da96d1?s=48&d=retro" alt="avator"></a></div>
      <div class="topic_info">
        <span class="item_title">Mac 设置默认打开方式无效Mac 设置默认打开方式无效Mac 设置默认打开方式无效Mac 设置默认打开方式无效</span>
        <div class="small">
          <a href="" class="node">macOS</a>
          <strong>
            <a href="">ohmyzsh</a>
          </strong>
          <span class="lastReply">29 分钟前</span>
          <span>
            最后回复来自
            <strong>ohmyzsh</strong>
          </span>
        </div>
      </div>
      <div class="count_livid">
        <a href="">10</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../style/mixin';
  @import '../style/common';
  #content {
    padding: 10px;
    min-width: 490px;
    border-radius: 3px;
  }
  nav {
    font-size: 13px;
    padding: 10px;
    a {
      float: left;
      color: #555;
      line-height: 14px;
      padding: 5px 8px;
      border-radius: 3px;
      margin-right: 5px;
      &.active {
        color: #fff;
        background: rgb(51, 51, 68);
      }
    }
  }

  .cell {
    color: #778087;
    background-color: rgb(249, 249, 249);
    padding: 10px 10px 10px 20px;
    border-bottom: 1px solid rgb(226, 226, 226);
    a {
      font-size: 14px;
      line-height: 120%;
      text-align: left;
      margin-right: 20px;
      float: left;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .item {
    display: flex;
    padding:10px;
    background-color: rgb(249, 249, 249);
    border-bottom: 1px solid rgb(226, 226, 226);
    .avator {
      width: 48px;
      height: 48px;
      margin-right: 10px;
      &:hover {
        cursor: pointer;
      }
    }
    .topic_info {
      flex: 9;
      .item_title {
        font-size: 15px;
      }
      .small {
        font-size: 11px;
        margin-top: 5px;
        .node {
          padding: 2px 0;
          margin-right: 16px;
          border-radius: 3px;
          background: rgb(230, 230, 230);
        }
        strong {
          margin-right: 16px;
        }
        span {
          margin-right: 16px;
        }
      }
    }
    .count_livid {
      flex: 1;
      align-self: center;
      text-align: center; 
      a {
        padding: 0 10px;
        border-radius: 12px;
        font-size: bold;
        line-height: 120%;
        color: white;
        background: rgb(170, 176, 198);
      }
    }
  }
</style>


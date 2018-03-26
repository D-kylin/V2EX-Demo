<template>
  <div id="userInfo">
    <div class="cell">
      <div class="contain">
        <table>
          <tbody>
            <tr>
              <td class="avator">
                <a href=""><img src="https://cdn.v2ex.com/gravatar/813c3da2c5d500e2f3f38c2511da96d1?s=48&d=retro" alt="avator"></a>
              </td>
              <td>
                <span class="userName"><a href="">ohmyzsh</a></span>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="collection">
          <tbody>
            <tr>
              <td>
                <a href="">
                  <span>0</span>
                  <div></div>
                  <span>节点收藏</span>
                </a>
              </td>
              <td>
                <a href="">
                  <span>0</span>
                  <div></div>
                  <span>主题收藏</span>
                </a>
              </td>
              <td>
                <a href="">
                  <span>0</span>
                  <div></div>
                  <span>特别关注</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="created">
      <div class="contain">
        <table>
          <tbody>
            <tr>
              <td><a href=""><img src="https://www.v2ex.com/static/img/flat_compose.png?v=7d21f0767aeba06f1dec21485cf5d2f1" alt=""></a></td>
              <td><a href="">创作新主题</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="inner">
      <div class="inner_contain">
        <a href="">0条未读提醒</a>
        <div class="fr">
          <a href="">46<img src="https://cdn.v2ex.com/static/img/silver.png" alt="">47<img src="https://cdn.v2ex.com/static/img/bronze.png" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  @import '../../style/common';

  
  #userInfo {
    width: 270px;
    font-size: 14px;
    .contain {
      padding: 0 10px 0 10px;
      border-bottom: 1px solid rgb(226, 226, 226);
    }
    .cell {
      table {
        width: 100%;
        // border-bottom: 1px solid black;
      }
      .avator {
        width: 48px;
        height: 48px;
        img {
        border-radius: 3px;
        }
      }
      .userName {
        margin-left: 10px;
      }
      .collection {
        td {
          width: 33%;
        }
        span {
          display: inline-block;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
  .created {
    table {
      width: 100%;
      padding: 0;
      // border-bottom: 1px solid black;
      img {
        width: 32px;
        height: 32px; 
      }
    }
  }
  .inner {
    border-bottom: 1px solid rgb(226, 226, 226);
    .inner_contain {
      padding: 10px;
    }
  }
  .fr {
    float: right;
    a {
      padding: 5px;
      background-color: rgb(227, 227, 227);
      border-radius: 15px;
    }
  }
  
</style>



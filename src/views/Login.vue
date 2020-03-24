<template>
  <div class="w">
    <div class="head"></div>
    <div class="subject">
      <!-- 要显示阿里图标库的图标，必须要加上iconfont这个类名，第二类名就是你想要显示的那个图标 -->
    <div class="close iconfont iconicon-test"></div>
    <h1 class="iconfont iconnew login"></h1>
    <form class="form">
      <input type="text" placeholder="用户名/手机号码" class="txt"/>
      <!-- <br> -->
      <input type="password" placeholder="密码" class="password"/>
      <!-- <br> -->
      <button class="confirm">登录</button>
    </form>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less">
  .w{
    margin: 0 auto;
    width: 360px;
    height: 635px;
    background: #f2f2f2;
    .head{
      height: 24px;
      background: #757575;
    }
    .subject{
      // 相对定位
      position: relative;
      .close{
        font-size: 27px;
        // 绝对定位
        position: absolute;
        left: 20px;
        top: 20px;
      }
      .login{
        // 默认值。定义标准的字符。
        font-weight: normal;
        position: absolute;
        left: 120px;
        top: 80px;
        font-size: 120px;
        color: red;
      }
      .form{
        position: absolute;
        left: 30px;
        top: 220px;
        input{
          width: 280px;
          display: block;
          padding: 10px;
          font-size: 18px;
          border: none;
          outline: none;
          border-bottom: 1px #101010 solid;
          background: #f2f2f2;
          text-align: left;
        }
        button{
          margin-top: 50px;
          width: 300px;
          height: 48px;
          background: #cc3300;
          border: none;
          border-radius: 24px;
          color: #fff;
          font-size: 20px;
        }
      }
    }
    .footer{
      position: relative;
      left: 0px;
      top: 518px;
      height: 48px;
      background: #000;
    }
  }
</style>
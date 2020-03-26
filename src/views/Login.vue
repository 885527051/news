<template>
  <div class="container">
    <!-- 返回上一页按钮 -->
    <div class="back-btn">
      <span class="iconfont iconicon-test"></span>
    </div>

    <!-- logo -->
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>

    <!-- 表单 -->
    <div class="form">
      <div class="form-item">
        <input type="text" placeholder="手机号码" v-model="form.username">
      </div>
      <div class="form-item">
        <input type="password" placeholder="请输入密码" v-model="form.password">
      </div>
      <div class="form-item">
        <button @click="handleClick">登录</button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      // 保存表单数据
      form:{
        username:"",
        password:""
      }
    }
  },
  methods:{
    handleClick(){
      // 调用axios 发起请求
      this.$axios({
        // 接口地址
        url:"http://127.0.0.1:3000/login",
        // post 请求
        method:"POST",
        // 参数
        data:this.form
      }).then(res => {
        console.log(res)
      })
    }
  }
};
</script>
<style lang="less">
  .container{
    padding: 20 / 360 * 100vw;
    // background: #f2f2f2;
    .back-btn{
      margin-top: 13 / 360 *100vw;
      line-height: 1;
      span{
        font-size: 27 / 360 *100vw;
      }
    }
    .logo{
      text-align: center;
      margin-top: 20 / 360 * 100vw;
      span{
        font-size: 126 / 360 * 100vw;
        color: #cc3300;
      }
    }
    .form-item{
      margin-top: 20 / 360 * 100vw;
      input{
        width: 100%;
        height: 44 / 360 * 100vw;
        // C3盒子模型
        box-sizing: border-box;
        line-height: 44 / 360 * 100vw;
        background: none;
        border: none;
        border-bottom: 1px #999 solid;
        outline: none; // 点击没有高亮
        font-size: 16px;
      }
      button{
        margin-top: 50 / 360 * 100vw;
        width: 100%;
        height: 48 / 360 * 100vw;
        background: #cc3300;
        color: #fff;
        border-radius: 50px;
        border: none;
        outline: none;
        font-size: 16px;
      }
    }
  }
</style>
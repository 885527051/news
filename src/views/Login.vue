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
    <!-- van-form是表单得组件，@submit是表单得提交事件 -->
    <van-form @submit="onSubmit">
      <!-- van-field是表单的字段 -->
      <!-- rules是表单字段的规则，required表示这个是输入框是必填 -->
      <van-field
        v-model="form.username"
        name="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <!-- 如果这个按钮是在van-form组件内部，
        并且按钮得native-type="submit"，说明点击这个按钮就会触发submit事件 -->
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
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
    onSubmit(values) {
      console.log('submit', this.form);
    },
  }
};
</script>
<style lang="less">
  .container{
    padding: 20 / 360 * 100vw;
    // background: #f2f2f2;
    // 返回按钮
    .back-btn{
      margin-top: 13 / 360 *100vw;
      line-height: 1;
      span{
        font-size: 27 / 360 *100vw;
      }
    }
    // logo
    .logo{
      text-align: center;
      margin-top: 20 / 360 * 100vw;
      span{
        font-size: 126 / 360 * 100vw;
        color: #cc3300;
      }
    }
    // 表单
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
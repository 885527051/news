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
    <van-form @submit="onSubmit" class="form">
      <!-- van-field是表单的字段 -->
      <!-- rules是表单字段的规则，required表示这个是输入框是必填 -->
      <van-field
        v-model="form.username"
        name="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <!-- 昵称的输入框 -->
      <van-field
        v-model="form.nickname"
        name="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
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
          注册
        </van-button>
      </div>
    </van-form>
    <router-link to="/login">
            <van-button round block class="link-register" >
                登录
            </van-button>
        </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // 保存表单数据
      form:{
        username:"",
        nickname:"",
        password:""
      }
    }
  },
  methods:{
    // 提交表单时候触发的事件，该事件通过校验才会触发
    // values是表单返回的值，这里的values我们用不上，数据可以在this.form里面拿
    onSubmit(values) {
      // console.log('submit', this.form);
      // 调用axios发起异步请求，类似$.ajax(类似不代表一样)
      this.$axios({
        // 接口地址
        url:"/register",
        // 声明请求的方法为post请求(一定要注册这个method没有s)
        // 跟vue的methods属性毫无关系
        method:"post",
        // 参数
        data:this.form
        // .then方法里面的函数就是成功的回调函数,axios没有succces
      }).then(res => {
        // 获取到返回的信息
        const {message} = res.data;
        // 使用vant的弹窗提示用，success表示成功的弹窗
        this.$toast.success(message);
      })
    },
  }
};
</script>
<style lang="less" scoped>
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
    .form {
      .van-cell{
        padding: 10px 0;
        font-size: 16px;
        margin-bottom: 20 / 360 * 100vw;
      }
      .van-cell:not(:last-child)::after{
            border-bottom: 1px solid #333;
            left: 0;
        }
      .van-button--info{
            margin-top: 50 / 360 * 100vw;
            background-color: #cc3300;
            border: 1px solid #cc3300;
        }
    }
    .link-register{
      margin-top: 20 / 360 * 100vw;
      border: none;
      
    }
  }
</style>
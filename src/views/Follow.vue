<template>
  <div>
    <!-- 我的关注页 -->
    <!-- 头部组件 -->
    <NavigateBar title="我的关注"/>

    <!-- 要循环的结构 -->
    <div class="user-item" v-for="(item, index) in follows" :key="index">
      <img :src="$axios.defaults.baseURL + item.head_img" alt="">
      <div class="user-info">
        <div>{{ item.nickname }}</div>
        <p>{{ moment(item.create_date).format("YYYY-MM-DD hh:mm:ss")}}</p>
      </div>
      <span class="cancel">取消关注</span>
    </div>
  </div>
</template>

<script>
// 导入头部组件
import NavigateBar from "@/components/NavigateBar"
// 转化时间格式组件引入
import moment from "moment"

export default {
  data(){
    return {
      // 我的关注列表
      follows:[],
      // 把moment挂载到data
      moment
    }
  },
  // 注册组件
  components:{
    NavigateBar
  },
  mounted(){
    // 获取token
    const locaLuserJson = JSON.parse(localStorage.getItem('userInfo'));

    // 请求列表数据
    this.$axios({
      url:"/user_follows",
      method:"get",
      headers:{
        Authorization: locaLuserJson.token
      }
    }).then(res => {
      // data就是我的关注的用户列表
      const { data } = res.data
      console.log(data);
      // 保存到data中的关注列表
      this.follows = data
    })
  },
}
</script>

<style lang="less" scoped>
  .user-item{
    padding: 20 / 360*100vw;
    display: flex;
    // 主轴两边对齐
    justify-content: space-between;
    // 侧轴居中对齐
    align-items: center;
    border-bottom: 1px #eee solid;
    img{
      width: 40 / 360 * 100vw;
      height: 40 / 360 * 100vw;
      display: block;
      margin-right: 20 / 360 * 100vw;
      border-radius: 50%;
      object-fit: cover; // 防止图片变形
    }
    .user-info{
      flex: 1;
      margin-right: 20 / 360 * 100vw;
      p{
        font-size: 14px;
        color: #999;
      }
    }
    .cancel{
      padding: 5px 15px;
      font-size: 12px;
      background: #eee;
      border-radius: 50px;
    }
  }
</style>
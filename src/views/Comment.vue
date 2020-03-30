<template>
  <div>
    <!-- 我的跟贴 -->
    <!-- 头部组件 -->
    <NavigateBar title="我的跟贴" />

    <!-- 要循环的结构 -->
    <div class="comment-item" v-for="(item,index) in comments" :key="index">
      <div class="date">{{ moment(item.create_date).format("YYYY-MM-DD hh:mm")}}</div>
      <!-- 有回复的评论需要展示的, 就是我回复了谁 -->
      <div class="parent" v-if="item.parent">
        <div class="parent-user">回复：{{item.parent.user.nickname}}</div>
        <div class="parent-conter">
          {{item.parent.content}}
        </div>
      </div>
      <!-- 自己发布的内容 -->
      <div class="comment-content">
        {{item.content}}
      </div>
      <router-link to="#" class="link-post">
        <div>原文：{{item.post.title}}</div>
        <span class="iconfont iconjiantou1"></span>
      </router-link>
    </div>
  </div>
</template>

<script>
// 导入头部组件
import NavigateBar from "@/components/NavigateBar";
// 转化时间格式组件引入
import moment from "moment";

export default {
  // 注册组件
  components:{
    NavigateBar
  },
  data(){
    return {
      // 评论列表
      comments:[],
      // 日期处理的工具库
      moment,
      localUserJson:[]
    }
  },
  mounted(){
    // 本地数据
    const localUserJson  = JSON.parse(localStorage.getItem('userInfo'))
    this.localUserJson = localUserJson
    // 请求评论列表
    this.$axios({
      url:"/user_comments",
      headers:{
        Authorization : this.localUserJson.token
      }
    }).then(res => {
      console.log(res);
      
      const {data} = res.data
      // 把评论列表保存到data
      this.comments = data
    })
  }

}
</script>

<style lang="less" scoped>
  .comment-item{
    padding: 20 / 360 * 100vw;
    border-bottom: 1px #eee solid;
    .date{
      color: #999;
      margin-bottom: 15/ 360 * 100vw;
    }
    .parent{
      padding: 10/ 360 * 100vw;
      background: #eee;
    }
    .comment-content{
      margin: 15/ 360 * 100vw;
    }
    .link-post{
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding-right: 30px;
      color: #999;
      div{
        flex: 1;
        // 文字超出出现省略号一定是块元素才有作用
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
        span{
          margin-left: 5px;
        }
    }
  }
</style>
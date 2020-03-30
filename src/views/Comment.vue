<template>
  <div>
    <!-- 我的跟贴 -->
    <!-- 头部组件 -->
    <NavigateBar title="我的跟贴" />

    <!-- 要循环的结构 -->
    <div class="comment-item">
      <div class="date">2019-2020 20:20</div>
      <!-- 有回复的评论需要展示的, 就是我回复了谁 -->
      <div class="parent">
        <div class="parent-user">回复：火星网友</div>
        <div class="parent-conter">
          有回复的评论需要展示的, 就是我回复了谁有回复的评论需要展示的, 就是我回复了谁
        </div>
      </div>
      <!-- 自己发布的内容 -->
      <div class="comment-content">
        自己发布的内容自己发布的内容自己发布的内容自己发布的内容自己发布的内容自己发布的内容自己发布的内容自己发布的内容
      </div>
      <router-link to="#" class="link-post">
        原文：发布评论的新闻文章的标题
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
      color: #999;
    }
  }
</style>
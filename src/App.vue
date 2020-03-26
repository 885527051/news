<template>
  <div id="app">
    <!-- <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <button @click="$toast('弹窗测试')">测试弹窗</button>  -->
    <!-- 匹配主键的坑 -->
    <router-view/>
  </div>
</template>

<style lang="less">
// 字体图标
@import url("//at.alicdn.com/t/font_1426139_jm7n2373nlh.css");

@import url('../node_modules/vant/lib/index.css');
// 全局样式
  *{
    margin: 0;
    padding: 0;
  }
  a{
    // 继承父属性 inherit
    color: inherit;
    text-decoration: none;
  }
  a:hover{
    color:inherit
  }
  ul,li,ol{
    list-style: none;
  }
  i,em{
    font-style: normal;
  }
</style>
